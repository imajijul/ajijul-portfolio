import React from 'react'
import Wrapper from '../global/Wrapper'
import { EducationData } from '@/src/constants/EducationData'

const Education = () => {
  return (
    <section className="pb-15" id="experience">
      <Wrapper>
        <div className="max-sm:flex-col sm:flex gap-3 justify-between">
            <h1 className="text-2xl flex-2 font-bold max-sm:text-center ">Education:</h1>
            <div className="flex flex-col mt-0 pt-0 flex-10 sm:[&>div:nth-child(1)]:pt-0">
                {
                    EducationData && EducationData.map((item, i)=>{
                        return(
                            <div key={i} className="py-3">
                               <div className="sm:flex justify-between items-center">
                                    <h1 className="text-xl sm:text-2xl font-semibold">{item.title}</h1>
                                    <p className="">{`${item.session}`}</p>
                               </div>
                               <p className="py-1 text-muted-foreground">{item.school}</p>
                               <p className="py-1 text-muted-foreground">** {item.result}</p>
                               <p className="py-1 text-muted-foreground">** {item.roll}</p>
                               <p className="py-1 text-muted-foreground">** {item.registation}</p>
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

export default Education
