"use client"

import RentContent from "./RentContent"
import {TiTick} from 'react-icons/ti'
import {ImCross} from 'react-icons/im'
import Button from "../Button"

const RentHeader2 = () =>{

   
    return (
        <div className="py-8">
            <div className=" text-center mt-4">
                <span className="text-4xl font-semibold"><span className="text-rose-600 ">Air</span>cover</span>
                <div className="font-semibold">for the homeowner</div>
            </div>
            <div className="mt-4 text-start md:text-center">
                <span className="text-xl md:text-4xl font-semibold text-center">
Rent on Airbnb with comprehensive protection</span>
                <table className="w-full mt-6">
                    <tbody>
                    <tr >
                        <td></td>
                        <td className="text-sm md:text-md text-center">Airbnb</td>
                        <td className="text-sm md:text-md text-center">
Competitive unit</td>
                    </tr>
                    <tr className="md:border-b-[1px]">
                        <td className="md:max-w-sm ">
                            <div className="w-full lg:w-1/2 py-5">
                                <RentContent
                                    title="Verify the guest's identity"
                                    content="Our comprehensive verification system checks information such as name, address, government-issued identification, and many other details to confirm the identity of guests booking/reserving on Airbnb."
                                    bold
                                    hidden
                                />
                            </div>
                        </td>

                        <td >
                            <div className="flex justify-center">
                                <TiTick className="text-green-600" size={30}/>
                            </div>
                        </td>
                        <td>
                        <div className="flex justify-center">
                                <ImCross className="text-rose-700" size={20}/>
                            </div>
                        </td>
                    </tr>
                    <tr className=" md:hidden border-b-[1px]">
                        <td colSpan={3} className="pb-5">
                        <RentContent
    padding
    content="Our comprehensive verification system checks information such as name, address, government-issued identification, and many other details to confirm the identity of guests booking/reserving on Airbnb."
    bold
/>

                        </td>
                    </tr>
                    {/* item 2  */}
                    <tr className="md:border-b-[1px]">
                        <td className="md:max-w-sm ">
                            <div className="w-full lg:w-1/2 py-5">
                            <RentContent
    title="Screening reservation requests"
    content="Our exclusive technology analyzes hundreds of factors in each reservation request to block bookings that show a high risk of organizing disruptive parties and causing property damage."
    bold
    hidden
/>

                            </div>
                        </td>

                        <td >
                            <div className="flex justify-center">
                                <TiTick className="text-green-600" size={30}/>
                            </div>
                        </td>
                        <td>
                        <div className="flex justify-center">
                                <ImCross className="text-rose-700" size={20}/>
                            </div>
                        </td>
                    </tr>
                    <tr className=" md:hidden border-b-[1px]">
                        <td colSpan={3} className="pb-5">
                            <RentContent
                                padding
                                content="Our exclusive technology analyzes hundreds of factors in each reservation request to block bookings that show a high risk of organizing disruptive parties and causing property damage"
                                bold
                            />
                        </td>
                    </tr>
                    {/* item 3  */}
                    <tr className="md:border-b-[1px]">
                        <td className="md:max-w-sm ">
                            <div className="w-full lg:w-1/2 py-5">
                                <RentContent
                                    title="Protection for property damage up to $3 million"
                                    content="Airbnb will reimburse you for damage caused by guests to your property and belongings, including the following special protection measures:"
                                    hidden
                                    bold
                                />
                            </div>
                        </td>

                        <td >
                            <div className="flex justify-center">
                                <TiTick className="text-green-600" size={30}/>
                            </div>
                        </td>
                        <td>
                        <div className="flex justify-center">
                                <ImCross className="text-rose-700" size={20}/>
                            </div>
                        </td>
                    </tr>
                    <tr className=" md:hidden border-b-[1px]">
                        <td colSpan={3} className="pb-5">
                        <RentContent
    padding
    content="Airbnb will reimburse you for damage caused by guests to your home and belongings, including special protection measures:"
    bold
/>

                        </td>
                    </tr>
                    {/* item 4  */}
                    <tr className="md:border-b-[1px]">
                        <td className="md:max-w-sm ">
                            <div className="w-full lg:w-1/2 py-5">
                                <RentContent
                                    title=""
                                    content="Artwork and valuable property"
                                    bold
                                    
                                />
                            </div>
                        </td>

                        <td >
                            <div className="flex justify-center">
                                <TiTick className="text-green-600" size={30}/>
                            </div>
                        </td>
                        <td>
                        <div className="flex justify-center">
                                <ImCross className="text-rose-700" size={20}/>
                            </div>
                        </td>
                    </tr>
                   {/* ITEM 5 */}
                   <tr className="md:border-b-[1px]">
                        <td className="md:max-w-sm ">
                            <div className="w-full lg:w-1/2 py-5">
                                <RentContent
                                    title=""
                                    content="Cars and boats"
                                    bold
                                    
                                />
                            </div>
                        </td>

                        <td >
                            <div className="flex justify-center">
                                <TiTick className="text-green-600" size={30}/>
                            </div>
                        </td>
                        <td>
                        <div className="flex justify-center">
                                <ImCross className="text-rose-700" size={20}/>
                            </div>
                        </td>
                    </tr>
                    {/*  item 6 */}
                    <tr className="md:border-b-[1px]">
                        <td className="md:max-w-sm ">
                            <div className="w-full lg:w-1/2 py-5">
                                <RentContent
                                    title=""
                                    content="Damage caused by pets"
                                    bold
                                    
                                />
                            </div>
                        </td>

                        <td >
                            <div className="flex justify-center">
                                <TiTick className="text-green-600" size={30}/>
                            </div>
                        </td>
                        <td>
                        <div className="flex justify-center">
                                <ImCross className="text-rose-700" size={20}/>
                            </div>
                        </td>
                    </tr>
                    {/* item 7  */}
                    <tr className="md:border-b-[1px]">
                        <td className="md:max-w-sm ">
                            <div className="w-full lg:w-1/2 py-5">
                                <RentContent
                                    title=""
                                    content="
                                    Income loss"
                                    bold
                                    
                                />
                            </div>
                        </td>

                        <td >
                            <div className="flex justify-center">
                                <TiTick className="text-green-600" size={30}/>
                            </div>
                        </td>
                        <td>
                        <div className="flex justify-center">
                                <ImCross className="text-rose-700" size={20}/>
                            </div>
                        </td>
                    </tr>
                    {/* item 8 */}
                    <tr className="md:border-b-[1px]">
                        <td className="md:max-w-sm ">
                            <div className="w-full lg:w-1/2 py-5">
                                <RentContent
                                    title=""
                                    content="
                                    Intensive cleaning"
                                    bold
                                    
                                />
                            </div>
                        </td>

                        <td >
                            <div className="flex justify-center">
                                <TiTick className="text-green-600" size={30}/>
                            </div>
                        </td>
                        <td>
                        <div className="flex justify-center">
                                <ImCross className="text-rose-700" size={20}/>
                            </div>
                        </td>
                    </tr>
                    {/* item 9 */}
                    <tr className="md:border-b-[1px]">
                        <td className="md:max-w-sm ">
                            <div className="w-full lg:w-1/2 py-5">
                            <RentContent
    title="24/7 safety hotline"
    content="If you ever feel unsafe, our app allows you to contact our specially trained safety support staff day or night—with just a tap."
    bold
    hidden
/>

                            </div>
                        </td>

                        <td >
                            <div className="flex justify-center">
                                <TiTick className="text-green-600" size={30}/>
                            </div>
                        </td>
                        <td>
                        <div className="flex justify-center">
                                <ImCross className="text-rose-700" size={20}/>
                            </div>
                        </td>
                    </tr>
                    <tr className=" md:hidden border-b-[1px]">
                        <td colSpan={3} className="pb-5">
                        <RentContent
    padding
    content="If you ever feel unsafe, our app allows you to contact our specially trained safety support staff day or night—with just a tap."
    bold
/>

                        </td>
                    </tr>
                    </tbody>
                </table>
                <RentContent 
    title=""
    content="Comparison based on publicly available information and benefits provided for free by competing entities as of 22/10. Learn more details and exceptions here."
/>

                <div className="w-[70%] sm:w-[40%] md:w-1/3 mt-4">
                <Button 
                    label="
                    Find out more"
                    outline
                    onClick={()=>{}}
                    
                />
                </div>
            </div>
        </div>
    )
}

export default RentHeader2