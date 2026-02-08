import PageTitle from "@/components/PageTitle";

function Page() {
    return (
        <main>
            <PageTitle word={"НАШИ УСЛУГИ"}>
                <div>
                    <p className="text-3xl sm:max-w-[60%] font-bold ">Список наших услуг</p>
                    <p className="sm:max-w-[60%]">Используем системный подход, аналитику и глубоко погружаемся в ваш проект.</p>
                    <p className="sm:max-w-[60%]">Запишитесь на бесплатную онлайн-экскурсию и узнайте, какой крутой может быть CRM-система.</p>
                </div>
            </PageTitle>
        </main>
    )
}

export default Page;