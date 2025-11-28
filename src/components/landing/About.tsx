import { ArrowRight } from "lucide-react"
import Wrapper from "../global/Wrapper"
import { Button } from "../ui/button"

const About = () => {
  return (
    <Wrapper>
        <div className="py-10 sm:py-20">
            <p className="">Hey, I'm</p>
            <h1 className="py-3 text-4xl">MD AJIJUL ISLAM</h1>
            <p className="max-w-2xl text-justify">I'm a software engineer based in Toronto, Canada and also a communication and journalism student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.</p>
        

            <a href={"https://www.facebook.com/ajijulmdislam"} target="_blank" className="flex items-center gap-2 mt-5">Say Hi <ArrowRight className="w-4 h-4"/> </a>
        
        </div>
    </Wrapper>
  )
}

export default About
