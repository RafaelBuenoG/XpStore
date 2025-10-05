"use client";
import { useState } from 'react';

export default function CalculadorFrete() {
    const [cep, setCep] = useState("");
    const [fretes, setFretes] = useState([]);

    const calcularFrete = async () => {
        console.log("aaaaaaaaa")
        const res = await fetch("/api/frete", {
            method: "POST",
            headers: { "Conten-Type": "application/json" },
            body: JSON.stringify({ cep }),
        });
        const data = await res.json();
        console.log("Resposta da API:", data);
        
        setFretes(data.data || data || []);

    };

    return (
        <div>
            <h3>Calcular Frete</h3>
            <input type="text"
                placeholder='Digite seu CEP'
                value={cep}
                onChange={(e) => setCep(e.target.value)}
            />
            <button onClick={calcularFrete}>Calcular</button>

            <ul>
                {fretes.length > 0 ? (
                    fretes.map((f, i) => (
                        <li key={i}>
                            {f.name} - R${f.price} - {f.delivery_time} dias
                        </li>
                    ))
                ) : (
                    <li>Nenhum frete encontrado</li>
                )}
            </ul>

        </div>
    );
}