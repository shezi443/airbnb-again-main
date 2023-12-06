"use client"

import { Information } from "@prisma/client"
import { useRouter } from "next/navigation"

import { AiFillTool } from "react-icons/ai"
import { FcLock } from "react-icons/fc"
import { GiShare } from "react-icons/gi"
import Header from "../Header"

interface InformationPersonProps {
    information: Information | null 
}

const InformationPerson:React.FC<InformationPersonProps> = ({
    information
}) =>{
    const router = useRouter()
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 py-2 md:py-8">
                <div className="col-span-1 md:col-span-2 flex flex-col gap-4 mb-8 md:mt-8">
                        <div className="flex items-center">
                            <div className="text-sm font-bold">Legal name: </div>
                            <div className="text-sm font-light">{!information ?<span className="text-[0.8rem] text-neutral-600 ml-2">Update</span>:information?.name}</div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-sm font-bold">Email :</div>
                            <div className="text-sm font-light">{!information ?<span className="text-[0.8rem] text-neutral-600 ml-2">Update</span>:information?.email}</div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-sm font-bold">Phone number :</div>
                            <div className="text-sm font-light">{!information ?<span className="text-[0.8rem] text-neutral-600 ml-2">Update</span>:information?.phone}</div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-sm font-bold">Current address :</div>
                            <div className="text-sm font-light">{!information ?<span className="text-[0.8rem] text-neutral-600 ml-2">Update</span>:information?.address}</div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-sm font-bold">Emergency contact :</div>
                            <div className="text-sm font-light">{!information ?<span className="text-[0.8rem] text-neutral-600 ml-2">Update</span>:information?.emerency}</div>
                        </div>
                    </div>
            
                <div
                        className="
                            border-[1px]
                            border-neutral-400
                            rounded-md
                            px-4
                            py-4
                        "
                    >
                        <div className="flex flex-col gap-4 border-b-[1px] pb-4">
                            <div>
                                <FcLock size={40}/>
                            </div>
                            <div>
                            <div className="font-bold text-md">Do not display information here</div>
                            <div className="text-[0.8rem] text-neutral-600 font-light">Only you can see this security information</div>
 
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 border-b-[1px] py-4 ">
                            <div>
                                <AiFillTool size={40} className="text-neutral-400"/>
                            </div>
                            <div>
                                <div className="font-bold text-md ">You can update information</div>
                                <div className="text-[0.8rem] text-neutral-600 font-light">
                                Update information for free
                                    <span 
                                        onClick={()=>router.push('informations?category=update')}
                                        className="underline hover:opacity-[0.5] cursor-pointer px-2">here</span> on Airbnb.
                                </div>
                                <div className="text-[0.8rem] text-neutral-600 font-light">
    You can edit contact and personal information. If you use this information for identity verification, you will need to verify again for the next reservation, or to continue hosting guests.
</div>

                            </div>
                        </div>
                        <div className="flex flex-col gap-4 border-b-[1px] py-4 ">
                            <div>
                                <GiShare size={40} className="text-rose-400"/>
                            </div>
                            <div>
                                <div className="font-bold text-md ">You can share </div>
                            
                                <div className="text-[0.8rem] text-neutral-600 font-light">
    Airbnb only discloses contact information to hosts/organizers and guests after the booking/reservation is confirmed.
</div>

                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default InformationPerson    