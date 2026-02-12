import { Button } from "@/components/ui/button"
import Wrappers from "./components/common/Wrappers"
import PageTitle from "./components/PageTitle"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import { ArrowDownRight } from "lucide-react"
import CasesDefault from "./components/cases/CasesDefault"
import { Link } from "react-router-dom"

function App() {
  return (
    <main className="mt-6 w-full">
      <PageTitle word={"ПОВЫШАЕМ ПРОДАЖИ"}>
        <div>
          <p className="text-3xl sm:max-w-[60%] font-bold ">
            Увеличиваем прибыль в бизнесе с помощью CRM и IT-инструментов
          </p>
          <p className="sm:max-w-[60%]">
            Используем системный подход, аналитику и глубоко погружаемся в ваш проект.
          </p>
          <p className="sm:max-w-[60%]">
            Запишитесь на бесплатную онлайн-экскурсию и узнайте, какой крутой может быть CRM-система.
          </p>
        </div>
      </PageTitle>

      <section className="py-20" id="uslugi">
        <Wrappers className="w-full ">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Услуги</p>
            <h2 className="text-3xl sm:text-4xl font-semibold">amoCRM и автоматизация процессов</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              Настраиваем CRM под ваши продажи, соединяем сервисы и обучаем команду работать без хаоса.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="flex flex-col gap-6">
              <Link to={"/integration-crm"}>
                <Card className="min-h-[360px] flex flex-col justify-between">
                  <CardHeader className="gap-3">
                    <CardTitle className="text-2xl">Внедрение amoCRM</CardTitle>
                    <CardDescription className="text-base">
                      Настроим воронки, статусы, автоматические задачи и аналитику, чтобы каждый лид велся по
                      понятному сценарию.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    <span className="rounded-full border px-3 py-1 text-xs">Аудит</span>
                    <span className="rounded-full border px-3 py-1 text-xs">Воронки</span>
                    <span className="rounded-full border px-3 py-1 text-xs">Интеграции</span>
                    <span className="rounded-full border px-3 py-1 text-xs">Отчеты</span>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button className="w-full sm:w-auto">
                      Узнать больше
                      <ArrowDownRight className="ml-2 size-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>

              <Card className="min-h-[280px]">
                <CardHeader className="gap-3">
                  <CardTitle className="text-xl">Индивидуальная разработка</CardTitle>
                  <CardDescription className="text-base">
                    Создаем кастомные модули, боты, скрипты и интеграции под ваши регламенты и бизнес-логику.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3 text-sm text-muted-foreground">
                  <div>• API-интеграции с 1С, телефонией, маркетплейсами</div>
                  <div>• Автоматизация задач и уведомлений</div>
                  <div>• Сквозная аналитика и дашборды</div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-6">
              <Link to={"/audit-crm"} className="min-h-[280px]">
                <Card className="h-full">
                  <CardHeader className="gap-3">
                    <CardTitle className="text-xl">Аудит CRM</CardTitle>
                    <CardDescription className="text-base">
                      Поддерживаем работу CRM после внедрения, улучшаем сценарии продаж и контролируем качество
                      данных.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    <span className="rounded-full border px-3 py-1 text-xs">SLA</span>
                    <span className="rounded-full border px-3 py-1 text-xs">Оптимизация</span>
                    <span className="rounded-full border px-3 py-1 text-xs">Контроль качества</span>
                  </CardContent>
                </Card>
              </Link>

              <Link to={"/audit-sales"} className="min-h-[360px]">
                <Card className="h-full overflow-hidden">
                  <div className="flex h-full flex-col sm:flex-row">
                    <div className="flex-1 p-6 flex flex-col gap-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Контроль качества продаж</div>
                      <h3 className="text-2xl font-semibold">Обучение сотрудников</h3>
                      <p className="text-base text-muted-foreground">
                        Проводим обучение для отдела продаж и руководителей: от базовой навигации до продвинутых
                        сценариев и аналитики.
                      </p>
                      <div className="mt-auto">
                        <Button variant="outline">Получить программу</Button>
                      </div>
                    </div>
                    <div className="sm:w-[40%] min-h-[220px] bg-gradient-to-b from-sky-200 via-sky-100 to-white flex items-center justify-center">
                      <div className="h-[80%] w-[70%] rounded-2xl border bg-white/70 backdrop-blur">
                        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_#38bdf8,_transparent_60%)] opacity-70" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </Wrappers>
      </section>

      <div className="w-full bg-white relative -mb-5 rounded-b-3xl pt-10">
        <CasesDefault />
      </div>
    </main>
  )
}

export default App
