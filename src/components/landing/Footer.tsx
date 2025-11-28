import { Facebook, Github, Linkedin, Mail } from "lucide-react"
import Wrapper from "../global/Wrapper"

const Footer = () => {
  return (
    <Wrapper className="py-5">
      <hr className="mb-5" />
      <div className="sm:flex justify-between">
        <p className="pb-4 sm:pb-0 text-sm">Copyright © 2025 - All rights reserved by <a href="/">Md Ajijul Islam</a></p>
        <div className="flex gap-4 max-sm:justify-center">
          <a href="https://www.facebook.com/ajijulmdislam" target="_blank" className="border px-2 py-1 rounded dark:border-white"><Facebook height={17} width={17} /></a>
          <a href="https://www.facebook.com/ajijulmdislam" target="_blank" className="border px-2 py-1 rounded dark:border-white"><Github height={17} width={17}/></a>
          <a href="mailto:imdajijul740@gmail.com" target="_blank" className="border px-2 py-1 rounded dark:border-white"><Mail height={17} width={17}/></a>
          <a href="https://www.facebook.com/ajijulmdislam" target="_blank" className="border px-2 py-1 rounded dark:border-white"><Linkedin height={17} width={17}/></a>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer
