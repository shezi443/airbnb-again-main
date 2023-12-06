"use client"

import Image from "next/image"
import Container from "../components/Container"
import Header from "../components/Header"
import { useParams, useSearchParams } from "next/navigation"
import {useState} from 'react';
import InformationMenuItem from "../components/informations/InformationMenuItem"
import ContainInformation from "../components/informations/ContainInformation"
import InformationAccount from "../components/informations/InformationAccount"
import InformationPerson from "../components/informations/InformationPerson"
import { SafeUser } from "../types"
import { Information } from "@prisma/client"
import InformationUpdate from "../components/informations/InformationUpdate"
import Footer from "../components/Footer"

const menu =[
    {
      label: "personal information"
    },
    {
      label: "create new"
    },
    {
      label: "update"
    }
  ]

interface ClientInformationProps {
    currentUser:SafeUser | null;
    information: Information | null 
}

const ClientInformation:React.FC<ClientInformationProps> =({
    currentUser,
    information 
})=>{
    // const [category,setCategory] = useState('tài khoản')
    const params = useSearchParams();
    let category = params?.get('category') 

    let bodyContent = (
        <div>
            body content
        </div>
    )
    if(category === 'personal information'){
        bodyContent = (
            <InformationPerson 
                information ={information}
            />
        )
    }

    if(category === 'create new'){
        bodyContent = (
            <InformationAccount 
                information = {information}
            />
        )
    }
    if(category === 'update'){
        bodyContent = (
            <InformationUpdate
                information = {information}
            />
        )
    }
    return (
        <div>
            <div className="w-full h-auto relative">
                <div className="w-full h-[300px] absolute top-0 left-0 bg-neutral-950/60 flex items-center justify-center">
                    <Header
                       title="Account Information"
                       subtitle="Aggregate all information about your account and rentals."
                       
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
            <Container>
                <div className="flex items-center gap-2 md:gap-4 w-full border-b-[1px] my-4 ">
                   {menu.map((item)=>{
                     return (
                        <InformationMenuItem
                            key ={item.label}
                            label = {item.label}
                            selected = {category === item.label}
                        />
                     )
                   })}
                </div>
                <ContainInformation
                    body={bodyContent}
                />
            </Container>
            <Footer/>
        </div>
    )
}

export default ClientInformation