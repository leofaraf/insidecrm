import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { store } from "@/store";

export default function GetInTouch() {
  const contacts = [
    {
      title: "ТЕЛЕГРАММ",
      href: store.telegram_link,
      primary: true,
      important: true,
    },
    {
      title: "TODO",
      href: "https://www.fiverr.com/pe/yQbQ75",
      primary: false,
      important: true,
    },
    {
      title: "DISCORD",
      href: "https://discordapp.com/users/1106200623260631153",
      primary: false,
      important: false,
    },
  ];

  // @ts-ignore
  const ContactButton = ({ href, children, primary, important }) => (
    <Button
      asChild
      variant={primary ? "default" : "outline"}
      className={[
        "rounded-xl px-6 py-6",
        important ? "" : "opacity-80 hover:opacity-100",
      ].join(" ")}
    >
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </Button>
  );

  return (
    <section id="get_in_touch" className="w-full bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        {/* Email block */}
        <div className="mb-24 flex flex-col items-center justify-center py-10 text-center md:mb-24">
          <p className="text-sm font-semibold tracking-widest text-zinc-400">
            СВЯЗАТЬСЯ С НАМИ
          </p>

          <a
            href="mailto:leofaraf@proton.me"
            className="mt-3 wrap-anywhere text-center text-3xl font-bold text-zinc-200 sm:text-4xl md:text-5xl
            uppercase"
          >
            {store.email}
          </a>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col gap-8">
          {/* Mobile buttons */}
          <div className="flex w-full flex-wrap items-center justify-between gap-4 lg:hidden">
            {contacts.map(({ title, href, primary, important }) => (
              <ContactButton
                key={title}
                href={href}
                primary={primary}
                important={important}
              >
                {title}
              </ContactButton>
            ))}
          </div>

          <div className="flex w-full items-start justify-between gap-8">
            {/* Left */}
            <div className="flex flex-col gap-1">
              <p className="text-sm text-zinc-400">Россия</p>
              <a
                href="tel:+79191764806"
                className="text-base text-zinc-100 hover:underline"
              >
                +79191764806
              </a>
            </div>

            {/* Desktop buttons */}
            <div className="hidden items-center gap-6 lg:flex">
              {contacts.map(({ title, href, primary }) => (
                <ContactButton key={title} href={href} primary={primary} important={false}>
                  {title}
                </ContactButton>
              ))}
            </div>

            {/* Right */}
            <div className="flex flex-col items-end gap-2 text-right">
              <a
                href="#home"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200"
              >
                <span>Вернуться на вверх</span>
                <ArrowUpRight className="h-4 w-4 md:h-4 md:w-4" />
              </a>
              <p className="text-base text-zinc-100">
                © {new Date().getFullYear()} Все права защищены
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
