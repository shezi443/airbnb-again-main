"use client"
"use client"
import Container from '@/app/components/Container'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import {caroselArr} from '@/app/components/contact/ContactMenuMain'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { BsDot } from 'react-icons/bs'

const cata = [
    {
        title: "How do you arrive?",
        content: "Find all the details about different types of accommodations, including entire homes, private rooms, hotels, and shared rooms."
    },
    {
        title: "Messaging the host",
        content: "Learn more about when you should message the host or when it might be a good idea."
    },
    {
        title: "Request to book before reservation",
        content: "How to find additional information about a place without making a reservation."
    },
    {
        title: "Invitations and special deals",
        content: "Details on how pre-approvals and special deals work."
    },
    {
        title: "Search for accessible places",
        content: "How to find a place that meets your mobility needs."
    },
    {
        title: "Using search filters",
        content: "More details about all the available search filters."
    },
    {
        title: "Party and event policies",
        content: "We've created Party and Event Policies to provide clear guidelines on what we expect from everyone."
    }
]

const ContactIdClient =() =>{
    const params = useParams();
    const router = useRouter();

    const contactId = useMemo(()=>{
       let result =  caroselArr.find((item)=> item.id === params.contactId);
        return result;
        },[params])
    return (
        
       <div >
        <div className="w-full h-auto relative">
                    <div className="w-full h-[300px] absolute top-0 left-0 bg-neutral-950/60 flex items-center justify-center">
                        <Header
                           title="Articles"
                           subtitle="Airbnb Articles"                           
                            big
                            center
                            white
                        />
                    </div>
                    <Image
                        src="/title-03.webp"
                        width={1000}
                        height={1000}
                        alt="trips"
                        objectPosition="top"
                        className="w-full h-[300px] object-cover "
                    />
            </div>
            <div className="flex text-sm font-light px-4 py-4 ">
                <div className='cursor-pointer font-bold hover:text-neutral-500' onClick={()=>router.push('/contact')}>Home page/</div>
                <div>Find accommodation that's right for you</div>
            </div>
         <Container>
            <div
                className='
                    mt-2
                    grid
                    grid-cols-1
                    md:grid-cols-3
                    gap-4
                '
            > 
                <div className='col-span-2 px-4'>
                    <div className='font-bold text-2xl capitalize'>{contactId?.title}</div>
                    <div className='flex items-center text-sm '>
                        <div>Instruct</div>
                        <BsDot />
                        <div>{contactId?.category}</div>
                    </div>
                    <div>
                        <Image
                            src={contactId?.img as string}
                            width={400}
                            height={400}
                            alt="Contact Id"
                            className='
                                w-full
                                
                                py-4
                                h-[400px]
                                max-h-[400px]
                                object-cover
                            '
                        />

                    </div>
                    <div className='font-light text-justify'>Want to help find a great place to stay? Here are the top areas where guests often have questions when searching for their next trip.</div>
                    <div className ="font-light py-4 text-justify">{contactId?.content}</div>
                    <hr/>
                    <div>
                        {cata.map((item)=>{
                            return (
                                <div className='border-b-[1px] py-4 ' key={item.title}>
                                    <div className='font-bold '>
                                        {item.title}
                                    </div>
                                    <div className='font-light text-justify'>
                                        {item.content}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='px-4'>
                   <div>
                        <div className='font-bold text-2xl '>Related articles</div>
                        <div>
                            {caroselArr.map((item)=>{
                                return (
                                    <div key={item.title} className='text-sm font-light underline italic cursor-pointer hover:text-neutral-600'>
                                        {item.title}
                                    </div>
                                )
                            })}
                        </div>
                   </div>
                </div>
                
            </div>
        </Container>
            <Footer />
       </div>
    )
}

export default ContactIdClient