"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const article = [
    {
        title: "Refund Request",
        content: "Refund should be made easy. You can request a refund in the Center..."
    },
    {
        title: "Types of Taxes for Guests",
        content: "Perhaps you just want to feel more secure before booking, or maybe you're..."
    },
    {
        title: "Cancellation Process",
        content: "Sometimes things come up, and you have to cancel. To make everything smooth, here's how you can cancel your reservation, let's find out..."
    },
    {
        title: "Automatic Refund",
        content: "Qualified refund amounts will be processed immediately after you click cancel. We automatically process the refund through the payment method you used..."
    },
    {
        title: "Check the Status of Your Reservation/Booking as a Guest",
        content: "The pre-booking status helps you update everything, such as whether you have been confirmed or need to do something like..."
    },
    {
        title: "Find the Cancellation Policy for Your Booking",
        content: "Maybe you just want to feel more at ease before booking, or maybe right now you're..."
    }
]

    export const caroselArr = [
    {
            id: '1',
            title: "Getting Started on Airbnb",
            subtitle: "The identity verification process helps us confirm that it's really you. This is one of the ways we ensure safety on Airbnb.",
            img: "/carosel-01.webp",
            content: "As long as you enter your destination, departure date, and the number of guests when searching on Airbnb, all available listings will be displayed. To find a space that suits you, use search filters to find a place entirely for yourself or other options if you want some shared space. Once you find a place you like, you may still have questions about it. While you can't visit the accommodation before booking, you can contact the host to learn more. Also, ask them about specific amenities, the neighborhood, or location as they are the best source for all the details. They may even send you pre-approval or special offers to entice you to book with them.",
            category: "guest"
        
    },
    {
        id: '2',
    title: "Find a Place that Suits You",
    subtitle: "You are ready to book but need to make a payment. The good news is that we support various payment methods—this depends only on the country where your payment account is registered. If you need to split your payment, you can do so as long as your stay qualifies and you have the option to use the payment plan when checking out. Remember that, regardless of the payment method you use or when you pay, always keep records of your transactions on Airbnb.",
    content: "You are ready to book but need to make a payment. The good news is that we support various payment methods—this depends only on the country where your payment account is registered. If you need to split your payment, you can do so as long as your stay qualifies and you have the option to use the payment plan when checking out. Remember that, regardless of the payment method you use or when you pay, always keep records of your transactions on Airbnb.",
    img: "/carosel-02.webp",
    category: "guest"
    },
    {
        id: '3',
    title: "Payment for Your Trip",
    subtitle: "The identity verification process helps us confirm that it is really you. This is one of the ways we ensure safety on Airbnb.",
    img: "/carosel-03.jpeg",
    content: "As long as you enter the destination, departure date, and the number of guests when searching on Airbnb, all available listings will be displayed. To find a space that suits you, use search filters to find a place entirely for yourself or other options if you want some shared space. Once you find a place you like, you may still have questions about it. While you can't visit the accommodation before booking, you can contact the host for more information. Additionally, ask them about specific amenities, the neighborhood, or any special offers, as they are the best source for all details. They may even send you pre-approval or special deals to entice you to book with them.",
    category: "guest"
    },
    {
        id: '4',
        title: "Airbnb for Guests",
        subtitle: "The identity verification process helps us confirm that it is really you. This is one of the ways we ensure safety on Airbnb.",
        img: "/carosel-05.webp",
        content: "Every booking comes with AirCover for guests. If there is a serious issue with your Airbnb that the host cannot resolve, we will help you find a similar place, depending on availability at an equivalent price. If a similar place is not available or you do not want to rebook, we will refund you in full or in part. If anything happens, your host is your best point of contact; chances are they will be able to fix it. You can message your host directly from your inbox to let them know what's going on.",
        category: "guest"
    },
    {
        id: '5',
    title: "Optimizing your rental listings",
    img: "/carosel-06.webp",
    content: "Do you want to manage nightly rates, discounts, etc.? Visit Listings. Just know that custom prices will replace your listing's regular nightly, weekly, and monthly prices or any nightly prices you've saved on your calendar. If you want to add other fees—like a cleaning fee to help you keep your place in great condition—you can also set these fees in Listings.",
    category: "host"
    },
    {
        id: '6',
        title: "Receiving payments",
        img: "/carosel-07.webp",
        content: "When you first become a Host, you'll need to make sure you've set up a payment method for your account. It might take a little time to get fully set up, so we recommend doing it as early as possible. But how do you choose the currency for payouts? It depends on the country and method you selected when adding your payout method for the first time. Please note that you can't change the currency of the payout method after adding it, but you can set up a new payment method in a different currency at any time.",
        category: "host"
    },
    {
        id: '7',
    title: "Achieving the goal of welcoming guests",
    img: "/carosel-08.webp",
    content: "How do you make your listing appealing to guests? For beginners, providing a clear, accurate description of what guests will receive can be very helpful—setting appropriate expectations. Always update detailed information, let guests know what makes your place unique, and take many high-quality photos (consider photos as the first impression of your space). Here's a photo tip: Take some time to arrange everything as if you were preparing to welcome your first guest.",
    category: "host"
    },
    {
        id: '8',
    title: "Changes, cancellations, and refunds",
    img: "/carosel-09.webp",
    content: "If your guest cancels, we'll notify you and automatically unblock the dates on your calendar so you can welcome other guests. But what about your payment? If you have stored it previously, it will be released to you 24 hours after the scheduled check-in time. If this is your first hosting, we may hold it for up to 30 days after the reservation is confirmed.",
    category: "host"
    },
    {
        id: '9',
        title: "Receiving Payments",
        img: "/carosel-10.webp",
        content: "When you first become a Host, you'll need to make sure you've set up a payment method for your account. It may take a bit of time to set up completely, so we recommend doing it as early as possible. But how do you choose the currency for payouts? It depends on the country and method you selected when adding the payout method for the first time. Please note that you can't change the currency of the payment method after adding it, but you can set up a new payment method with a different currency at any time.",
        category: "organize"
    },
    {
        id: '10',
    title: "Managing Experiences",
    img: "/carosel-11.webp",
    content: "One of the best ways to attract guests to your Experience page is to capture beautiful, high-quality photos (try to have at least 6 photos). After a guest makes a reservation, you'll receive an email notification with the guest's profile and contact information, and the guest will receive a confirmation with all the detailed information about the location and meeting time, as well as what to bring.",
    category: "organize"
    },
    {
        id: '11',
    title: "Changes, Cancellations, and Refunds",
    img: "/carosel-12.webp",
    content: "If your guest cancels, we'll notify you and automatically unblock the dates on your calendar so you can welcome other guests. But what about your payment? If you've received payouts before, it will be released to you 24 hours after the guest's scheduled check-in time. If this is your first hosting experience, we may hold it for up to 30 days after the reservation is confirmed.",
    category: "organize"
    },
    {
        id: '12',
    title: "Co-Hosts",
    img: "/carosel-13.webp",
    content: "One of the best ways to attract guests to your Experience page is to take beautiful, high-quality photos (try to have at least 6 photos). After a guest makes a reservation, you'll receive an email notification with the guest's profile and contact information. Additionally, the guest will receive a confirmation with all the details about the location and the meeting time, as well as things to bring.",
    category: "organize"
    },
    {
        id: '13',
    title: "Airbnb for Work",
    img: "/carosel-03.jpeg",
    content: "Airbnb for Work makes it easy for you to travel and collaborate with colleagues. When you sign up, you'll receive benefits to make your company's travel less of a hassle—such as a free dashboard to easily book and manage employee trips on Airbnb. Ready to sign up? Get started by filling out the contact form to let us know more about your company. If your company is not yet registered, you can still set up a separate Airbnb account for business travel.",
    category: "admin"
    },
    {
        id: '14',
        title: "Using the Dashboard",
        img: "/carosel-15.webp",
        content: "As an Airbnb For Work administrator, your dashboard allows you to manage employee information in one place—including employee trips, reports, and invoices for your company. You will also find information such as an overview of active, confirmed, and completed employee trips, details on the number of nights booked, and many other helpful details.",
        category: "admin"
    },
    {
        id: '15',
        title: "Booking Process",
        img: "/carosel-16.webp",
        content: "If your company is part of Airbnb for Work, Airbnb allows travel planners on behalf of other employees to request bookings. If they book in advance, business travelers will receive a notification about the pre-booking request and can accept or decline the request.",
        category: "admin"
    },
    {
        id: '16',
        title: "Payment Assistance",
        img: "/carosel-17.jpeg",
        content: "Whether it's audit season or not, you need an easy way to track your employees' receipts. To access any receipt, visit your Airbnb for Work dashboard. From there, you can print or save them as PDFs. Just note that you can't make any additions or edits (like adding a guest's name) once the receipt has been issued. Need to create a report showing things like total spending? Check the Reports tab from your Airbnb for Work dashboard to find all available reports.",
        category: "admin"
    },
]
const ContactMenuMain =() =>{
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
                {caroselArr.map((item)=>{
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
                                <div className='px-2 py-2  '>
                                    <div className='font-bold '>{item.title}</div>
                                    <div className='text-[0.8rem] font-light'>{item.content.substring(0,90)}...</div>
                                    <div className='flex justify-end items-center'>
                                        <div 
                                            className='text-blue-700 italic underline text-[0.8rem] cursor-pointer'
                                            onClick={()=>router.push(`/contact/${item.id}`)}
                                        >
                                            Read The Article
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

export default ContactMenuMain