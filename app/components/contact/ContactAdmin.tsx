"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { caroselArr } from './ContactMenuMain';

const article = [
    {
        title: "Refund Request",
        content: "The refund process should be straightforward. You can request a refund through the Center..."
    },
    {
        title: "Tax Types for Guests",
        content: "You might want peace of mind before booking, or perhaps you're currently..."
    },
    {
        title: "Cancellation Procedure",
        content: "Sometimes things come up, and you need to cancel. To ensure a smooth process, here's how you can cancel, find out more..."
    },
    {
        title: "Automatic Refund",
        content: "Eligible refund amounts will be processed immediately after you click cancel. We automatically process the refund through the payment method you used..."
    },
    {
        title: "Check Your Reservation Status as a Guest",
        content: "Checking the status of your reservation helps you stay updated on everything, such as whether you've been confirmed or need to take action like..."
    },
    {
        title: "Find the Cancellation Policy for Your Booking",
        content: "You might want peace of mind before booking, or perhaps you're currently..."
    }
]

    
const ContactAdmin =() =>{
    const router = useRouter()
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div className='my-10'>
            {/* carosel */}
            <div className='my-4'>
                <Carousel responsive={responsive} >
                {caroselArr.reverse().map((item)=>{
                    return <div className='px-2 shadow-md' key={item?.title.substring(0,10)}>
                                <Image
                                    src={item.img}
                                    alt="carosel"
                                    width={400}
                                    height={400}
                                    className='
                                        object-cover
                                        w-full
                                        h-[250px]
                                        
                                    '
                                />  
                                <div className='px-2 py-2'>
                                    <div className='font-bold '>{item.title}</div>
                                    <div className='text-[0.8rem] font-light'>{item.content.substring(0,90)}...</div>
                                    <div className='flex justify-end items-center'>
                                        <div 
                                            className='text-blue-700 italic underline text-[0.8rem] cursor-pointer'
                                            onClick={()=>router.push(`/contact/${item.id}`)}
                                        >
                                             Go to article
                                        </div>
                                    </div>
                                </div>
                            </div>
                })}
                </Carousel>
            </div>
           <div className="font-bold text-2xl py-4">Top Articles</div>
           <div
            className="
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                gap-6
                px-2
            "
           >
                {article.map((item)=>{
                    return (
                        <div key={item.title} >
                            <div className="font-bold text-sm">{item.title}</div>
                            <div className="font-light text-sm">{item.content}</div>
                            
                        </div>
                    )
                })}
           </div>
        </div>
    )
}

export default ContactAdmin