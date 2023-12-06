"use client"

import useFilter from "@/app/hooks/useFilter"
import Modals from "./Modals"
import Header from "../Header"
import { BsHouseDoor, BsToggle2Off, BsToggle2On } from "react-icons/bs"
import { MdOutlineMeetingRoom } from "react-icons/md"
import { GiCampingTent } from "react-icons/gi"
import { Slider } from "@mui/material"
import { useCallback, useState } from "react"
import { categories } from "../navbars/Categories"
import CategoryBox from "../navbars/CategoryBox"
import TypeItem from "../inputs/TypeItem"
import { useParams, useRouter } from "next/navigation"
import queryString from "query-string"

const room =[1,2,3,4,5,6,7,8]
const type = [
    {
        label: "Entire apartment usage",
        sub: "Apartment",
        icon: BsHouseDoor
    },
    {
        label: "Sleep in a room or common area",
        sub: "Common area",
        icon: GiCampingTent
    },
    {
        label: "Private room with shared area",
        sub: "Private room",
        icon: MdOutlineMeetingRoom
    }
]
const FilterModal = () =>{
    const filterModal = useFilter()
    const [priceValue,setPriceValue] = useState(100000)
    const [typehouse,setTypehouse] = useState('')
    const [mainroom,setMainroom] = useState(0)
    const [guestCount,setGuestCount] = useState(0)
    const [pet,setPet] = useState(0)
    const [bedroom,setBedroom] = useState(0)
    const [bath,setBath] = useState(0)
    const [price,setPrice] = useState(0)
    const [place,setPlace] = useState('');
    const [toggle1,setToggle1] = useState(false);
    const [toggle2,setToggle2] = useState(false);
    const [toggle3,setToggle3] = useState(false);
    const [toggle4,setToggle4] = useState(false);
    const router = useRouter();
    const params = useParams();

    // 
    const handleChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setPriceValue(newValue);
        }
      };
    //handle submit
    const onSubmit = useCallback(()=>{
        // create query
        let currentQuery = {}
        // check exist params
        if(params){
            currentQuery = queryString.parse(params.toString())
        }
        // update params
        const updateQuery:any ={
            ...currentQuery,
            house:typehouse,
            roomCount:mainroom,
            bed:bedroom,
            bathroomCount:bath,
            guestCount,
            price:priceValue,
            category:place
        }
        // stringify url
        const url = queryString.stringifyUrl({
            url:"/",
            query:updateQuery
        },{skipNull:true});
        //close filter modal
        filterModal.onClose()
        // push url
        router.push(url)
    },[params,
        typehouse,
        mainroom,
        bedroom,
        guestCount,
        bath,
        priceValue,
        place,
        filterModal,
        router
    ])
    
    //handle Reset
    const handleReset = useCallback(()=>{
        setTypehouse('');
        setMainroom(0);
        setGuestCount(0);
        setPet(0);
        setBedroom(0);
        setBath(0);
        setPrice(0);
        setPlace('')
    },[])
    const bodyContent = (
        <div className="grid grid-cols-1 px-4 py-4 max-h-[70vh] overflow-y-auto gap-5">
            <Header
               title="Accommodation Type"
               subtitle="Find a room, entire home, or any type of accommodation."
            />
            <div className="flex flex-col w-full gap-2 md:flex-row justify-between items-center">
                {type.map((item)=>{
                    return (
                        <TypeItem
                            key={item.label}
                            onClick={()=>setTypehouse(item.label)}
                            label={item.sub}
                            icon={item.icon}
                            selected= {typehouse === item.label}
                        />
                    )
                })}
            </div>
           
            <div>
                <div>
                    <Header 
                        title="Number of Guests"
                        subtitle=""
                    />
                    <div className="flex flex-wrap items-center gap-1 my-2">
                        {room.map((item)=>{
                            return (
                                <div 
                                    onClick={()=>setGuestCount(item)}
                                    key={item} 
                                    className={`rounded-full px-4 py-2 border-[1px] hover:bg-neutral-100 cursor-pointer ${guestCount=== item ?"bg-neutral-100":"bg-none"}`}
                                >
                                    {item === 8 ?item +'+':item}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <Header 
                        title="Number of Pets"
                        subtitle=""
                    />
                    <div className="flex flex-wrap items-center gap-1 my-2">
                        {room.map((item)=>{
                            return (
                                <div 
                                    onClick={()=>setPet(item)}
                                    key={item} 
                                    className={`rounded-full px-4 py-2 border-[1px] hover:bg-neutral-100 cursor-pointer ${pet=== item ?"bg-neutral-100":"bg-none"}`}
                                >
                                    {item === 8 ?item +'+':item}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <Header 
                        title="Bedrooms"
                        subtitle=""
                    />
                    <div className="flex flex-wrap items-center gap-1 my-2">
                        {room.map((item)=>{
                            return (
                                <div 
                                    onClick={()=>setMainroom(item)}
                                    key={item} 
                                    className={`rounded-full px-4 py-2 border-[1px] hover:bg-neutral-100 cursor-pointer ${mainroom=== item ?"bg-neutral-100":"bg-none"}`}
                                >
                                    {item === 8 ?item +'+':item}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <Header 
                        title="Beds"
                        subtitle=""
                    />
                    <div className="flex flex-wrap items-center gap-1 my-2">
                        {room.map((item)=>{
                            return (
                                <div 
                                    onClick={()=>setBedroom(item)}
                                    key={item} 
                                    className={`rounded-full px-4 py-2 border-[1px] hover:bg-neutral-100 cursor-pointer ${bedroom=== item ?"bg-neutral-100":"bg-none"}`}
                                >
                                    {item === 8 ?item +'+':item}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <Header 
                        title="Bathrooms"
                        subtitle=""
                    />
                    <div className="flex flex-wrap items-center gap-1 my-2">
                        {room.map((item)=>{
                            return (
                                <div 
                                    onClick={()=>setBath(item)}
                                    key={item} 
                                    className={`rounded-full px-4 py-2 border-[1px] hover:bg-neutral-100 cursor-pointer ${bath=== item ?"bg-neutral-100":"bg-none"}`}
                                >
                                    {item === 8 ?item +'+':item}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            
            <div>
                <Header 
                    title="Price per night"
                    subtitle="Excluding taxes and fees"
                />
                <div>
                <Slider
                    aria-label="Temperature"
                    value={priceValue}
                    onChange={handleChange}
                    //getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={500000}
                    marks
                    min={10}
                    max={10000000}
                    />
                    <div>Từ {priceValue.toLocaleString('en', {style : 'currency', currency : 'USD'})} </div>
                </div>
            </div>
            {/* place */}
            <div>
                <Header 
                   title="Destination"
                   subtitle="There are plenty of choices on Airbnb.com"
                />
                <div className="grid text-center grid-cols-3 gap-2">
                    {categories.map((category)=>{
                        return <div 
                                    onClick={()=>setPlace(category.label)}
                                    className={`px-2 py-2 border-[1px] rounded-lg cursor-pointer ${place === category.label ?"bg-neutral-100":"bg-none"}`}
                                    key={category?.label} 
                                >
                                    {category?.label}
                                </div>
                    })}
                </div>
            </div>
            {/* recive room */}
            <div className="flex flex-col gap-2 ">
                <Header 
                    title="Booking options"
                    subtitle=""
                />
                <div className="flex items-center justify-between gap-2">
                    <div>
                    <div className="font-bold text-sm">Book now</div>
<div className="text-[0.8rem] font-light">Private rooms for rent that you can book without waiting for host approval.</div>

                    </div>
                    <div onClick={()=>setToggle2(!toggle2)} className="cursor-pointer">
                        {toggle2 ? <div><BsToggle2Off size={25}/></div>:<div><BsToggle2On size={25}/></div>}
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <div>
                    <div className="font-bold text-sm">Self-check-in</div>
<div className="text-[0.8rem] font-light">Easily access your accommodation as soon as you arrive.</div>

                    </div>
                    <div onClick={()=>setToggle1(!toggle1)} className="cursor-pointer">
                        {toggle1 ? <div><BsToggle2Off size={25}/></div>:<div><BsToggle2On size={25}/></div>}
                    </div>
                </div>
            </div>
            {/* Better place */}
            <div className="flex flex-col gap-2 ">
                <Header 
                    title="Top accommodations"
                    subtitle=""
                />
                <div className="flex items-center justify-between gap-2">
                    <div>
                    <div className="font-bold text-sm">Superhost</div>
<div className="text-[0.8rem] font-light">Stay with recognized hosts.</div>

                    </div>
                    <div onClick={()=>setToggle3(!toggle3)} className="cursor-pointer">
                        {toggle3 ? <div><BsToggle2Off size={25}/></div>:<div><BsToggle2On size={25}/></div>}
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <div>
                        <div className="font-bold text-sm">Airbnb plus</div>
                        <div className="text-[0.8rem] font-light">Every plus home is quality checked.</div>

                    </div>
                    <div onClick={()=>setToggle4(!toggle4)} className="cursor-pointer">
                        {toggle4 ? <div><BsToggle2Off size={25}/></div>:<div><BsToggle2On size={25}/></div>}
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <Modals
            isOpen = {filterModal.isOpen}
            onClose={()=>filterModal.onClose()}
            onSubmit={onSubmit}
            title="filter Product"
            actionLabel="Filter "
            body={bodyContent}
            secondaryActionLabel="Clear Information"
            secondaryAction={handleReset}
        />
    )
}

export default FilterModal


