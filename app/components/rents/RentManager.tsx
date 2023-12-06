"use client"

import { SafeListing, SafeUser } from "@/app/types"
import { Listing } from "@prisma/client"
import {useMemo,useCallback} from 'react'
import Header from "../Header";
import Image from "next/image";
import Button from "../Button";
import {useState} from 'react'
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { BiDownArrow } from "react-icons/bi";
import { Pagination, Stack } from "@mui/material";
import ClientOnly from "../ClientOnly";
import Container from "../Container";

interface RentManagerProps {
    listing: Listing[];
    currentUser: SafeUser | null
}
const RentManager:React.FC<RentManagerProps> =({
    listing = [],
    currentUser
}) =>{
    const [status,setStatus] = useState(false)
    const [isActive,setIsActive] = useState(false)
    const [open,setOpen] = useState(false)
    const [titleSort,setTitleSort] = useState('Sắp xếp')
    const [currentPage,setCurrentPage] = useState(1);
    const [countPerPage,setCountPerPage] = useState(8);
    const router = useRouter();
   
    const filter = useMemo(()=>{
        let result = listing.filter((item)=>item.userId === currentUser?.id);
         return result;
     },[listing,currentUser?.id])

     const [rootArray,setRootArray] = useState(filter)
     const [arrayListing,setArrayListing] = useState(filter)


     // pagination
     const start = currentPage * countPerPage - countPerPage;
     const end = currentPage * countPerPage;

     const pagin = [];
     for(let i=0;i<Math.ceil(arrayListing.length/countPerPage);i++){
        pagin.push(i)
     }

     // handle pagination
     const handlePagination = useCallback((e:any,p: any)=>{
        setCurrentPage(p)
    },[]);
     //handle deleted
     const handleDeleted = useCallback((id:string)=>{
        setIsActive(true);
        axios.post('/api/deletelisting',{
            id
        })
            .then(()=>{
                toast.success('Deleted')
                router.refresh();
            
            })
            .catch((err)=>{
                toast.error('Some thing went wrong.')
            })
            .finally(()=>{
                setIsActive(false)
            })
     },[router])

     // handle sort
     const handleSort = useCallback((title:string) =>{
        setOpen(false);
        console.log(title)
        if(title === 'lowprice'){
            setTitleSort(
                'Price low to high');

           let result =  filter.sort((a,b)=>{
                if(a.price >b.price) return 1;
                if(a.price <b.price) return -1;
                return 0;
            });
            setArrayListing(result);
        }else if(title === 'hightprice'){
            setTitleSort(
                'Price high to low');
            let result =  filter.sort((a,b)=>{
                 if(a.price >b.price) return -1;
                 if(a.price <b.price) return 1;
                 return 0;
             });
             setArrayListing(result);
        }else if(title === 'new'){
            setTitleSort('Latest Postt');
            let result = filter.sort((a,b)=>{
                if(a.createdAt >b.createdAt) return 1;
                if(a.createdAt <b.createdAt) return -1;
                return 0;
            })
            setArrayListing(result);
        } else if(title === 'old') {
            setTitleSort('Oldest Posts');
            let result = filter.sort((a,b)=>{
                if(a.createdAt >b.createdAt) return -1;
                if(a.createdAt <b.createdAt) return 1;
                return 0;
            })
            setArrayListing(result);
        } else if(title === 'expired'){
            setTitleSort('Expired')
            let result = filter.filter((item)=> new Date(item.night)< new Date());
            setArrayListing(result)
        }else {
            setTitleSort('Currently for rent')
            let result = filter.filter((item)=> new Date(item.night)> new Date());
            setArrayListing(result)
        }
     },[filter])
     

     // check empty
     if(filter.length === 0){
        return  <ClientOnly>
                    <Container >
                        <div className="font-bold text-2xl py-4">Cho thuê</div>
                        
                        <div className="py-4">
                            <div className="text-md font-bold " >Empty category</div>
                            <div className="text-[0.8rem] font-light pb-4">It's time for you to start renting out a room with Airbnb.</div>
                            <hr/>
                            <div
                                className=" py-4  "
                            >
                                <button className="border-[1px] rounded-lg px-4 py-4 hover:bg-neutral-200 transition text-sm cursor-pointer" onClick={()=>router.push('/rent2')}>
Start leasing</button>
                            </div>
                        </div>
                        <hr/>
                        <div className="text-[0.8rem] py-4 cursor-pointer">Are you having difficulties or don't know how to rent a room? <span onClick={()=>router.push('/contact?category=Guest')} className="underline cursor-pointer">Visit the Help Center</span></div>
                    </Container>
    
                </ClientOnly>
       }
    return (
        <div>
            <div className="w-full h-auto relative">
                <div className="w-full h-[300px] absolute top-0 left-0 bg-neutral-950/60 flex items-center justify-center">
                    <Header
                      title="Rental Categories"
                      subtitle="A compilation of listings for currently available places."
                      
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
            <div className="block lg:hidden">
                <Header 
                    title="Not Viewable"
                    subtitle="Switch to a laptop for managing rental listings."                    
                    center
                />
                <div className="px-4 py-4" >
                    <div 
                        onClick={()=>router.push('/rent2')}
                        className="text-[0.8rem] underline hover:text-neutral-500 cursor-pointer"
                    >
                      Return
                    </div>
                </div>
            </div>
            <div className="hidden lg:block">
                <div className="flex items-center justify-end  py-2">
                <div className=" relative w-[20%] h-8">
                    <div className="absolute top-0 right-8 border-b-[1px] border-rose-500 px-2 cursor-pointer flex justify-between items-center w-full">
                        <div>
                            {titleSort}
                        </div>
                        <div onClick={()=>setOpen(!open)}>
                            <BiDownArrow />
                        </div>
                    </div>
                    <div className={`absolute  top-7 right-8 z-20 bg-white px-4  rounded-md shadow-md text-sm  w-full overflow-hidden transition-all ${open ?"h-auto py-4 flex flex-col gap-2":"h-0 "}`}>
                    <div className="hover:text-neutral-600 transition-all cursor-pointer" onClick={() => handleSort('hightprice')}>High to Low Price</div>
<div className="hover:text-neutral-600 transition-all cursor-pointer" onClick={() => handleSort('lowprice')}>Low to High Price</div>
<div className="hover:text-neutral-600 transition-all cursor-pointer" onClick={() => handleSort('old')}>Latest Post</div>
<div className="hover:text-neutral-600 transition-all cursor-pointer" onClick={() => handleSort('new')}>Oldest Post</div>
<div className="hover:text-neutral-600 transition-all cursor-pointer" onClick={() => handleSort('expired')}>Expired</div>
<div className="hover:text-neutral-600 transition-all cursor-pointer" onClick={() => handleSort('inpired')}>Available for Rent</div>

                    </div>
                </div>
                </div>
                <div className="w-full px-4">
                    
                    <table className="w-full text-center table-auto">
                        <tr>
                        <th>Title</th>
<th>Room Code</th>
<th>Start Date</th>
<th>End Date</th>
<th>Price</th>
<th>Details</th>
<th>Delete</th>

                        </tr>
                    
                        {arrayListing.slice(start,end).map((item)=>{
                            return (
                                <tr key={item.id}>
                                    <td className="text-start">{item?.title}</td>
                                    <td>{item?.id}</td>
                                    <td>
                                        {new Date(item.createdAt).getDate()}/
                                        {new Date(item.createdAt).getMonth()+1}/
                                        {new Date(item.createdAt).getFullYear()}
                                    </td>
                                    <td>
                                        {new Date(item.night).getDate()}/
                                        {new Date(item.night).getMonth()+1}/
                                        {new Date(item.night).getFullYear()}
                                    </td>
                                    <td className="text-end px-4">{item?.price.toLocaleString('en', {style : 'currency', currency : 'USD'})}</td>
                                    <td>
                                        <Button
                                            label="Details"
                                            onClick={()=>router.push(`/listings/${item?.id}`)}
                                            outline
                                        />
                                    </td>
                                    <td>
                                        <Button
                                            label="Delete"
                                            onClick={()=>handleDeleted(item.id)}
                                        />
                                    </td>
                                </tr>
                            )
                        })}
                        
                        
                    </table>
                </div>
                <div className="w-full flex justify-end px-2">
                    {/* pagination */}
                    <Stack spacing={2} className="mt-3 mb-3 flex justify-end">
                        <Pagination count={pagin.length} variant="outlined" shape="rounded" className="flex justify-end" onChange={handlePagination}/>
                    </Stack>
                </div>
                <div className="px-4 py-4" >
                    <div 
                        onClick={()=>router.push('/rent2')}
                        className="text-[0.8rem] underline hover:text-neutral-500 cursor-pointer"
                    >
                        Return
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentManager