import React, { useState } from 'react';
//import InputMask from 'react-input-mask';   nao encontra, dei cache clean --force + npm install e nada
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '@/app/validationSchema/schema';
import { z } from 'zod';

type UserFormData = z.infer<typeof formSchema>;

const UserForm = () => {

  const [nameUser, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserFormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: UserFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="min-w-96">
        <div className="mb-4">
          <label className=" flex flex-row" htmlFor="name">
            <span className="self-center align-middle after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700 mr-1">Nome:
            </span>
            <input type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                   placeholder-slate-400 focus:outline-none focus:border-sky-500 
                   focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              {...register('name')}
              placeholder="Digite seu nome completo:" />
            {errors.name && <p>{errors.name.message}</p>}
          </label>
        </div>
        <div className="mb-4">
          <label className=" flex flex-row" htmlFor="phone">
            <span className="self-center align-middle after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mr-1">
              Telefone:
            </span>
            <input type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                   placeholder-slate-400 focus:outline-none focus:border-sky-500 
                   focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" data-mask="(99) 9 9999-9999"
              placeholder="Digite seu telefone:" required  {...register('phone')} />
            {errors.phone && <p>{errors.phone.message}</p>}
          </label>
        </div>
        <div className="mb-4">
          <label className=" flex flex-row" htmlFor="cpf">
            <span className="self-center align-middle after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mr-1">
              CPF:
            </span>
            <input type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                   placeholder-slate-400 focus:outline-none focus:border-sky-500 
                   focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" data-mask="999.999.999-99"
              {...register('cpf')}
              placeholder="Digite seu CPF:" />
            {errors.cpf && <p>{errors.cpf.message}</p>}
          </label>
        </div>
        <div className="mb-4">
          <label className=" flex flex-row" htmlFor="email">
            <span className="self-center align-middle after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mr-1 text-justify">
              E-mail:
            </span>
            <input type="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                   placeholder-slate-400 focus:outline-none focus:border-sky-500 
                   focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              {...register('email')}
              placeholder="Digite seu e-mail:" />
            {errors.email && <p>{errors.email.message}</p>}
          </label>
        </div>
        <div className="mb-4">
          <label className=" flex flex-row" htmlFor="password">
            <span className="self-center align-middle after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mr-1">
              Senha:
            </span>
            <input type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                   placeholder-slate-400 focus:outline-none focus:border-sky-500 
                   focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              {...register('password')}
              placeholder="Digite uma senha:" />
            {errors.password && <p>{errors.password.message}</p>}
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
export default UserForm;