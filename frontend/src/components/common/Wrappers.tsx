import { cn } from "@/lib/utils";

function Wrappers({
    className,
    children
}: React.ComponentProps<"div">) {
    return (
        <div className={"px-6 flex w-full justify-center"}>
            <div className={cn(className, "sm:max-w-300")}>
                {children}
            </div>
        </div>
    )
}

export default Wrappers;