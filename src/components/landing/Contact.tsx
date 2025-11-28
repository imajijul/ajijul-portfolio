'use client'
import { Facebook, Github, Mail, MessageCircle, Phone } from 'lucide-react'
import Wrapper from '../global/Wrapper'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

const Contact = () => {

  const contactData = [
    {
      name: "Email",
      title: "Reach me via email.",
      icon: <Mail />,
      to: "https://mail.google.com/mail/?view=cm&fs=1&to=imdajijul740@gmail.com"
    },
    {
      name: "WhatsApp",
      title: "Quick messaging.",
      icon: <MessageCircle/>,
      to: "https://wa.me/+8801867081838"
    },
    {
      name: "Mobile",
      title: "Quick messaging.",
      icon: <Phone/>,
      to: "tel:+8801867081838"
    }
  ]

  return (
    <section id='contact' className='py-12'>
      <Wrapper>

        <div className='text-center flex flex-col justify-center items-center gap-3'>
          <h1 className='text-3xl'>Let’s Collaborate</h1>
          <p className='max-w-md py-3'>Feel free to reach out for project inquiries, collaboration, or just to say hello. I'm always open to new opportunities and conversations.</p>
        </div>
          <div className='grid sm:grid-cols-2 gap-8'>
            <Card  className='bg-transparent w-full'>
              <CardHeader>
                  <CardTitle className='text-lg'>Send Message</CardTitle>
                  <CardDescription>Reach out using the platform youre most comfortable with.</CardDescription>
              </CardHeader>

                  <CardFooter className='flex flex-col justify-center items-start gap-3'>
                    {
                      contactData && contactData.map((item, i)=>{
                        return(
                          <a href={item.to} target='_blank' key={i} className='flex items-center gap-3 border w-full px-2 py-3 rounded '>
                              <span>{item.icon}</span>
                              <div>
                                <h4>{item.name}</h4>
                                <p className='text-sm font-normal text-muted-foreground'>{item.title}</p>
                              </div>
                          </a>
                        )
                      })
                    }
                </CardFooter>
            </Card>

            <Card  className='bg-transparent w-full'>
              <CardHeader>
                  
                    <CardTitle className='text-lg'>Connect & Follow</CardTitle>
                    <CardDescription>Stay informed about my recent projects and thoughts across platforms.</CardDescription>
                </CardHeader>

                <CardFooter className='flex flex-col justify-center items-start gap-3'>
                    <a href="" target='_blank' className='flex items-center gap-3 border w-full px-2 py-3 rounded '>
                      <span><Github/></span>
                      <div>
                        <h4>GitHub</h4>
                        <p className='text-sm font-normal text-muted-foreground'>Take a look at my code</p>
                      </div>
                    </a>

                    <a href="" target='_blank' className='flex items-center gap-3 border w-full px-2 py-3 rounded '>
                      <span><Facebook/></span>
                      <div>
                        <h4>Facebook</h4>
                        <p className='text-sm font-normal text-muted-foreground'>Connect with me on Facebook to get fresh updates.</p>
                      </div>
                    </a>
                </CardFooter>
            </Card>

          </div>
      </Wrapper>
    </section>
  )
}

export default Contact
