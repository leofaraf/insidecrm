import type { ComponentProps } from "react";
import { Link } from "react-router-dom";
import Wrappers from "./common/Wrappers";
import { Button } from "./ui/button";
import { store } from "@/store";

type PageProps = ComponentProps<"div"> & {
    word: string;
};

function Page({
    children,
    ...props
}: PageProps) {
    return (
        <div>
            <div className="marquee-wrapper bg-gray-100 -z-14 py-10">
                <div className="marquee-track text-gray-200">
                <span className="text-[200px] font-bold p-0 m-0 leading-none">
                    {Array(4).fill(props.word.toUpperCase()).join(" ")}
                </span>
                <span className="text-[200px] font-bold p-0 m-0 leading-none">
                    {Array(4).fill(props.word.toUpperCase()).join(" ")}
                </span>
                </div>
            </div>
            <div className="w-full -mt-35 relative z-3
            bg-linear-to-b from-transparent from-0% to-gray-100 to-20%">
                <Wrappers className="w-full flex flex-col text-xl gap-5 z-3 py-10">
                    {children}
                    <div className="flex gap-4 pt-20 flex-col sm:flex-row">
                        <Button className="p-6 w-64 rounded-xl">
                        ЗАПИСЬ НА КОНСУЛЬТАЦИЮ
                        </Button>
                        <Link to={store.telegram_link} target={"_blank"}>
                        <Button className="p-6 rounded-xl" variant={"outline"}>
                            НАПИСАТЬ НАМ
                        </Button>
                        </Link>
                    </div>
                </Wrappers>
            </div>
        </div>
    )
}

export default Page;
