"use client"

import { Range } from "react-date-range";
import Button from "../Button";
import { useCallback, useState,useMemo } from "react";
import Calendar from '@/app/components/inputs/Calendar'
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { AiFillMinusCircle, AiFillStar } from "react-icons/ai";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

import useLoginModal from "@/app/hooks/useLoginModal";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { SafeComment, SafeUser } from "@/app/types";
import { initialDateRange } from "@/app/listings/[listingId]/ListingClient";
import { BsDot } from "react-icons/bs";
// import {initialDateRange} from '@/app/listings/[listingId]/ListingClient'

interface ListingBillProps {
    price: number;
    totalPrice: number;
    countDay: number;
    dateRange: Range;
    isFixed: boolean;
    who: string[];
    guestCount: number;
    onChangeDate: (value:Range) =>void;
    disabled?: boolean;
    disabledDates: Date[];
    locationValue:  string;
    maxnight: string;
    currentUser: SafeUser | null;
    id:string;
    setDateRange: any;
    comments: SafeComment[]
}

const ListingBill:React.FC<ListingBillProps> = ({
    price,
    totalPrice,
    countDay,
    dateRange,
    isFixed,
    who,
    guestCount,
    onChangeDate,
    disabledDates,
    disabled,
    locationValue,
    maxnight,
    currentUser,
    id,
    setDateRange,
    comments =[]
}) =>{
    const [isSelected , setIsSelected] = useState(false);
    const [isCalendar,setIsCalendar] = useState(true);
    const [countAdult,setCountAdult] = useState(1);
    const [countChild,setCountChild] = useState(0);
    const [countPet,setCountPet] = useState(0);
    const [isLoading,setIsLoading] = useState(false)

    const router = useRouter();
    const loginModal = useLoginModal();

    // comment by current id
    const commentById = useMemo(()=>{
        const result =comments.filter((item)=>item.listingId === id);
        return result
    },[comments,id])
   
    // handle open calendar
    const handleOpenCalendar = useCallback(()=>{
        setIsSelected(false)
        setIsCalendar(!isCalendar);
    },[isCalendar]);

    // handle selected
    const handleSelected = useCallback(()=>{
        setIsCalendar(true)
        setIsSelected(!isSelected)
    },[isSelected])

    // handle add 
    const handleAdd =useCallback((number:number)=>{
        if(number <=1 || number >guestCount)
        {
            return 
        }
        
        setCountAdult(number)
    },[guestCount])

    const handleMinus = useCallback((number:number)=>{
        if(number<1 || number >guestCount)
        {
            
            return 
        }
        
        setCountAdult(number)
    },[guestCount])

    // handle add child
    const handleAddChild =useCallback((number:number)=>{
        if(number <=0 || number >10)
        {
           
            return 
        }
        
        setCountChild(number)
    },[])

    const handleMinusChild = useCallback((number:number)=>{
        if(number<0 || number >10)
        {
            return 
        }
        
        setCountChild(number)
    },[])

    // add pet
    const handleAddPet =useCallback((number:number)=>{
        if(number <=0 || number >2)
        {
            return 
        }
        
        setCountPet(number)
    },[])

    const handleMinusPet = useCallback((number:number)=>{
        if(number<0 || number >2)
        {
            return 
        }
        
        setCountPet(number)
    },[])

    // handle submit reservation
    const onCreateReservation = useCallback(()=>{
       if(!currentUser)
       {
        return loginModal.onOpen();
       }
       setIsLoading(true)

       axios.post('/api/reservations',{
        listingId: id,
        userId: currentUser.id,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        totalPrice,
        adult:countAdult,
        pet:countPet,
        child:countChild
       })
       .then(()=>{
        toast.success("reserved!");
        router.refresh();
        setDateRange(initialDateRange)
       })
       .catch(()=>{
        toast.error("Something went wrong");
       }).finally(()=>{
        setIsLoading(false)
       })
    },[
        totalPrice,
        currentUser,
        dateRange,
        countChild,
        countPet,
        countAdult,
        id,
        router,
        loginModal,
        setDateRange
    ])

    // handle count all star
    const handleCountAllStar = useCallback(()=>{
        if(commentById.length === 0)
        {
            return 0;
        }
        let count = 0
        for(let i=0;i<commentById.length;i++)
        {
            count += commentById[i].start;
        }
        return  (count /commentById.length).toFixed(2)
    },[commentById])
    
    return <div 
                className={`
                    relative
                    top-[4rem]
                    px-4 
                    py-4  
                   
                    w-[100%]
                    h-auto
                    rounded-lg
                    border-[1px]
                    hidden
                    sm:block
                    ${!isFixed  ? " sticky top-3 ":""}
                    ${!isFixed && "shadow-md"}
                `}
            >
                <div className="flex justify-between items-center">
                    {/* header */}
                    <p>
                        <span
                            className="font-light text-2xl "
                        >
                            {price.toLocaleString('it-IT', {style : 'currency', currency : 'USD'})} 
                        </span>
                        /đêm
                    </p>
                    <div>
                        <div className="flex gap-1 cursor-pointer">
                            <div className="text-sm flex"><AiFillStar/>{handleCountAllStar()}<span className="flex items-center"><BsDot/></span><span className="underline font-bold">{commentById.length} review</span></div>
                        </div>
                    </div>
                </div>
                <div 
                    className="
                        my-4
                        grid 
                        grid-cols-1
                        border-[1px]
                        rounded-lg
                        cursor-pointer
                    "
                >
                    <div className="grid grid-cols-2" onClick={handleOpenCalendar}>
                        <div className="border-r-[1px] border-b-[1px]  text-[0.6rem] flex items-center px-2 ">
                            <div className=" uppercase">Check-in: </div>
                            <div>
                                <div className='text-[0.6rem] font-light'>
                                    {dateRange.startDate?.getDate()} thg
                                    {dateRange.startDate?.getMonth()as number+1}-
                                    {dateRange.startDate?.getFullYear() } 
                                </div>
                            </div>
                        </div>
                        <div className="border-r-[1px] border-b-[1px]  text-[0.6rem] flex items-center px-2 py-4">

                            <div className=" uppercase">
                            {
                                    dateRange.startDate?.getDate() === dateRange.endDate?.getDate() &&
                                    dateRange.startDate?.getMonth() === dateRange.endDate?.getMonth() &&
                                    dateRange.startDate?.getFullYear() === dateRange.endDate?.getFullYear() 
                                    ?
                                        ""
                                    : 
                                        "Check-out:"
                                    }
                            </div>
                            <div>
                                <div className='text-[0.6rem] font-light'>
                                    {
                                    dateRange.startDate?.getDate() === dateRange.endDate?.getDate() &&
                                    dateRange.startDate?.getMonth() === dateRange.endDate?.getMonth() &&
                                    dateRange.startDate?.getFullYear() === dateRange.endDate?.getFullYear() 
                                    ?
                                        "Book a room here"
                                    : 
                                    dateRange.endDate?.getDate() +"thg"+
                                    (dateRange.endDate?.getMonth() as number +1)+"-"+
                                    dateRange.endDate?.getFullYear() 
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div 
                        className={`
                            absolute
                            top-[6rem]
                            right-0
                           border-[1px]
                           border-top-none
                           rounded-lg
                           shadow-md
                            w-full
                            h-auto
                            z-40
                           
                            ${isCalendar ?"hidden" :"block"}
                        `} 
                    >
                        <Calendar
                            value={dateRange}
                            disabledDates={disabledDates}
                            onChange={(value) => 
                            onChangeDate(value.selection)}
                            countDay = {countDay}
                            maxnight={maxnight}
                        />
                        <div className="flex justify-end px-4 py-4 " onClick={()=>setIsCalendar(true)}>
                            <button className="underline font-semibold hover:text-neutral-600">Close</button>
                        </div>
                    </div>

                    <div 
                        onClick={handleSelected}
                        className="
                            text-center 
                            col-span-2 
                            uppercase 
                            text-[0.6rem] 
                            px-2 py-2 
                            cursor-pointer
                            flex
                            justify-between
                            transition
                            "
                    >
                       <div>Guest</div>
                       {isSelected ? <BiSolidUpArrow/>:<BiSolidDownArrow />}
                        
                    </div>
                   
                </div>
                <div className={`
                        flex
                        justify-center
                        items-center
                        transition
                        ${isSelected ? "absolute z-50 w-full top-[8rem] left-0":"hidden"
                    }`}
                >
                   <div 
                    className="
                       border-[1px]
                       bg-white
                       rounded-lg
                        w-[90%]
                        px-2
                        py-4
                        
                    "
                   >
                    <div className="font-semibold py-2 text-center">Select room occupants</div>
                    <div
                        className="
                            grid 
                            grid-cols-2
                            gap-2
                            justify-center
                            items-center
                        "
                    >
                        {who.map((item)=>{
                           return (
                                <label key={item} className="flex justify-between items-center px-2">{item}
                                    <input 
                                        type="radio" 
                                        name="radio"
                                        className="px-2"
                                />
                                </label>
                        )
                        })}
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <div >
                        <div className="font-bold">Adults</div>
<div className="font-light text-sm text-neutral-700">Ages 13 and above</div>

                        </div>
                        <div className="flex items-center gap-2">
                            
                            <span 
                                onClick={()=>handleMinus(countAdult-1)}
                                className={`${countAdult<= 1 ?"text-neutral-400 cursor-not-allowed": "text-neutral-950"} `}
                            >
                                <AiFillMinusCircle/>
                            </span>
                            <span className="">{countAdult}</span>
                            <span 
                                onClick={()=>handleAdd(countAdult+1)}
                                className={`${countAdult>=guestCount ?"cursor-not-allowed text-neutral-400":"cursor-pointer text-neutral-950"}`}
                                >
                                <TbSquareRoundedPlusFilled/>
                            </span>
                        </div>
                    </div>
                    {/* child */}
                    <div className="flex justify-between items-center my-4">
                        <div >
                        <div className="font-bold">Children</div>
<div className="font-light text-sm text-neutral-700">Ages 12 and under</div>

                        </div>
                        <div className="flex items-center gap-2">
                            
                            <span 
                                onClick={()=>handleMinusChild(countChild-1)}
                                className={`${countChild<= 0 ?"text-neutral-400 cursor-not-allowed": "text-neutral-950"} `}
                            >
                                <AiFillMinusCircle/>
                            </span>
                            <span className="">{countChild}</span>
                            <span 
                                onClick={()=>handleAddChild(countChild+1)}
                                className={`${countChild>=10 ?"cursor-not-allowed text-neutral-400":"cursor-pointer text-neutral-950"}`}
                                >
                                <TbSquareRoundedPlusFilled/>
                            </span>
                        </div>
                    </div>
                    {/* pet */}
                    <div className="flex justify-between items-center my-4">
                        <div >
                        <div className="font-bold">Pets</div>
<div className="font-light text-sm text-neutral-700">Do you bring a pet with you?</div>

                        </div>
                        <div className="flex items-center gap-2">
                            
                            <span 
                                onClick={()=>handleMinusPet(countPet-1)}
                                className={`${countPet<= 0 ?"text-neutral-400 cursor-not-allowed": "text-neutral-950"} `}
                            >
                                <AiFillMinusCircle/>
                            </span>
                            <span className="">{countPet}</span>
                            <span 
                                onClick={()=>handleAddPet(countPet+1)}
                                className={`${countPet>=2?"cursor-not-allowed text-neutral-400":"cursor-pointer text-neutral-950"}`}
                                >
                                <TbSquareRoundedPlusFilled/>
                            </span>
                        </div>
                    </div>
                    <div
                        className="
                            text-[15px] 
                            font-light
                            py-4
                        "
                    >
                        This accommodation allows a maximum of {guestCount} guests, excluding infants. If you bring more than 2 pets, please inform the host.
                    </div>
                    <div className="flex justify-end px-4">
                        <button 
                            onClick={()=>setIsSelected(false)}
                            className="underline font-bold"
                        >
                            Close
                        </button>
                    </div>
                   </div>
                </div>
                <div>
                    {countDay !== 0 ? (
                        <div>
                            <button 
                                onClick={onCreateReservation}
                                disabled={isLoading}
                                className={
                                    `
                                    rounded-lg
                                    disabled:opacity-70
                                    disabled:cursor-not-allowed
                                    hover:opacity-80
                                    px-2
                                    py-1
                                    w-full
                                    bg-rose-600
                                    border-none
                                    text-white
                                    `
                                }
                            >
                               Book a room
                            </button>
                                
                            <div className="text-center text-sm font-light py-2">
                            You have not been charged yet
                            </div>
                        </div>
                    ):(
                        <div>
                            <button 
                                disabled={true}
                                className="
                                    rounded-lg
                                    disabled:opacity-70
                                    disabled:cursor-not-allowed
                                    hover:opacity-80
                                    px-2
                                    py-1
                                    w-full
                                    bg-rose-600
                                    border-none
                                    text-white
                                "
                            >
                                Check room availability
                            </button>
                            <div className="text-center text-sm font-light py-2">
                            Check booking schedule and number of members to book a room
                            </div>
                        </div>
                    )}
                    {countDay !== 0 && (
                        <div className="py-2 text-sm font-light flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <div><span>{price.toLocaleString('it-IT', {style : 'currency', currency : 'USD'})} </span> x <span>{countDay} night</span></div>
                            <div>{totalPrice.toLocaleString('it-IT', {style : 'currency', currency : 'USD'})} </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div><span>Service fee:</span></div>
                            <div>{((price * countDay)*0.1).toLocaleString('it-IT', {style : 'currency', currency : 'USD'})} </div>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                            <div>
                            Total before tax:
                            </div>
                            <div>
                                {Math.round(totalPrice +((price * countDay)*0.1)).toLocaleString('it-IT', {style : 'currency', currency : 'USD'}) } 
                            </div>
                        </div>
                        </div>
                    )}
                </div>
                
            </div>
}

export default ListingBill