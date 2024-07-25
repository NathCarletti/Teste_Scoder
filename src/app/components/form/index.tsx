/*import { Form, useForm } from 'react-hook-form';
import { z } from 'zod';
import { validationSchema } from '../validationSchema/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { formatCpfCnpj } from '../formatCpfCnpj/formatCpfCnpj';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '../../components/ui/form';

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      cpfCnpj: '',
    },
  });

  const onSubmit = (values: z.infer<typeof validationSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-10 pb-10 flex-1 lg:maxLength-w-2xl ml-auto"
      >
        <FormField
          control={form.control}
          name="cpfCnpj"
          render={({ field: { onChange, ...props } }) => (
            <FormItem>
              <FormLabel>CPF/CNPJ*</FormLabel>
              <FormControl>
                <Input
                  onChange={(e) => {
                    const { value } = e.target;
                    e.target.value = formatCpfCnpj(value);
                    onChange(e);
                  }}
                  placeholder="CPF/CNPJ"
                  {...props}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="mt-8" type="submit">
          Salvar
        </Button>
      </form>
    </Form>
  );
};*/