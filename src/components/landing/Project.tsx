import React from 'react'
import Wrapper from '../global/Wrapper'
import { ProjectData } from '@/src/constants/ProjectData'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Github, Globe, Link } from 'lucide-react'
const Project = () => {
  return (
   <section id='projects' className='pt-12'>
        <Wrapper>
            <h1 className='text-2xl font-semibold pb-6 max-sm:text-center'>Featured projects</h1>
            <div className='grid sm:grid-cols-3 gap-8'>
                {
                    ProjectData && ProjectData.map((item, i)=>{
                        return(
                            <Card key={i} className='dark:bg-gray-200/30 backdrop-blur-sm'>
                                <CardHeader>
                                    <Image src={item.img} width={100} height={100} alt='photo' className='w-full h-auto rounded-lg' />
                                    <CardTitle className='flex justify-between'>
                                        {item.ittle}
                                        <div className='flex gap-2'>
                                            <a href={item.git} target='_blank'><Github className='w-4 h-4' /></a>
                                            <a href={item.link} target='_blank'><Link className='w-4 h-4'/></a>
                                        </div>

                                    </CardTitle>
                                    <CardDescription className='text-justify'>{item.description}</CardDescription>
                                </CardHeader>

                                <CardFooter className='flex gap-2'>
                                    {
                                        item.tags && item.tags.map((tag, i)=>{
                                            return <p key={i} className='flex gap-2 bg-[#111] text-white font-semibold text-[12px] px-2 rounded'>{tag}</p>
                                        })
                                    }
                                </CardFooter>
                            </Card>
                        )
                    })
                }
            </div>
        </Wrapper>
   </section>
  )
}

export default Project
