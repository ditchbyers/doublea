import Image from "next/image"
import Link from "next/link"
import SectionBG from "@/public/SectionBG.jpg"
import { HomePage } from "@/types/typings"
import { ScrollUp } from "components/shared/ScrollUp"

import { Background } from "@/components/shared/Background"
import { Section } from "@/components/ui/Section"
import { Header } from "./Header"

export function Home({ data }: { data: HomePage }) {
  const { name, pages, backgroundImage, eventDate } = data
  return (
    <>
      <Background image={backgroundImage} />
      <div className="flex flex-col space-y-12">
        <Section className="h-[calc(100vh-80px)]" direction={"vertical"}>
          <Header title={name} subtitle={"THE ONES WHO CARE"} eventDate={eventDate} />
        </Section>
        <div className="grid grid-flow-row gap-12 md:grid-cols-2 lg:grid-cols-3">
          {pages.map((page, index) => (
            <Section key={index}>
              {page.slug && (
                <div className="relative h-[250px] w-full rounded border border-slate-950 opacity-100 drop-shadow-glow2 md:opacity-80 md:hover:opacity-100">
                  <Image className="-z-10 rounded" src={SectionBG} alt="test" fill />
                  <Link
                    className={
                      "mx-auto flex h-full w-full items-center justify-center text-center text-5xl/7 uppercase text-white drop-shadow-glow"
                    }
                    href={page.slug}
                  >
                    {page.name}
                  </Link>
                </div>
              )}
            </Section>
          ))}
        </div>
      </div>
      <ScrollUp />
    </>
  )
}
