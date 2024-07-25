"use client";

import FormLead from "../components/form-new-lead/page";
import TableLead from "../components/table-leads/page";


export default function ShowLead() {


    return (
        <main className="flex min-h-screen flex-rol items-center justify-around bg-white">
            <div>
                <TableLead />
            </div>
            <div>
                <FormLead />
            </div>
        </main>
    );
}