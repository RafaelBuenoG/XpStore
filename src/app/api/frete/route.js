import melhorenvio from '@api/melhorenvio';



melhorenvio.solicitacaoDoToken({ 'User-Agent': 'Aplicação (email para contato técnico)' })
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));

export async function POST(req) {
    try {
        const body = await req.json();

        const response = await fetch("https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.MELHOR_ENVIO_token}`, // coloque sua chave da API Melhor Envio
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "XP Frete (miguelarao13@gmail.com)"
            },
            body: JSON.stringify([
                {
                    from: { postal_code: "01152010" },
                    to: { postal_code: body.cep },
                    package: {
                        height: 4,
                        widht: 12,
                        lenght: 17,
                        weight: 0.3
                    }
                }
            ]),
        });

        const data = await response.json();
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Erro ao calcular frete" }), { status: 500 });
    }
}