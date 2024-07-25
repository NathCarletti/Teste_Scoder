"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const FormNew = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    
    const router = useRouter();
    const delay = (ms:any) => new Promise(resolve => setTimeout(resolve, ms));
    const handleSubmit = async (event: any) => {
       
        event.preventDefault();

        console.log("event",event.target);
        const dataForm = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            phone: event.target.phone.value,
            cpf: event.target.cpf.value,
        };


        try {
            const response = await fetch('/api/newuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataForm),
            });
            console.log(response)
            if (!response.ok) {
                throw new Error('Conexão não ok.');
            }
            const data = await response.json();
            setSuccess('Usuário criado com sucesso.');
            setName('');
            setEmail('');
            setPassword('');
            setCpf('');
            setPhone('');
            await delay(1500); // 2 segundos de atraso
            console.log("Redirecionando...");
            router.push('/show-lead');
        } catch (error: any) {
            const errorMessage = error instanceof Error ? error.message : 'Erro inesperado.';
            setError(errorMessage);
            console.error('Erro ao criar usuário:', error);
        }

    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="min-w-96">
                <div className="mb-4">
                    <label className=" flex flex-row" htmlFor="name">
                        <span className="self-center align-middle after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700 mr-1">Nome:
                        </span>
                        <input type="text" name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                     placeholder-slate-400 focus:outline-none focus:border-sky-500 
                     focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            value={name} onChange={(e) => setName(e.target.value)}
                            placeholder="Digite seu nome completo:" />
                    </label>
                </div>
                <div className="mb-4">
                    <label className=" flex flex-row" htmlFor="phone">
                        <span className="self-center align-middle after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mr-1">
                            Telefone:
                        </span>
                        <input name="phone" type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                     placeholder-slate-400 focus:outline-none focus:border-sky-500 
                     focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            value={phone} onChange={(e) => setPhone(e.target.value)}
                            placeholder="Digite seu telefone:" required />
                    </label>
                </div>
                <div className="mb-4">
                    <label className=" flex flex-row" htmlFor="cpf">
                        <span className="self-center align-middle after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mr-1">
                            CPF:
                        </span>
                        <input type="text" name="cpf" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                     placeholder-slate-400 focus:outline-none focus:border-sky-500 
                     focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            value={cpf} onChange={(e) => setCpf(e.target.value)}
                            placeholder="Digite seu CPF:" />
                    </label>
                </div>
                <div className="mb-4">
                    <label className=" flex flex-row" htmlFor="email">
                        <span className="self-center align-middle after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mr-1 text-justify">
                            E-mail:
                        </span>
                        <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                     placeholder-slate-400 focus:outline-none focus:border-sky-500 
                     focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu e-mail:" />
                    </label>
                </div>
                <div className="mb-4">
                    <label className=" flex flex-row" htmlFor="password">
                        <span className="self-center align-middle after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mr-1">
                            Senha:
                        </span>
                        <input type="text" name="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                     placeholder-slate-400 focus:outline-none focus:border-sky-500 
                     focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            placeholder="Digite uma senha:" />
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
export default FormNew;