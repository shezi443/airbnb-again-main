"use client"

import { AiFillTwitterSquare, AiOutlineCopyrightCircle, AiOutlineGlobal } from "react-icons/ai"
import { BsDot } from "react-icons/bs"
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
import Container from "./Container"
import { useRouter } from "next/navigation"

const Footer = () =>{
    const router = useRouter()
    return (
        <div className="bg-neutral-100 mt-10 px-0 xl:px-20 md:px-10 sm:px-2">
            <div>
                <div 
                    className="
                        grid
                        grid-cols-1                       
                        lg:grid-cols-4
                        gap-4
                        p-4
                        font-light
                        text-[0.8rem]
                        my-6
                    "   
                >
                    <div className=" transition block md:flex flex-col gap-2 cursor-pointer">
                        <div className="font-bold my-4 cursor-default">Support</div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                        <div onClick={() => router.push('/contact?category=Guest')} className="hover:underline">Help Center.</div>
<div onClick={() => router.push('/contact?category=Guest')} className="hover:underline">Request safety help.</div>
<div onClick={() => router.push('/contact?category=Guest')} className="hover:underline">AirCover.</div>
<div onClick={() => router.push('/contact?category=Guest')} className="hover:underline">Support for people with disabilities.</div>
<div onClick={() => router.push('/contact?category=Guest')} className="hover:underline">Cancellation options.</div>
<div onClick={() => router.push('/contact?category=Guest')} className="hover:underline">Report neighbor concerns.</div>

                        </div>
                    </div>
                    <div className=" transition flex flex-col gap-2 cursor-pointer">
                    <div className="font-bold my-4 cursor-default">Community</div>
<div className="hover:underline">Airbnb.org: housing relief.</div>
<div className="hover:underline">Fight against discrimination.</div>

                    </div>
                    <div className=" transition flex flex-col gap-2 cursor-pointer">
                        <div className="font-bold my-4 cursor-default">
Welcome guests</div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                        <div onClick={() => router.push('/rent2')} className="hover:underline">Rent your home on Airbnb.</div>
<div onClick={() => router.push('/rent2')} className="hover:underline">Airbnb for Hosts.</div>
<div onClick={() => router.push('/rent2')} className="hover:underline">See hosting resources.</div>
<div onClick={() => router.push('/rent2')} className="hover:underline">Responsible hosting.</div>

                        </div>
                    </div>
                    <div className=" transition flex flex-col gap-2 cursor-pointer">
                        <div className="font-bold my-4 cursor-default">Airbnb</div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                        <div className="hover:underline">Newsroom.</div>
<div className="hover:underline">Learn about new features.</div>
<div className="hover:underline">Letters from the founders.</div>
<div className="hover:underline">Career opportunities.</div>
<div className="hover:underline">Investors.</div>

                        </div>
                    </div>
                </div>
                <hr/>
                <div className="flex items-center justify-between px-2 text-[.8rem] font-light py-4">
                    <div className="flex sm:hidden md:flex justify-start items-center">
                        <AiOutlineCopyrightCircle/>
                        <div className="cursor-default"> {new Date().getFullYear()} Airbnb, Inc.</div>
                        <BsDot />
                        <div className="hover:underline transition cursor-pointer">
Privacy</div>
                        <BsDot />
                        <div className="hover:underline transition cursor-pointer">Terms</div>
                        <BsDot />
                        <div className="hover:underline transition cursor-pointer">Sitemap</div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center hover:underline transition cursor-pointer">
                            <AiOutlineGlobal/>
                            <div>Pakistan(EN)</div>
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <div className="hover:text-blue-800 transition"><FaFacebookSquare/></div>
                            <div className="hover:text-blue-600 transition"><AiFillTwitterSquare/></div>
                            <div className="hover:text-rose-600 transition"><FaInstagramSquare/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer