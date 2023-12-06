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
import { useRouter } from "next/navigation"


interface InformationUpdateProps {
    information: Information | null
}
const InformationUpdate:React.FC<InformationUpdateProps> =({
    information
}) =>{
    const [info,setInfo] = useState(false)
    const router = useRouter()
    
    useEffect(() => {
        if(!information){
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
               name:information?.name,
               email: information?.email,
               phone: information?.phone,
               address: information?.address,
               emerency:information?.emerency,
               id:information?.id
            }
      })
      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        axios.post('/api/updateInformation',data)
            .then(()=>{
                toast.success('Updated.')
                router.refresh();
            })
            .catch((err)=>{
                toast.error(err)
            })
      }
    
    return (
        <div>
            <Header
               title="Update personal information"
                subtitle=""
                center
               
            />
            <div 
                className="
                    grid
                    gird-cols-1
                    md:grid-cols-3
                    gap-4
                    py-4
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
                        <label htmlFor="name" className="text-sm font-light ">Legal name</label>
                        <input 
                            id="name" 
                            {...register("name",{required: true})} 
                            placeholder="Name"
                            defaultValue={information?.name}
                            className="text-[0.8rem] border-[1px] rounded-md border-neutral-600 px-4 py-2"
                        />

<label htmlFor="email" className="text-sm font-light">Email address</label>
                        <input 
                            
                            id="email" {...register("email")}  
                            placeholder="Email"
                            defaultValue={information?.email}
                             className="text-[0.8rem] border-[1px] rounded-md border-neutral-600 px-4 py-2"
                        />

                        <label htmlFor="phone" className="text-sm font-light ">Phone Number</label>
                        <input  
                            id="phone" 
                            {...register("phone")}  
                            placeholder="Phone Number"
                            defaultValue={information?.phone}
                             className="text-[0.8rem] border-[1px] rounded-md border-neutral-600 px-4 py-2"
                        />

                        <label htmlFor="address" className="text-sm font-light">Address</label>
                        <input  
                            id="address" 
                            {...register("address")}  
                            placeholder="Address"
                            defaultValue={information?.address}
                             className="text-[0.8rem] border-[1px] rounded-md border-neutral-600 px-4 py-2"
                        />

                        <label htmlFor="emerency" className="text-sm font-light ">Emergency contact</label>
                        <input  
                            id="emerency" 
                            {...register("emerency")}  
                            placeholder="Emergency contact"
                            defaultValue={information?.emerency}
                             className="text-[0.8rem] border-[1px] rounded-md border-neutral-600 px-4 py-2"
                        />

                        <input 
                            type={!info ?'submit':"button"}
                            value="Update Information" 
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
                        <div className="font-bold text-sm ">Bạn có thể cập nhật thông tin</div>
                            <div className="text-[0.8rem] text-neutral-600 font-light">
                            Update Information for Free
                                <span className="underline hover:opacity-[0.5] cursor-pointer px-2">here</span> on Airbnb.
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
                           Airbnb only discloses contact information to Hosts/Organizers and guests after the booking is confirmed
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationUpdate