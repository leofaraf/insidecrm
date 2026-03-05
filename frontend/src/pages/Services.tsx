import PageTitle from "@/components/PageTitle";
import Wrappers from "@/components/common/Wrappers";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
    { title: "Внедрение amoCRM", href: "/integration-crm" },
    { title: "Маркетинг и лидогенерация", href: "/marketing-lead-generation" },
    { title: "Настройка IP-телефонии", href: "/setup-ip-tel" },
    { title: "Email-рассылки", href: "/setup-email" },
    { title: "Аудит CRM", href: "/audit-crm" },
    { title: "SMS-рассылки", href: "/setup-sms" },
    { title: "Контроль качества продаж", href: "/audit-sales" },
    { title: "Внедрение коллтрекинга", href: "/call-tracking" },
    { title: "Внедрение Yclients", href: "/integration-y-clients" },
];

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

            <section className="py-16">
                <Wrappers className="w-full">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
                        {services.map((service) => (
                            <Link key={service.href} to={service.href} className="block w-full">
                                <Card className="h-full transition-shadow hover:shadow-md w-full">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{service.title}</CardTitle>
                                        <CardDescription>Перейти к услуге</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </Wrappers>
            </section>
        </main>
    )
}

export default Page;
