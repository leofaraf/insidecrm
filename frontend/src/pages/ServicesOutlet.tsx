import CasesDefault from "@/components/cases/CasesDefault";
import { Outlet } from "react-router-dom";

function Page() {
    return (
        <>
            <Outlet />
            <div className="w-full bg-white relative -mb-5 rounded-b-3xl pt-10">
                <CasesDefault />
            </div>
        </>
    )
}

export default Page;