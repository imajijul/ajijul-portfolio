import { ExperienceData } from "@/src/constants/ExperienceData"
import Wrapper from "../global/Wrapper"

const Experience = () => {
  return (
    <section className="py-20" id="experience">
      <Wrapper>
        <div className="max-sm:flex-col sm:flex gap-3 justify-between">
            <h1 className="text-2xl flex-2 font-bold max-sm:text-center ">Experience:</h1>
            <div className="flex flex-col mt-0 pt-0 flex-10 sm:[&>div:nth-child(1)]:pt-0">
                {
                    ExperienceData && ExperienceData.map((item, i)=>{
                        return(
                            <div key={i} className="py-3">
                               <div className="max-sm:flex-col sm:flex justify-between items-center">
                                    <h1 className="text-xl sm:text-2xl text-justify font-semibold">{item.title}</h1>
                                    <p className="text-end sm:text-start">{`${item.start} - ${item.end}`}</p>
                               </div>
                               <p className="py-1 text-muted-foreground">{item.company}</p>
                               <div>
                                {
                                    item.features && item.features.map((feature, i)=>{
                                        return <p key={i} className="text-justify py-[3px]">{i+1}. {feature}</p>
                                    })
                                }
                               </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Experience
