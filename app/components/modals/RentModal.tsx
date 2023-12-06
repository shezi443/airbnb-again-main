"use client"

import useRentModal from "@/app/hooks/useRentModal"
import Modals from "./Modals"
import {useCallback,useState,useMemo} from 'react'

import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import Header from "../Header"
import { categories } from "../navbars/Categories"
import CategoryInput from "../inputs/CategoryInput"
import CountrySelect from "../inputs/CountrySelect"
// import Map from "../Map"
import dynamic from "next/dynamic"
import Counter from "../inputs/Counter"
import ImageUpload from "../inputs/ImageUpload"
import Input from "../inputs/Input"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import RentContent from "../rents/RentContent"
import { FcDam, FcHome, FcSupport } from "react-icons/fc"
import Image from "next/image"
import { TbBeach, TbBeachOff, TbHorseToy, TbMountain, TbPool, TbSkateboard, TbViewportWide, TbWashMachine } from "react-icons/tb"
import { GiCampingTent, GiGasStove, GiHeatHaze, GiPeaceDove, GiPoolDive, GiSmokeBomb, GiWatchtower, GiWindmill } from "react-icons/gi"
import { MdFamilyRestroom, MdOutlineFamilyRestroom, MdOutlineHouseSiding, MdOutlineVilla, MdPlace, MdYard } from "react-icons/md"
import UtilitiesInput from "../inputs/UtilitiesInput"
import { FaBath, FaFireExtinguisher, FaShower, FaWifi } from "react-icons/fa"
import {PiPersonArmsSpreadFill, PiTelevisionSimpleFill} from 'react-icons/pi'
import {MdKitchen} from 'react-icons/md'
import {GiWashingMachine} from 'react-icons/gi'
import {AiFillCar} from 'react-icons/ai'
import {TbAirConditioning} from 'react-icons/tb'
import {MdTableRestaurant} from 'react-icons/md'
import {LiaUmbrellaBeachSolid} from 'react-icons/lia'
import {LuCalculator} from 'react-icons/lu'
import { BiSolidPiano } from "react-icons/bi"
import {CgGym} from 'react-icons/cg'
import { ImAidKit } from "react-icons/im"
import { BsDoorOpen, BsHouseDoor } from "react-icons/bs"
import {MdGroup} from 'react-icons/md'
import { TiGroup } from "react-icons/ti"

