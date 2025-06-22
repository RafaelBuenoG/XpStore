document.getElementById('calcularFrete').addEventListener('click', () => {
    const cep = document.getElementById('cep').value;
    const resultadoDiv = document.getElementById('resultadoFrete');

    if (!cep || cep.length < 8) {
        resultadoDiv.innerHTML = 'Por favor, digite um CEP válido.';
        return;
    }

    resultadoDiv.innerHTML = '<p>Calculando...</p>';

    // Simulando delay
    setTimeout(() => {
        const opcoesFreteFalsas = [
            {
                company: { name: "Correios" },
                name: "PAC",
                price: "22.50",
                delivery_time: 6
            },
            {
                company: { name: "Jadlog" },
                name: "Package",
                price: "29.90",
                delivery_time: 3
            },
            {
                company: { name: "Azul Cargo" },
                name: "Express",
                price: "35.00",
                delivery_time: 2
            }
        ];

        resultadoDiv.innerHTML = '<h4>Opções de Frete:</h4>';

        opcoesFreteFalsas.forEach((frete) => {
            const div = document.createElement('div');
            div.classList.add('frete-opcao');
            div.innerHTML = `
        ${frete.company.name} - ${frete.name}<br>
        Preço: <strong>R$ ${frete.price}</strong><br>
        Prazo: ${frete.delivery_time} dias úteis<br><br>
      `;
            resultadoDiv.appendChild(div);
        });
    }, 1500); // Simula tempo de API
});