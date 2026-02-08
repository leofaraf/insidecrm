import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Item } from "./ui/item"
import { Link } from "react-router-dom"

type CaseResult = {
  change: number | string
  description: string
}

type CaseItem = {
  logo_url: string | null
  category: string // например: "Реклама"
  title?: string // например: "Мощная система управления проектами"
  cover_url?: string // картинка в центре карточки (как на макете)
  preview_url: string // ссылка "Смотреть кейс"
  results: CaseResult[] // лучше 3 штуки для футера, как в примере
}

type CaseCardProps = {
  caseItem: CaseItem
}

function CaseCard({ caseItem }: CaseCardProps) {
  return (
    <Link to={caseItem.preview_url}>
      <Card className="flex h-full flex-col overflow-hidden rounded-2xl pb-0">
        <CardHeader className="space-y-3 pb-4">
          {/* top row: logo left, category pill right */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {caseItem.logo_url ? (
                <img
                  alt={caseItem.category}
                  className="h-7 w-24 "
                  src={caseItem.logo_url}
                />
              ) : (
                <div className="h-7 w-21 rounded-full border border-zinc-400
                  pb-0.5 flex justify-center items-center text-xl font-semibold text-zinc-400">
                  NDA
                </div>
              )}
            </div>

            <Item variant="outline" className="rounded-full px-3 text-xs py-2 flex justify-center items-center">
              {caseItem.category}
            </Item>
          </div>

          {/* big title */}
          <CardTitle className="text-2xl leading-tight">
            {caseItem.title ?? caseItem.category}
          </CardTitle>
        </CardHeader>

        {/* image / preview area */}
        <CardContent className="px-6 pb-0">
          <div className="overflow-hidden rounded-2xl bg-muted">
            {caseItem.cover_url ? (
              <img
                alt={caseItem.title ?? caseItem.category}
                className="h-44 w-full object-cover"
                src={caseItem.cover_url}
              />
            ) : (
              <div className="h-44 w-full" />
            )}
          </div>
        </CardContent>

        {/* footer with numbers (3 columns like in the card) */}
        <CardFooter className="mt-auto grid grid-cols-[1fr_1fr_1fr_auto] items-start gap-4 bg-muted rounded-t-xl px-6 py-5 -mt-10">
          {caseItem.results?.slice(0, 3).map((r, idx) => {
            let res = "";
            if (typeof r.change === 'number') {
              let sign = r.change > 0 ? "+" : "";
              res += sign;
              res += r.change;
              res += "%";
            } else { 
              res = r.change;
            }
            return (
              <div key={`${caseItem.category}-metric-${idx}`} className="min-w-0">
                <div className="text-xl font-semibold">
                  {res}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {r.description}
                </div>
              </div>
            )
          })}

          {/* arrow button справа */}
          <div className="flex items-center self-start">
            <div
              className="flex h-8 w-8 items-center pb-0.5 justify-center rounded-full bg-foreground/10"
            >
              <span className="text-lg">↗</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default CaseCard