export const utilitiesArr = [
    {
      label: 'Wifi',
      icon: FaWifi,
      description: 'This property is close to the beach!',
      selected: false,
    },
    {
      label: 'TV',
      icon: PiTelevisionSimpleFill,
      description: 'This property has windmills!',
      selected: false,
    },
    {
      label: 'Kitchen',
      icon: MdKitchen,
      description: 'This property is modern!',
      selected: false,
    },
    {
      label: 'Washing Machine',
      icon: GiWashingMachine,
      description: 'This property is in the countryside!',
      selected: false,
    },
    {
      label: 'Free Parking',
      icon: AiFillCar,
      description: 'This property is close to the beach!',
      selected: false,
    },
    {
      label: 'Air Conditioning',
      icon: TbAirConditioning,
      description: 'This property has windmills!',
      selected: false,
    },
    {
      label: 'Workspace',
      icon: MdTableRestaurant,
      description: 'This property has windmills!',
      selected: false,
    },
    {
      label: 'Swimming Pool',
      icon: TbPool,
      description: 'This property is close to the beach!',
      selected: false,
    },
    {
      label: 'Hot Tub',
      icon: FaBath,
      description: 'This property has windmills!',
      selected: false,
    },
    {
      label: 'Yard',
      icon: MdYard,
      description: 'This property is modern!',
      selected: false,
    },
    {
      label: 'BBQ Grill',
      icon: GiGasStove,
      description: 'This property is in the countryside!',
      selected: false,
    },
    {
      label: 'Outdoor Area',
      icon: LiaUmbrellaBeachSolid,
      description: 'This property is close to the beach!',
      selected: false,
    },
    {
      label: 'Campfire',
      icon: GiCampingTent,
      description: 'This property has windmills!',
      selected: false,
    },
    {
      label: 'Billiards Table',
      icon: LuCalculator,
      description: 'This property has windmills!',
      selected: false,
    },
    {
      label: 'Fireplace',
      icon: GiHeatHaze,
      description: 'This property is close to the beach!',
      selected: false,
    },
    {
      label: 'Piano',
      icon: BiSolidPiano,
      description: 'This property has windmills!',
      selected: false,
    },
    {
      label: 'Exercise Equipment',
      icon: CgGym,
      description: 'This property has windmills!',
      selected: false,
    },
    {
      label: 'Lake Access',
      icon: GiPoolDive,
      description: 'This property is close to the beach!',
      selected: false,
    },
    {
      label: 'Beach Access',
      icon: TbBeachOff,
      description: 'This property has windmills!',
      selected: false,
    },
    {
      label: 'Ski Slope',
      icon: TbSkateboard,
      description: 'This property is modern!',
      selected: false,
    },
    {
      label: 'Outdoor Shower',
      icon: FaShower,
      description: 'This property is in the countryside!',
      selected: false,
    },
    {
      label: 'Smoke Detector',
      icon: GiSmokeBomb,
      description: 'This property is close to the beach!',
      selected: false,
    },
    {
      label: 'First Aid Kit',
      icon: ImAidKit,
      description: 'This property has windmills!',
      selected: false,
    },
    {
      label: 'Fire Extinguisher',
      icon: FaFireExtinguisher,
      description: 'This property is modern!',
      selected: false,
    },
    {
      label: 'CO Detector',
      icon: TbWashMachine,
      description: 'This property is in the countryside!',
      selected: false,
    },
  ]
  export const houseArr = [
    {
      label: "Entire Home",
      icon: BsHouseDoor,
      description: "Guests can use the entire place exclusively."
    },
    {
      label: "Private Room with Shared Areas",
      icon: BsDoorOpen,
      description: "Guests will have a private room in a house and can use shared areas."
    },
    {
      label: "Sleep in a Room or Shared Area",
      icon: MdOutlineFamilyRestroom,
      description: "Guests sleep in a room or a shared area - where you or others also use."
    }
  ]
  export const whoArr = [
    {
      label: "Single",
      icon: PiPersonArmsSpreadFill,
      description: "One person",
      selected: false,
    },
    {
      label: "Couple",
      icon: MdGroup,
      description: "Couple",
      selected: false,
    },
    {
      label: "Family",
      icon: MdFamilyRestroom,
      description: "Family",
      selected: false,
    },
    {
      label: "Group",
      icon: TiGroup,
      description: "Group of friends",
      selected: false,
    },
  ]

