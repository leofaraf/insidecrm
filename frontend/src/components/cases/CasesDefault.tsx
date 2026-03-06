import Wrappers from "@/components/common/Wrappers";
import { casesStore } from "@/casesStore";
import Cases from "../Cases";
import { Link } from "react-router-dom";
import { Card } from "../ui/card";
import { ArrowDownRight } from "lucide-react";

function CasesDefault() {
    return (
        <Wrappers className="w-full">
            <p className="text-3xl font-bold max-w-160">Почему лидеры рынка предпочитают работать с командой InsideCRM</p>
            <p className="text-lg max-w-180 pt-4">В кейсах раскрываем, как мы создаём систему продаж на базе amoCRM, которая масштабируется вместе с компанией без потери качества в работе с клиентами.</p>
            <div className="py-10 space-y-4">
                <Cases cases={casesStore.slice(0, 3)} />
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
