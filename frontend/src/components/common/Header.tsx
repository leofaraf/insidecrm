import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ArrowRightToLine } from "lucide-react";
import Wrappers from "./Wrappers";

function Header() {
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

    return (
        <>  
            <div className="p-1.5 sm:px-6 border-b flex flex-row justify-center fixed top-0 w-full bg-white z-1000">
                <Wrappers className="flex w-full justify-center sm:justify-between items-center">
                    <Link to={"/"}>
                        <p className="font-bold hidden sm:block">InsideCRM</p>
                    </Link>
                    <div className="flex items-center gap-4">
                        <NavigationMenu className="[&_div.absolute]:left-auto [&_div.absolute]:right-0">
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-sm font-normal">УСЛУГИ</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div>
                                            <div className="min-w-120 grid grid-cols-2 justify-items-start p-4 space-x-5 border-b">
                                                <p className="font-semibold">ОСНОВНЫЕ УЛУГИ</p>
                                                <p className="font-semibold">ДОПОЛНИТЕЛЬНЫЕ</p>
                                                {services.map((service) => (
                                                    <div className="px-0 p-2 whitespace-nowrap">
                                                        <Link to={service.href} className="w-full">
                                                            {service.title}
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="min-w-140 flex gap-2 justify-center p-4 items-center">
                                                <Link className="flex gap-2 justify-center items-center" to={"/services"}>
                                                    <p className="font-semibold">Все услуги</p>
                                                    <ArrowRightToLine />
                                                </Link>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <Link to={"/cases"} className="text-sm">КЕЙСЫ</Link>
                        <Button className="p-2 h-9 w-30 rounded-lg text-xs">СВЯЗАТЬСЯ</Button>
                    </div>
                </Wrappers>
            </div>
        </>
    )
}

export default Header;
