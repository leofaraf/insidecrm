import Cases from "@/components/Cases";
import Wrappers from "@/components/common/Wrappers";
import PageTitle from "@/components/PageTitle";
import { store } from "@/store";

function Page() {
    return (
        <main>
            <PageTitle word={"ВСЕ КЕЙСЫ"}>
                <div>
                    <p className="text-3xl sm:max-w-[60%] font-bold ">Список всех кейсов</p>
                    <p className="sm:max-w-[60%]">Используем системный подход, аналитику и глубоко погружаемся в ваш проект.</p>
                    <p className="sm:max-w-[60%]">Запишитесь на бесплатную онлайн-экскурсию и узнайте, какой крутой может быть CRM-система.</p>
                </div>
            </PageTitle>
            <div className="w-full bg-white relative -mb-5 rounded-b-3xl pt-10">
                <Wrappers className="w-full">
                <p className="text-3xl font-bold">Кейсы наших работ</p>
                <p>Изучите кейсы наших работ из вашей индустрии.</p>
                </Wrappers>
                <Cases cases={store.cases ?? []} />
            </div>
        </main>
    )
}

export default Page;