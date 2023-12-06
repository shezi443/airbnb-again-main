"use client"

import axios from "axios"
import Header from "../Header"
import {useEffect,useState} from 'react'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { FcLock } from "react-icons/fc"
import { AiFillTool } from "react-icons/ai"
import { GiShare } from "react-icons/gi"
import { Information } from "@prisma/client"
import { toast } from "react-hot-toast"
import { useRouter, useSearchParams } from "next/navigation"


interface InformationAccountProps {
    information: Information | null
}
const InformationAccount:React.FC<InformationAccountProps> =({
    information
}) =>{
    const [info,setInfo] = useState(false);
    const router = useRouter()
    const params = useSearchParams()
    console.log(info)
    useEffect(() => {
        if(information){
            setInfo(true)
        }else {
            setInfo(false)
        }
    }, [information])
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<FieldValues>({
            defaultValues:{
               name:"",
               email: "",
               phone: '',
               address: '',
               emerency:""
            }
      })
      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        axios.post('/api/information',data)
            .then(()=>{
                toast.success('Created.');
                router.refresh()
            })
            .catch((err)=>{
                toast.error(err)
            })
      }
    return (
        <div>
            <Header
                title="Create New Profile"
                subtitle={info ? "You have created a personal profile" : ""}
                center
               
            />
            <div 
                className="
                    grid
                    gird-cols-1
                    md:grid-cols-3
                    gap-4
                    py-8
                "
            >
                <div className="col-span-2">
                    <form 
                        onSubmit={handleSubmit(onSubmit)}
                        className="
                            flex
                            flex-col
                            justify-center
                            gap-4
                        "
                        >
                        {/* register your input into the hook by invoking the "register" function */}
                        <label htmlFor="name" className="text-sm font-light ">Legal Name</label>
                        <input 
                            id="name" 
                            {...register("name",{required: true})} 
                            placeholder="Name" 
                            className="text-[0.8rem] border-[1px] rounded-md border-neutral-600 px-4 py-2"
                        />

                        <label htmlFor="email" className="text-sm font-light ">Email Address</label>
                        <input 
                            defaultValue="linh thai" 
                            id="email" {...register("email")}  
                            placeholder="Email"
                             className="text-[0.8rem] border-[1px] rounded-md border-neutral-600 px-4 py-2"
                        />

                        <label htmlFor="phone" className="text-sm font-light ">Phone number.</label>
                        <input  
                            id="phone" 
                            {...register("phone")}  
                            placeholder="Phone number."
                             className="text-[0.8rem] border-[1px] rounded-md border-neutral-600 px-4 py-2"
                        />

                        <label htmlFor="address" className="text-sm font-light ">Address</label>
                        <input  
                            id="address" 
                            {...register("address")}  
                            placeholder="Address"
                             className="text-[0.8rem] border-[1px] rounded-md border-neutral-600 px-4 py-2"
                        />

                        <label htmlFor="emerency" className="text-sm font-light ">Emergency Contact</label>
                        <input  
                            id="emerency" 
                            {...register("emerency")}  
                            placeholder="Emergency Contact"
                             className="text-[0.8rem] border-[1px] rounded-md border-neutral-600 px-4 py-2"
                        />

                        <input 
                            type={!info ?'submit':"button"}
                            value="Create information on Airbnb" 
                            className={`
                                px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-500 capitalize text-sm
                                ${info ?"cursor-not-allowed":"cursor-pointer"}
                            `}/>
                    </form>
                </div>
                <div
                    className="
                        border-[1px]
                        border-neutral-400
                        rounded-md
                        px-4
                        py-4
                        col-span-2
                        md:col-span-1
                    "
                >
                    <div className="flex flex-col gap-4 border-b-[1px] pb-4">
                        <div>
                            <FcLock size={40}/>
                        </div>
                        <div>
                        <div className="font-bold text-sm">Do not display information here</div>
<div className="text-[0.8rem] text-neutral-600 font-light">Only you can see this security information</div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border-b-[1px] py-4 ">
                        <div>
                            <AiFillTool size={40} className="text-neutral-400"/>
                        </div>
                        <div>
                            <div className="font-bold text-sm ">You can update information</div>
                            <div className="text-[0.8rem] text-neutral-600 font-light">
                            Update your information for free
                                <span 
                                    onClick={()=>router.push('informations?category=update')}
                                    className="underline hover:opacity-[0.5] cursor-pointer px-2"
                                >
                                    Update now
                                </span>here on Airbnb.
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
                            <div className="font-bold text-sm">You can share </div>
                           
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

export default InformationAccount