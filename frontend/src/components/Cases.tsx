import CaseCard from "./CaseCommon"
import type { CaseItem } from "@/casesStore";

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
