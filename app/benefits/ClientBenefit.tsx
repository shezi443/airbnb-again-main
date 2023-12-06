"use client"

import Image from "next/image"
import Header from "../components/Header"
import { SafeUser, safeReservation } from "../types"
import BenefitItem from "../components/benefits/BenefitItem"
import { useCallback,useMemo } from "react"
import { Listing } from "@prisma/client"
import { useRouter } from "next/navigation"
import Footer from "../components/Footer"

interface ClientBenefitProps {
    reservation: safeReservation[] | undefined;
    listing: Listing[];
    currentUser: SafeUser | null
}

const ClientBenefit:React.FC<ClientBenefitProps> = ({
    reservation = [],
    listing = [],
    currentUser
}) =>{
    const router = useRouter()
    const checkExist = (id:string) =>{
       let result= mergeArr.some((item)=>{
            if(item.listingId === id){
                return true;
            }else {
                return false
            }
        });
         return result
    }

    const mergeArr:any[] = [];
    for(let i=0;i<reservation.length;i++)
    {
        //console.log(reservation[i].listingId)
        //console.log(checkExist(reservation[i].listingId))
        if(checkExist(reservation[i].listingId)){
            //console.log(mergeArr)
          let result = mergeArr.find((item) =>item.id === reservation[i-1].id);
          //console.log(result);
          if(result){
            result.count +=1;
            result.totalPrice +=reservation[i].totalPrice;
          }
          
        }else{
            let updateArr = {...reservation[i], count:1}
            mergeArr.push(updateArr)
        }
    }
    //console.log(mergeArr)
    // all benefit
    const allBenefit = useMemo(()=>{
       const result =  mergeArr.reduce((cal, item)=>{
            return cal +=item.totalPrice
        },0);
        return result
    },[mergeArr])

    // show mounth
    const takeMounth = useMemo(()=>{
        let result = listing?.filter((item)=>item.userId === currentUser?.id);
        // find the smallest element in array
        let smallest=result[0];
       // console.log(smallest);
        result.forEach((item)=>{
            if(item.createdAt < smallest.createdAt){
                smallest = item
            }
        })
        // there is smallest and currentMounth
       let smallestMounth = new Date(smallest.createdAt).getMonth()+1;
       let currentMounth = new Date().getMonth()+1
       // convert to array 
       const mounth = [];
       for(let i=smallestMounth;i<=currentMounth;i++)
       {
        let obj;
        let countbookobj = reservation?.filter((item)=>new Date(item.startDate).getMonth()+1 === i)
        let totalPrice = countbookobj.reduce((cal,item)=>{
            return cal +=item.totalPrice;
        },0)
        let status = i < new Date().getMonth() +1 ? true : false
        obj = {count:countbookobj.length, month:i,totalPrice, status}
        mounth.push(obj);
       }
       return mounth
    },[currentUser?.id,listing,reservation]);

    
  
    
    return (
        <div>
           <div className="w-full h-auto relative">
                <div className="w-full h-[300px] absolute top-0 left-0 bg-neutral-950/60 flex items-center justify-center">
                    <Header
                        title="Revenue Management"
                        subtitle="Revenue statistics are summarized by month"
                        big
                        center
                        white
                    />
                </div>
                <Image
                    src="/title-03.webp"
                    width={1000}
                    height={1000}
                    alt="trips"
                    objectPosition="top"
                    className="w-full h-[300px] object-cover "
                />
            </div>
            <div className="block lg:hidden  ">
                <Header 
                    title="Switch to Desktop for Revenue Management"
                    subtitle="This feature is only available on desktop screens"
                    center
                />
            </div>
            <div className="hidden lg:block">
            <div className="px-4 py-4">
                <table className="w-full  text-center ">
                    <tbody>
                    <tr>
                <th className="text-start">Monthly Revenue</th>
                <th>Number of Bookings</th>
                <th>Total Revenue</th>
                <th>Status</th>
                </tr>
                  {takeMounth.map((item)=>{
                    return <tr key={item.month}>
                        <td 
                        onClick={()=>router.push(`/benefits/${item.month}`)} 
                        className="text-start cursor-pointer hover:text-neutral-600"
                        > 
                            Month {item.month}
                        </td>
                        <td> {item.count} times </td>
<td> {item.totalPrice.toLocaleString('en', { style: 'currency', currency: 'USD' })} </td>
<td> {item.status ? 'completed' : 'update'} </td>
                    </tr>
                  })}
                  </tbody>
                </table>
                
            </div>
            <hr/>
            <div className="flex flex-col gap-2 items-end mt-4 px-4">
            <div>Total revenue before tax</div>
<div>{allBenefit.toLocaleString('en', { style: 'currency', currency: 'USD' })}</div>

            </div>
            <div className="py-4 px-4 ">
                <div onClick={()=>router.push('/rent2')} className="underline text-sm font-light cursor-pointer">Back</div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default ClientBenefit