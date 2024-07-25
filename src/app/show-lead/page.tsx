"use client";

import ExportCSVButton from "../components/download-csv-button/downloadcsv";
import FormLead from "../components/form-new-lead/page";
import TableLead from "../components/table-leads/page";


export default function ShowLead() {


    return (
        <main>
            <div className="m-4">
                <ExportCSVButton /></div>

            <div className="flex min-h-screen flex-rol items-center justify-around bg-white">
                <div>
                    <TableLead />
                </div>
                <div>
                    <FormLead />
                </div>
            </div>
        </main>
    );
}