"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

require('dotenv').config();

export default function Home() {

  const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

  const handlerClicknewAcc = () => {
    router.push('/newaccount');
  };
  
  const handlerClicklogin = async (event: any) => {
       
    event.preventDefault(); 

        try {
          const response = await fetch(`/api/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
          if (!response.ok) {
            throw new Error('Falha ao buscar users.');
          }
          const data = await response.json();
          console.log(data)
          setEmail('');
          setPassword('');
  
        router.push('/show-lead');
        } catch (error: any) {
          setError(error.message);
        } 
      };
      
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white" >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

      </div>

      <div className="mb-16 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left justify-center">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors
           border-gray-700 bg-gray-300 dark:border-neutral-900 dark:bg-neutral-800/30"
          rel="noopener noreferrer">
          <p className="m-0 max-w-[30ch] text-sm ">
            Entre com seu e-mail e senha 
          </p>
          <p className="m-0 max-w-[30ch] text-sm ">ou crie uma conta</p>
          <div className="mt-3 mb-3">
            <div className="mb-4">
              <label className="flex flex-row " htmlFor="name">
                <span className="self-center align-middle after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700 mr-1">Email:
                </span>
                <input type="text" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                     placeholder-slate-400 focus:outline-none focus:border-sky-500 
                     focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Digite seu email:"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
              </label>
            </div>
            <div className="mb-4">
              <label className=" flex flex-row" htmlFor="name">
                <span className="self-center align-middle after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700 mr-1">Senha:
                </span>
                <input type="password" name="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                     placeholder-slate-400 focus:outline-none focus:border-sky-500 
                     focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Digite sua senha:" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
              </label>
            </div>

          </div>
          <a className="" onClick={handlerClicklogin}>
            <h2 className="mb-2 text-2xl font-semibold group rounded-lg border border-transparent px-1 py-2 transition-colors
          hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              Entrar{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" >
                -&gt;
              </span>
            </h2>
          </a>
          <a className="" onClick={handlerClicknewAcc}>
            <h2 className="mb-2 text-2xl font-semibold group rounded-lg border border-transparent px-1 py-2 transition-colors
          hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" >
              Criar conta{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </div>
      </div>
    </main>
  );
}
