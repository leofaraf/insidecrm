import Wrappers from "./common/Wrappers";
import CaseCard from "./CaseCommon"
import { Card } from "./ui/card";
import { Link } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";

type CaseResult = {
    change: number | string
    description: string
}

type CaseItem = {
    logo_url: string | null
    category: string
    title?: string
    cover_url?: string
    preview_url: string
    results: CaseResult[]
}

type CasesProps = {
    cases: CaseItem[]
}

function Cases({ cases }: CasesProps) {
    const items = cases ?? []

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-center">
            {items.map((caseItem, index) => (
                <CaseCard key={`${caseItem.category}-${index}`} caseItem={caseItem} />
            ))}
        </div>
    )
}

export default Cases;
