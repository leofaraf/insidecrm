import Wrappers from "./Wrappers";

import { Button } from "@/components/ui/button"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useForm } from "react-hook-form";
import { Link } from "lucide-react";
import { store } from "@/store";

const formSchema = z.object({
  name: z.string().min(2, "Введите имя"),
  phone: z.string().min(6, "Введите телефон"),
  contactMethod: z.string(),
  consent: z.boolean().refine((v) => v === true, {
    message: "Необходимо согласие",
  }),
})

const methods = [
  { value: "call", label: "Обратный звонок" },
  { value: "tg", label: "Telegram" },
  { value: "wa", label: "WhatsApp" },
  { value: "email", label: "Email" },
]

function GetInTouch() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: "",
        phone: "",
        contactMethod: "call",
        consent: false,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className="bg-zinc-900">
            <Wrappers className="w-full">
                <div className=" text-white w-full pt-16 rounded-2xl">
                    <div className="flex flex-col sm:flex-row w-full justify-between items-center">
                        <p className="text-3xl">Остались вопросы?</p>
                        <div className="h-px w-[30%] bg-gray-700 hidden sm:block"></div>
                        <p className="text-3xl">Давайте обсудим!</p>
                    </div>
                    <div className="py-10">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                                {/* Name */}
                                <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel className="text-white/90">Имя</FormLabel>
                                    <FormControl>
                                        <Input
                                        placeholder="Ваше имя"
                                        className="h-12 rounded-xl bg-white/5 border-white/5 text-white placeholder:text-white/35 focus-visible:ring-white/15"
                                        {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-400 text-xs" />
                                    </FormItem>
                                )}
                                />

                                {/* Phone */}
                                <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel className="text-white/90">Телефон</FormLabel>
                                    <FormControl>
                                        <Input
                                        placeholder="+7 (000) 000-00-00"
                                        className="h-12 rounded-xl bg-white/5 border-white/5 text-white placeholder:text-white/35 focus-visible:ring-white/15"
                                        {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-400 text-xs" />
                                    </FormItem>
                                )}
                                />

                                {/* Contact Method */}
                                <FormField
                                control={form.control}
                                name="contactMethod"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel className="text-white/90">Способ связи</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                        <SelectTrigger className="h-12 rounded-xl bg-white/5 border-white/5 text-white focus:ring-white/15">
                                            <SelectValue />
                                        </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="bg-neutral-900 border-white/10 text-white">
                                            {methods.map((m) => (
                                            <SelectItem key={m.value} value={m.value}>
                                                {m.label}
                                            </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage className="text-red-400 text-xs" />
                                    </FormItem>
                                )}
                                />

                                {/* Consent */}
                                <FormField
                                control={form.control}
                                name="consent"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start gap-3 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="mt-1 border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-black"
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel className="text-white/60 text-sm font-normal">
                                        Соглашаюсь с условиями{" "}
                                        <a href="#" className="text-white/80 underline underline-offset-4">
                                            обработки персональных данных
                                        </a>
                                        </FormLabel>
                                        <FormMessage className="text-red-400 text-xs" />
                                    </div>
                                    </FormItem>
                                )}
                                />

                                {/* Submit */}
                                <Button
                                type="submit"
                                className="w-full h-14 rounded-full bg-white text-neutral-900 hover:bg-white/90 shadow-[0_10px_30px_rgba(255,255,255,0.06)]"
                                >
                                Отправить
                                </Button>
                            </form>
                        </Form>
                        <div className="mt-10 text-lg gap-4 flex flex-col">
                            <div className="h-px w-full bg-gray-700 hidden sm:block"></div>
                            <p>
                                {"Не любите заполнять формы? Напишите "}
                                <a href={store.telegram_link} className="underline">
                                    нам в Telegram
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </Wrappers>
        </div>
    );
}

export default GetInTouch;