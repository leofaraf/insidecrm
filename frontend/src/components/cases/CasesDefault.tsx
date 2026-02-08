import Wrappers from "@/components/common/Wrappers";
import { store } from "@/store";
import Cases from "../Cases";
import { Link } from "react-router-dom";
import { Card } from "../ui/card";
import { ArrowDownRight } from "lucide-react";

function CasesDefault() {
    return (
        <Wrappers className="w-full">
            <p className="text-3xl font-bold">Кейсы наших работ</p>
            <p>Изучите кейсы наших работ из вашей индустрии.</p>
            <div className="py-10 space-y-4">
                <Cases cases={store.cases.slice(0, 3) ?? []} />
                <Link to={"/cases"}>
                <Card className="flex flex-row justify-center items-end w-full text-xl bg-zinc-100 gap-3 outline">
                    <p>Все кейсы</p>
                    <ArrowDownRight />
                </Card>
                </Link>
            </div>
        </Wrappers>
    )
}

export default CasesDefault;