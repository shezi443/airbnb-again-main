"use client"

import RentPopUp from "./RentPopUp"

const RentHeader3 =() =>{
    return (
        <div className="py-6">
            <span className="text-xl  font-semibold">Answering your questions</span>
            <RentPopUp
                label="Is my place suitable for rent on Airbnb?"
                content="The guests on Airbnb are interested in all types of accommodations. We have listings for small houses, cabins, treehouses, and many other types of accommodations. Even an empty room can become a wonderful place to stay."
            />
             <RentPopUp
                label="
                Do I have to entertain guests the entire time?"
                content="Absolutely not – you have complete control over your calendar. You can rent it out once a year, a few nights a month, or more frequently."
            />
            <RentPopUp
                label="
                How much should I interact with guests?"
                content="This is for you to decide. While some Hosts only want to text guests at important times – like sending a brief note when a guest checks in, others prefer to meet guests in person. You'll find a style that suits you and your guests."
            />
            <RentPopUp
                label="Does Airbnb have any tips to help me be a great Airbnb Host?"
                content="Knowing basic information will help you a lot. Keep your property clean, respond promptly to guests, and provide essential amenities, like freshly laundered towels. Some Hosts like to add a personal touch, such as arranging fresh flowers or sharing a list of local destinations worth exploring – but this is not a requirement."
            />
            <RentPopUp
                label="
                What fees does Airbnb charge?"
                content="Airbnb typically charges a flat service fee of 3% of the booking total when you get paid. We also collect fees from guests when they make reservations. In many areas, Airbnb also automatically collects and remits sales and tourism taxes on your behalf."
            />
        </div>
    )
}

export default RentHeader3