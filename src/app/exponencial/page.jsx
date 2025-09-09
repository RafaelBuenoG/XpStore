"use client";
import { useMemo, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

export default function ExponentialDashboard() {
  // Entradas
  const [u0, setU0] = useState(1000);     
  const [a, setA] = useState(12);         
  const [c, setC] = useState(5);          
  const [arpu, setArpu] = useState(25);   
  const [meses, setMeses] = useState(12); 
  const [v0, setV0] = useState(50000);    
  const [dep, setDep] = useState(20);     

  const r = (a - c) / 100; // crescimento líquido

  const series = useMemo(() => {
    const rows = [];
    let receitaAcum = 0;

    for (let t = 0; t <= meses; t++) {
      const usuarios = u0 * Math.pow(1 + r, t);
      const receita = arpu * usuarios;
      receitaAcum += receita;
      const valorAtivo = v0 * Math.pow(1 - dep / 100, t);

      rows.push({
        t,
        usuarios: Math.round(usuarios),
        receita: Number(receita.toFixed(2)),
        receitaAcum: Number(receitaAcum.toFixed(2)),
        valorAtivo: Number(valorAtivo.toFixed(2)),
      });
    }
    return rows;
  }, [u0, r, arpu, meses, v0, dep]);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8">
      <h1 className="text-xl md:text-2xl font-bold text-center">
        Modelagem Exponencial
      </h1>

      {/* Controles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-gray-800 p-4 rounded-xl shadow">
        <label className="flex flex-col">
          Usuários iniciais (U0)
          <input type="number" className="input" value={u0} onChange={e => setU0(+e.target.value)} />
        </label>
        <label className="flex flex-col">
          Aquisição %/mês (a)
          <input type="number" className="input" value={a} onChange={e => setA(+e.target.value)} />
        </label>
        <label className="flex flex-col">
          Churn %/mês (c)
          <input type="number" className="input" value={c} onChange={e => setC(+e.target.value)} />
        </label>
        <label className="flex flex-col">
          ARPU (R$)
          <input type="number" className="input" value={arpu} onChange={e => setArpu(+e.target.value)} />
        </label>
        <label className="flex flex-col">
          Meses (horizonte)
          <input type="number" className="input" value={meses} onChange={e => setMeses(+e.target.value)} />
        </label>
        <label className="flex flex-col">
          Valor inicial ativo (R$ V0)
          <input type="number" className="input" value={v0} onChange={e => setV0(+e.target.value)} />
        </label>
        <label className="flex flex-col">
          Depreciação % por período (d)
          <input type="number" className="input" value={dep} onChange={e => setDep(+e.target.value)} />
        </label>
      </div>

      {/* KPIs rápidos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded-xl shadow text-center">
          <div className="text-sm text-gray-500">Crescimento líquido (r)</div>
          <div className="text-lg md:text-xl font-bold">{(r * 100).toFixed(2)}%/mês</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl shadow text-center">
          <div className="text-sm text-gray-500">Usuários no mês {meses}</div>
          <div className="text-lg md:text-xl font-bold">{series.at(-1)?.usuarios ?? 0}</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl shadow text-center">
          <div className="text-sm text-gray-500">Receita acumulada</div>
          <div className="text-lg md:text-xl font-bold">R$ {series.at(-1)?.receitaAcum?.toLocaleString("pt-BR")}</div>
        </div>
      </div>

      {/* Gráfico de Usuários e Receita */}
      <div className="bg-gray-800 p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-2">Projeção de Usuários e Receita</h2>
        <div className="h-64 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={series}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="t" label={{ value: "Mês", position: "insideBottomRight", offset: -5 }} />
              <YAxis />
              <Tooltip formatter={(val, name) =>
                name.includes("receita") ? [`R$ ${val.toLocaleString("pt-BR")}`, name] : [val, name]
              } />
              <Legend />
              <Line type="monotone" dataKey="usuarios" name="Usuários" stroke="#6366F1" dot={false} />
              <Line type="monotone" dataKey="receita" name="Receita (R$)" stroke="#10B981" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gráfico de Depreciação */}
      <div className="bg-gray-800 p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-2">Depreciação do Ativo</h2>
        <div className="h-64 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={series}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="t" label={{ value: "Período", position: "insideBottomRight", offset: -5 }} />
              <YAxis />
              <Tooltip formatter={(val) => `R$ ${val.toLocaleString("pt-BR")}`} />
              <Legend />
              <Line type="monotone" dataKey="valorAtivo" name="Valor do Ativo (R$)" stroke="#F59E0B" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tabela simples */}
      <div className="bg-gray-800 p-4 rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm min-w-[600px]">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2 pr-4">Mês</th>
              <th className="py-2 pr-4">Usuários</th>
              <th className="py-2 pr-4">Receita (R$)</th>
              <th className="py-2 pr-4">Receita Acum. (R$)</th>
              <th className="py-2 pr-4">Valor Ativo (R$)</th>
            </tr>
          </thead>
          <tbody>
            {series.map(row => (
              <tr key={row.t} className="border-b last:border-none">
                <td className="py-2 pr-4">{row.t}</td>
                <td className="py-2 pr-4">{row.usuarios}</td>
                <td className="py-2 pr-4">R$ {row.receita.toLocaleString("pt-BR")}</td>
                <td className="py-2 pr-4">R$ {row.receitaAcum.toLocaleString("pt-BR")}</td>
                <td className="py-2 pr-4">R$ {row.valorAtivo.toLocaleString("pt-BR")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx global>{`
        .input { @apply mt-1 px-3 py-2 rounded-md border border-gray-300; }
      `}</style>
    </div>
  );
}
