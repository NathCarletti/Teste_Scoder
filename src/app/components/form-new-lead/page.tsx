"use client"

import { useState } from "react";

const FormLead = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [price, setPrice] = useState('');
    const [supply_type, setSupplyType] = useState('');
    const [mes, setMes] = useState('');
    const [userid, setUserid] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log("event",event.target);

        const dataForm = {
            name: event.target.name.value,
            city: event.target.city.value,
            state: event.target.state.value,
            price: parseFloat(event.target.price.value),
            supply_type: event.target.supply_type.value,
            mes: event.target.mes.value,
        };

        try {
            const response = await fetch('/api/newlead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataForm),
            });

            if (!response.ok) {
                throw new Error('Resposta não ok.');
            }
            const data = await response.json();
            setSuccess('Usuário criado com sucesso.');
            setName('');
            setCity('');
            setState('');
            setPrice('');
            setSupplyType('');
            setMes('');
        } catch (error: any) {
            const errorMessage = error instanceof Error ? error.message : 'Deu erro';
            setError(errorMessage);
            console.error('Erro ao criar usuário:', error);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="min-w-96">
                <div className="mb-4">
                    <label className=" flex flex-row" htmlFor="name">
                        <span className="self-center align-middle align-mnamedle after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700 mr-1">Nome:
                        </span>
                        <input type="text" name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                     placeholder-slate-400 focus:outline-none focus:border-sky-500 
                     focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            value={name} onChange={(e) => setName(e.target.value)}
                            placeholder="Digite seu nome completo:" />
                    </label>
                </div>
                <div className="mb-4">
                    <label className=" flex flex-row" htmlFor="city">
                        <span className="self-center align-middle after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mr-1">
                            Cidade:
                        </span>
                        <input name="city" type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                     placeholder-slate-400 focus:outline-none focus:border-sky-500 
                     focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            value={city} onChange={(e) => setCity(e.target.value)}
                            placeholder="Digite sua cidade:" required />
                    </label>
                </div>
                <div className="mb-4">
                    <label className=" flex flex-row" htmlFor="state">
                        <span className="self-center align-middle after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mr-1">
                            Estado:
                        </span>
                        <input type="text" name="state" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                     placeholder-slate-400 focus:outline-none focus:border-sky-500 
                     focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            value={state} onChange={(e) => setState(e.target.value)}
                            placeholder="Digite seu estado:" />
                    </label>
                </div>
                <div className="mb-4">
                    <label className=" flex flex-row" htmlFor="price">
                        <span className="self-center align-middle after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mr-1 text-justify">
                            Preço:
                        </span>
                        <input type="number" name="price" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                     placeholder-slate-400 focus:outline-none focus:border-sky-500 
                     focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            value={price} onChange={(e) => setPrice(e.target.value)}
                            placeholder="Digite o valor mensal:" />
                    </label>
                </div>
                <div className="mb-4">
                    <label className=" flex flex-row" htmlFor="supply_type">
                        <span className="self-center align-middle after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 m-0">
                            Tipo de energia:
                        </span>
                        <input type="text" name="supply_type" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                     placeholder-slate-400 focus:outline-none focus:border-sky-500 
                     focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            value={supply_type} onChange={(e) => setSupplyType(e.target.value)}
                            placeholder="Digite o tipo de energia:" />
                    </label>
                </div>
                <div className="mb-4">
                    <label className=" flex flex-row" htmlFor="mes">
                        <span className="self-center align-middle after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mr-1">
                            Mês:
                        </span>
                        <input type="text" name="mes" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                     placeholder-slate-400 focus:outline-none focus:border-sky-500 
                     focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            value={mes} onChange={(e) => setMes(e.target.value)}
                            placeholder="Digite o mês:" />
                    </label>
                </div>
            </div>
            <div className="flex-row">
                <button className="mt-8 border border-indigo-500 p-3 bg-indigo-500 
            text-white font-extrabold rounded-md hover:bg-indigo-700 self-stretch" type="submit">SALVAR</button>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </div>

        </form>
    );
};
export default FormLead;