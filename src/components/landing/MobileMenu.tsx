"use client"
import {Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "@radix-ui/react-label"
import { LinkData } from "@/src/constants/LinkData"
import Link from "next/link"
import { Menu } from "lucide-react"


const MobileMenu = ()=> {

  return (
    <Sheet>

      <SheetTrigger asChild>
        <Button variant="default" className="bg-transparent text-[#111]" ><Menu /></Button>
      </SheetTrigger>

      <SheetContent className="dark:bg-gray-800 ">
        <div className="grid flex-1 auto-rows-min gap-6 px-4 pt-8">
            {
              LinkData && LinkData.map((item, i)=>{
                return(
                  <Link key={i} href={item.href}>{item.label}</Link>
                )
              })
            }
        </div>
      </SheetContent>
    </Sheet>
  )
}


export default MobileMenu