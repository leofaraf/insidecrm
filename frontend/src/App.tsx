import { Button } from "@/components/ui/button"
import Wrappers from "./components/common/Wrappers"
import { store } from "./store"
import { Link } from "react-router-dom"
import Cases from "./components/Cases"
import PageTitle from "./components/PageTitle"
import { Card } from "./components/ui/card"
import { ArrowDownRight } from "lucide-react"
import CasesDefault from "./components/cases/CasesDefault"

function App() {
  return (
    <main className="mt-6 w-full">
      <PageTitle word={"ПОВЫШАЕМ ПРОДАЖИ"}>
        <div>
          <p className="text-3xl sm:max-w-[60%] font-bold ">Увеличиваем прибыль в бизнесе с помощью CRM и IT-инструментов</p>
          <p className="sm:max-w-[60%]">Используем системный подход, аналитику и глубоко погружаемся в ваш проект.</p>
          <p className="sm:max-w-[60%]">Запишитесь на бесплатную онлайн-экскурсию и узнайте, какой крутой может быть CRM-система.</p>
        </div>
      </PageTitle>
      <div className="w-full bg-white relative -mb-5 rounded-b-3xl pt-10">
        <CasesDefault />
      </div>
    </main>
  )
}

export default App
