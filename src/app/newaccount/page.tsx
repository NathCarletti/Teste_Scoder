
"use client";

import FormNew from "../components/form-new-user/page";

export default function NewAccount() {


    return (<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <div className="mb-16 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left justify-center">
            <div className="mb-2 "><p className="font-bold">Crie um novo usuário:</p></div>
            
                <FormNew />
        </div>
    </main>);
}