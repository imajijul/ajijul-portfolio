'use client'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { LinkData } from "@/src/constants/LinkData"
import { Button } from "../ui/button"
import Wrapper from "../global/Wrapper"
import MobileMenu from "./MobileMenu"
const Navbar = () => {
  
  let [mobileMenu, setMobileMenu ] = useState(false)

  return (
    <div className="sticky py-2 z-1 top-0 left-0 w-full backdrop-blur bg-gray-200/30">
      <Wrapper>
        <div className="flex justify-between items-center">
            
            {/* Desktop View */}

            <Link href={"/"} className="text-xl font-bold">{"< Ajijul />"}</Link>
          
            {/* nav links */}
            <ul className="hidden sm:flex items-center justify-center gap-4 ">
              {
                LinkData && LinkData.map((item, i)=>{
                  return(
                    <li key={i}><Link href={item["href"]}>{item.label}</Link></li>
                  )
                })
              }
            </ul>

            {/* Mobile View */}
            <div className="sm:hidden z-100">
              <MobileMenu />
            </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Navbar
