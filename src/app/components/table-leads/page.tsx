import { useEffect, useState } from 'react';

interface Lead {
  id: number;
  name: string;
  city: string;
  state: string;
  price: number;
  supply_type: string;
  mes: string;
  createdAt: string;
}

const LeadsTable = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch('/api/showleads');
        if (!response.ok) {
          throw new Error('Falha ao buscar leads.');
        }
        const data: Lead[] = await response.json();
        setLeads(data);

      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <table className="border-collapse border border-slate-500 m-4 text-sm">
      <thead>
        <tr className='text-center'>
          <th className='border border-slate-600'>Nome</th>
          <th className='border border-slate-600'>Cidade</th>
          <th className='border border-slate-600'>Estado</th>
          <th className='border border-slate-600'>Tipo de Fornecimento</th>
          <th className='border border-slate-600'>Mês</th>
          <th className='border border-slate-600'>Valor Mensal</th>
          <th className='border border-slate-600'>Valor Mensal com Desconto</th>
          <th className='border border-slate-600'>Valor em 1 ano</th>
          <th className='border border-slate-600'>Valor em 3 anos</th>
          <th className='border border-slate-600'>Valor em 5 anos</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {leads.map(lead => (
          <tr key={lead.id}>
            <td  className="border border-slate-700">{lead.name}</td>
            <td  className="border border-slate-700">{lead.city}</td>
            <td  className="border border-slate-700">{lead.state}</td>
            <td  className="border border-slate-700">{lead.supply_type}</td>
            <td  className="border border-slate-700">{lead.mes}</td>
            <td  className="border border-slate-700">R${lead.price}</td>
            <td  className="border border-slate-700">R${lead.price*0.75}</td>
            <td  className="border border-slate-700">R${lead.price*0.75*12}</td>
            <td  className="border border-slate-700">R${lead.price*0.75*36}</td>
            <td  className="border border-slate-700">R${lead.price*0.75*60}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadsTable;