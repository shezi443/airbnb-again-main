"use client"

import Image from "next/image"
import RentContent from "./RentContent"
import { CldImage } from 'next-cloudinary';

const RentHeader = () =>{
    return (
        <div className="flex flex-col gap-4 md:gap-6 w-full">
            <span className="text-center text-semibold text-xl md:text-4xl mt-20 font-bold">Easy to rent a house on Airbnb with Airbnb Setup</span>
            <Image
                width="1400"
                height="600"
                src="/rent-01.webp"
                sizes="100vw"
                
                
                alt="Description of my image"
                />
            <div className=" grid grid-cols-1 md:gird-cols-3 justify-between items-start gap-7 ">
                <RentContent
                   title="Get private guidance from a Superhost"
                   content="We will connect you with a Superhost in your area who will guide you from the first questions to the first guest—via phone, video call, or chat feature."
                   
                    bold
                />
               <RentContent
                    title="Experienced guests for your first bookings"
                    content="For your first bookings, you can choose to welcome an experienced guest who has had at least 3 stays and a good history on Airbnb."
                    
                    bold
                />
                <RentContent
                    title="Special support from Airbnb"
                    content="Just a click away, new Hosts can connect with specially trained Community Support experts who can assist with any issue, from account troubleshooting to payment support."
                    
                    bold
                />
            </div>
        </div>
    )
}

export default RentHeader