export const typeArr = [
    {
        label:"Tranquil",
        icon:GiPeaceDove
    },
    {
        label:"Unique",
        icon:GiWatchtower
    },
    {
        label:"Family-Friendly",
        icon:TbHorseToy
    },
    {
        label:"Stylish",
        icon:MdOutlineHouseSiding
    },
    {
        label:"Central Location",
        icon:MdPlace
    },
    {
        label:"Spacious",
        icon:TbViewportWide
    }
]
enum STEPS {
    START = 0,
    CATEGORY = 1,
    LOCATION = 2,
    INFO = 3,
    HOUSE =4,
    WHO = 5,
    OVERVIEW = 6,
    UTILITIES = 7,
    IMAGES = 8,
    DESCRIPTION = 9,
    TYPE = 10,
    OVERVIEW2 = 11,
    NIGHT = 12,
    PRICE = 13
}
const RentModal = () =>{
    const rentModal = useRentModal();
    const [step, setStep] = useState(STEPS.START);
    const [isLoading,setIsLoading] = useState(false);
    const router = useRouter()

    //react-hook-form
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
      } = useForm<FieldValues>({
        defaultValues:{
            category: categories[0].label,
            location: null,
            guestCount: 1,
            roomCount: 1,
            bed: 1,
            house: houseArr[0].label,
            who:[],
            bathroomCount: 1,
            imageSrc: '',
            utilities:[],
            type: typeArr[0].label,
            price: 0,
            title: '',
            night: '',
            description: ''
        }
      })

      //submit handler
      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        if(step !== STEPS.PRICE)
        {
            return onNext()
        }

        axios.post('/api/listing3', data)
            .then(()=>{
                toast.success('Listing is created');
                router.refresh();
                setStep(STEPS.CATEGORY)
                rentModal.onClose()
            })
            .catch(()=>{
                toast.error("Something went wrong")
            }).finally(()=>{
                setIsLoading(false)
            })
      }

      // the other way to take value without submit
      const category = watch('category'); // watch(pass exactly name of defaultValue)
      const location = watch('location');
      const guestCount = watch('guestCount');
      const roomCount = watch('roomCount');
      const bed = watch('bed');
      const bathroomCount = watch('bathroomCount');
      const imageSrc = watch('imageSrc');
      const utilities = watch('utilities');
      const house = watch('house');
      const who = watch('who');
      const type = watch('type');
      const price = watch('price');
      
    
      // create specical set value, because method setCustomValue (react-hook-form) by default not set value
      const setCustomValue = (id:string, value: any) =>{
        setValue(id,value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
        })
    }

    const Map = useMemo(()=>dynamic(()=>import('../Map'),{
        ssr:false
    }),[]);
    const onBack = () =>{
        setStep((value)=> value - 1);
    }
    const onNext = () =>{
        setStep((value)=> value + 1);
    }

    
    

    const handleActionLabel = useMemo(()=>{
        //last steps --> return create
        if(step === STEPS.PRICE)
        {
            return 'Create'
        }

        if(step === STEPS.START)
        {
            return "Start"
        }

        return 'Next'
    },[step]);



    const secondaryActionLabel = useMemo(()=>{
        // first steps --> return undefined
        if(step === STEPS.START){
            return undefined;
        }

        return 'Back';
    },[step]);

    // handle add utilities

    const handleUtilities = (value:string) =>{
        let sel ;
        // create variabel 
        let result:string[] =[...utilities];
       
        //check 
        if(result.length === 0)
        {
            result.push(value);
            sel = utilitiesArr.find((item)=>item.label === value)
            if(sel)
            {
                sel.selected = true;
            }
        }else{
            for(let i=0;i<result.length;i++)
            {
                if(result[i] === value)
                {
                    // set selected = false
                    let sal = utilitiesArr.find((item)=>item.label === value)
                    if(sal)
                    {
                        sal.selected = false;
                    }
                    //toggle
                   let re = result.filter((item:any) =>item !== value);
                    setCustomValue("utilities", re);
                    return;
                }
            }
           result.push(value);
           sel = utilitiesArr.find((item)=>item.label === value)
            if(sel)
            {
                sel.selected = true;
            }
        }
        setCustomValue("utilities", result);
        
    }

    const checkSelected =(item:string)=>{
       let result = utilitiesArr.find(it=>it.label === item);
       if(result)
       {
        if(result.selected )
        {
            return true;
        }
       }
       return false;
    }

    const handleWho = (value: string) =>{
        let sel ;
        // create variabel 
        let result:string[] =[...who];
       
        //check 
        if(result.length === 0)
        {
            result.push(value);
            sel = whoArr.find((item)=>item.label === value)
            if(sel)
            {
                sel.selected = true;
            }
        }else{
            for(let i=0;i<result.length;i++)
            {
                if(result[i] === value)
                {
                    // set selected = false
                    let sal = whoArr.find((item)=>item.label === value)
                    if(sal)
                    {
                        sal.selected = false;
                    }
                    //toggle
                   let re = result.filter((item:any) =>item !== value);
                   console.log(re);
                    setCustomValue("who", re);
                    return;
                }
            }
           result.push(value);
           sel = whoArr.find((item)=>item.label === value)
            if(sel)
            {
                sel.selected = true;
            }
        }
        setCustomValue("who", result);
    }

    const checkWho =(item:string)=>{
        let result = whoArr.find(it=>it.label === item);
        if(result)
        {
         if(result.selected )
         {
             return true;
         }
        }
        return false;
     }

    let bodyContent = (
        <div className="md:grid grid-cols-2 gap-8 ">
           <div className="flex justify-center items-center">
                <span className=" px-4 mt-4 text-xl md:text-2xl font-semibold text-start md:text-center w-full md:w-2/3">Getting started on Airbnb is very easy.</span>
           </div>
           <div className="px-4 py-8 ">
            <div className="mb-4">
                <RentContent 
                   
title="1 Share information about your accommodation with us"
content="Share some basic information, such as the location of the house/room for rent and the number of guests that can stay there."
                    bold
                    icon={FcHome}
                />
            </div>
            <div className="mb-4">
                <RentContent 
                    
title="2 Make your accommodation stand out"
content="Add 5 or more photos along with a title and description – we'll help you with that."
                    bold
                    icon={FcDam}
                />
            </div>
            <div className="mb-4">
                <RentContent 
                   
title="3 Complete and publish your rental listing"
content="Choose whether you want to start with experienced hosting, set a starting price, or publish your rental listing."
                    bold
                    icon={FcSupport}
                />
            </div>
           </div>
        </div>
    )


    if(step ===STEPS.CATEGORY)
    {
        bodyContent =(
            <div className="flex flex-col gap-8">
                <Header 
                 title="Accurately describe your place"
                 subtitle="Choose a description that best fits"
                    center 
                />
                {/* LIST OF CATEGORY */}
                <div className="grid grid-cols-1 px-4 md:px-16 sm:grid-cols-2 md:grid-cols-3 max-h-[50vh] overflow-y-auto gap-5">
                    {categories.map((item) =>{
                        return <CategoryInput
                                    key={item.label}
                                    
                                    // onClick recive category(watch) --> then, setCustomerValue(id,value)
                                    onClick={(value) =>setCustomValue('category',value)}
                                    // selected to style css
                                    selected ={category ===item.label}
                                    label={item.label}
                                    icon ={item.icon}
                                />
                    })}
                </div>
            </div>
        )
    }

    if(step === STEPS.LOCATION)
    {
        bodyContent =(
            <div className="flex flex-col gap-3 px-4">
                <Header 
                    title="Which country are you in?"
                    subtitle="Choose your country..."
                    center
                />
                <CountrySelect 
                    value={location}
                    onChange={(value)=>setCustomValue('location',value)}
                />
                {/* Map recive coordination and not support by react */}
                <Map
                    center={location?.latlng}
                />
            </div>
        )
    }

    if(step === STEPS.INFO){
        bodyContent=(
            <div className="flex px-4  justify-center">
                <div className="w-full sm:w-1/2 flex flex-col gap-4">
                <Header 
    title ="Basic Information"
    subtitle="You will provide additional information."
    center
/>
<Counter
    title="Number of Guests"
    subtitle="How many guests can you accommodate?"
    value={guestCount}
    onChange={(value)=>setCustomValue("guestCount", value)}
/>
<Counter
    title="Number of Bedrooms"
    subtitle="How many beds per room?"
    value={bed}
    onChange={(value)=>setCustomValue("bed", value)}
/>
<Counter
    title="Number of Rooms"
    subtitle="How many hotel rooms are available?"
    value={roomCount}
    onChange={(value)=>setCustomValue("roomCount", value)}
/>
<Counter
    title="Number of Bathrooms"
    subtitle="How many bathrooms are available?"
    value={bathroomCount}
    onChange={(value)=>setCustomValue("bathroomCount", value)}
/>

                </div>
            </div>
        )
    }

    if(step === STEPS.HOUSE)
    {
        bodyContent =(
            <div className="flex justify-center items-center w-full px-4">
                <div className="w-full lg:w-1/2 flex flex-col gap-4 ">
                <Header 
    title="Type of Accommodation"
    subtitle="Choose the most accurate description"
    center
/>
                    <div className="flex flex-col gap-4 sm:mt-8 px-4">
                        {houseArr.map((item)=>{
                            return <CategoryInput 
                                        key={item.label}
                                        onClick={(value) =>setCustomValue('house',value)}
                                        selected = {house === item.label}
                                        icon ={item.icon}
                                        label={item.label}
                                        house
                                        description ={item.description}
                                    />
                        })}
                    </div>
                </div>
            </div>
        )
    }

    if(step ===STEPS.WHO)
    {
        bodyContent = (
            <div className="flex justify-center items-center w-full px-4">
                <div className="flex flex-col gap-4 w-full md:w-1/2 ">
                    <Header 
                          title="Target Audience for Renting"
                          subtitle="Choose the target audience you can accommodate"
                        center
                        />
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mt-4 md:mt-8 ">
                    {whoArr.map((item)=>{
                            return <UtilitiesInput 
                                        key={item.label}
                                        onClick={(value) =>handleWho(value)}
                                        selected ={checkWho(item.label)} 
                                        icon={item.icon}
                                        label={item.label}
                                    />
                        })}
                   </div>
                </div>
                
            </div>
        )
    }

    if(step === STEPS.OVERVIEW)
    {
        bodyContent = (
            <div className="w-full h-full  flex justify-center items-center">
                <div className=" w-full px-4 sm:w-2/3 flex flex-col lg:flex-row justify-between items-center gap-4 pt-8">
                    <Header 
                        title="Make Your Place Stand Out"
                        subtitle="In this step, you'll add some amenities provided at your place, along with 5 or more photos. Then, you'll compose a title and description."
                    />
                    <Image 
                        src="/house-modal.webp"
                        alt="House Modal"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        )
    }

    if(step === STEPS.UTILITIES)
    {
        bodyContent = (
            <div className="flex flex-col gap-4 w-full  justify-center items-center ">
               <div className="w-full px-4 sm:w-1/2 ">
                <Header 
                        title="Amenities"
                        subtitle="Select all the amenities you have available."
                        center
                    />
                    <div className="  max-h-[60vh] overflow-y-auto">
                                <div className="py-4">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        { utilitiesArr.map((utility ) =>{
                                            return <UtilitiesInput 
                                                        key={utility.label}
                                                        onClick={(value)=>handleUtilities(value)}
                                                        label={utility.label}
                                                        icon = {utility.icon}
                                                        selected={checkSelected(utility.label)}
                                                    
                                                    />
                                        })}
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
        )
    }

    if(step ===STEPS.IMAGES)
    {
        bodyContent = (
            <div className="flex flex-row justify-center items-center  ">
                <div className="w-full flex flex-col gap-4 md:w-1/2 px-4">
                <Header 
    title="Photo Gallery"
    subtitle="A gallery of photos showcasing your hotel."
/>
                    <ImageUpload 
                        value={imageSrc}
                        onChange={(value)=>setCustomValue('imageSrc',value)}
                    />
                </div>
            </div>
        )
    }


    if(step === STEPS.DESCRIPTION)
    {
        bodyContent =(
            <div className="flex justify-center items-center">
                <div className="flex flex-col gap-4 w-full sm:w-1/2 px-4">
                    <Header 
                        title="Now, give the property a title in your farmhouse category"
                        subtitle="A short and effective title works best. Don't worry, you can always change the title later."
                    />
                    <Input 
                        id="title"
                        type="text"
                        label="Title"
                        register={register}
                        required
                    
                        errors={errors}
                    />
                    <Input 
                        id="description"
                        type="text"
                        label="Description"
                        register={register}
                        required
                        description
                        errors={errors}
                    />
                </div>
            </div>
        )
    }

    if(step === STEPS.TYPE)
    {
        bodyContent =(
            <div className="flex justify-center items-center w-full h-full px-4">
                <div>
                    <div className="mb-8 mt-4">
                    <Header 
    title="Category Features"
    subtitle="We will use this information to start creating your listing description."
    center
/>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[50vh] overflow-y-auto">
                        {typeArr.map((item)=>{
                            return <CategoryInput 
                                    key={item.label}
                                    onClick={(value)=>setCustomValue("type",value)}
                                    selected ={type === item.label}
                                    label={item.label}
                                    icon ={item.icon}
                                   />
                        })} 
                    </div>
                </div>
            </div>
        )
    }


    if(step === STEPS.OVERVIEW2)
    {
        bodyContent = (
            <div className="w-full h-full  flex justify-center items-center">
                <div className=" w-full px-4 sm:w-2/3 flex flex-col lg:flex-row justify-between items-center gap-4 pt-8">
                <Header 
    title="Complete and Publish"
    subtitle="Finally, you will choose whether to start with experienced guests or not. Then, you will set the nightly price. Answer a few quick questions and publish your listing when you're ready."
/>

                    <Image 
                        src="/house-modal.webp"
                        alt="House Modal"   
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        )
    }

    if(step === STEPS.NIGHT)
    {
        bodyContent =(
            <div className="w-full h-full  flex justify-center items-center">
                <div className=" w-full px-4 sm:w-2/3 flex flex-col lg:flex-col justify-between items-center gap-4 pt-8">
                <Header 
    title="When Are Your Rooms Available?"
    subtitle="Select the dates you can rent your rooms. You can update this in the future."
    center
/>

                   <div>
                    <div className="flex text-sm ">
                    <div className="font-bold">Start Date:</div>
                        <div  className="font-light">{new Date().getDate()} thg</div>
                        <div className="font-light">{new Date().getMonth()+1}-</div>
                        <div className="font-light">{new Date().getFullYear()}</div>
                    </div>
                    <div className="font-bold text-sm">End Date: <span className="font-light text-[0.7rem]">Select the end date for the rental</span></div>

                    <Input 
                        id="night"
                        label="Night"
                        type="date"
                        register={register}
                        required
                        errors={errors}
                    />
                </div>
                </div>
            </div>
        )
    }
    if(step === STEPS.PRICE)
    {
        bodyContent =(
            <div className="flex justify-center items-centerpt-12 px-4 w-full h-full">
               <div className="flex flex-col gap-4 w-full sm:w-1/2 h-full">
               <Header 
    title="Now, set the price you want and start renting"
    subtitle="You can change this price at any time."
    center
/>

                   <div className="w-full h-full">
                    <Input 
                            id="price"
                            label="Price"
                            type="number"
                            formatPrice
                            register={register}
                            errors={errors}
                            required
                        />
                   </div>
               </div>
            </div>
        )
    }

    // location: null,
    //         guestCount: 1,
    //         roomCount: 1,
    //         bed: 1,
    //         house: houseArr[0].label,
    //         who:[],
    //         bathroomCount: 1,
    //         imageSrc: '',
    //         utilities:[],
    //         type: typeArr[0].label,
    //         price: 0,
    //         title: '',
    //         night: '',
    //         description: ''
    // handle check fill all
    const handleCheckAllFill = useMemo(()=>{
        if(step === STEPS.PRICE){
            if(location === null || who.length === 0 || imageSrc === '' || utilities.length === 0 || price <10 ){
                return false
            }
        }
        return true
    },[step,location,imageSrc,price,utilities.length,who.length])
    return (
        <Modals 
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            title="Rent"
            actionLabel={handleActionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step ===STEPS.START ? undefined : onBack}
            body={bodyContent}
            rent
            checkRent= {handleCheckAllFill}
            lastStep={step ===STEPS.PRICE ?true:false}
            firstStep = {step === STEPS.START ? true: false}
        />
        
    )
}

export default RentModal