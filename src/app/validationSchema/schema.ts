import { z } from 'zod';

export const formSchema = z.object({
    name: z.string().nonempty('Nome é obrigatório'),
    email: z.string().email('E-mail inválido'),
    password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
    cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido'),
    phone: z.string().regex(/^\(\d{2}\) \d \d{4}-\d{4}$/, 'Número de telefone inválido')
});
