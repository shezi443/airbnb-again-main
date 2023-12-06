"use client"

import Header from "../Header"

interface ListingProps {
    guestCount: number;
    utilities: string[];
}


const ListingRule:React.FC<ListingProps> = ({
    guestCount,
    utilities
}) =>{
    // console.log(utilities)
    return (
        <div className="px-2">
            <div
                className="
                    mb-4
                "
            >
                <Header 
                    title="Things to know"
                    subtitle=""
                    
                />
            </div>
           <div>
           <div 
            className="
                grid
                grid-cols-1
                md:grid-cols-3
                gap-2
                md:gap-4
                text-sm
                font-light
            "
        >
            <div className="text-sm font-light flex flex-col gap-2 mt-2 mb-2">
            <div className="font-bold">House rules</div>
<div>Check-in after 4:00 PM.</div>
<div>Check-out before 11:00 AM.</div>
<div>Maximum {guestCount} guests.</div>
                </div>
                <div className="text-sm font-light flex flex-col gap-2 mt-2 mb-2">
                <div className="font-bold">Safety equipment</div>
<div>Pool or bathtub without gate or lock</div>
{utilities.find((utility) => utility === 'Smoke detector') ? <div>Smoke detector</div> : <div className="line-through">Smoke detector</div>}
{utilities.find((utility) => utility === 'First aid kit') ? <div>First aid kit</div> : <div className="line-through">First aid kit</div>}
{utilities.find((utility) => utility === 'Fire extinguisher') ? <div>Fire extinguisher</div> : <div className="line-through">Fire extinguisher</div>}
{utilities.find((utility) => utility === 'CO detector') ? <div>CO detector</div> : <div className="line-through">CO detector</div>}

                </div>
                <div className="text-sm font-light flex flex-col gap-2 mt-2 mb-2">
                <div className="font-bold">Cancellation policy</div>
<div>Free cancellation within 48 hours</div>
<div>Please read the host/organizer's full cancellation policy, which applies even if you cancel due to illness or disruptions caused by COVID-19.</div>

                </div>
            </div>
        </div>
</div>
)}

export default ListingRule