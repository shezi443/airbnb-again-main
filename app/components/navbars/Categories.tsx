"use client"
import { TbAdjustmentsHorizontal, TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from './CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useFilter from '@/app/hooks/useFilter';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};


export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'Where you stay is by the sea!',
  },
  {
    label: 'Windmill',
    icon: GiWindmill,
    description: 'Field of windmills!',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'Modern, vibrant urban area with many amenities!'
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'Peaceful and tranquil countryside!'
  },
  {
    label: 'Pool',
    icon: TbPool,
    description: 'Residence with a private swimming pool!'
  },
  {
    label: 'Island',
    icon: GiIsland,
    description: 'Island area!'
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'Near a natural lake, cool and fresh!'
  },
  {
    label: 'Snow',
    icon: FaSkiing,
    description: 'Snow-covered area, experience and explore!'
  },
  {
    label: 'Castle',
    icon: GiCastle,
    description: 'Castle architecture!'
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'Reconstructed cave!'
  },
  {
    label: 'Campsite',
    icon: GiForestCamp,
    description: 'Campsite area!'
  },
  {
    label: 'Extreme',
    icon: BsSnow,
    description: 'Recreate extreme conditions!'
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'Reconstructed desert area'
  },
  {
    label: 'Barn',
    icon: GiBarn,
    description: 'Tent house on the hill!'
  },
  {
    label: 'Luxury House',
    icon: IoDiamond,
    description: 'The most luxurious architecture on Airbnb!'
  }
]

const Categories =() =>{
    const fillterModal = useFilter();
    const params = useSearchParams();// take param from url
    const pathname = usePathname(); // take path name exist in url

    const categoryLink = params?.get('category');
    // console.log(pathname)

    const ismainPage = pathname === '/';
    if(!ismainPage){
        return null;
    }
    
    return (
        <div className=' flex items-center justify-between px-4'>
          <div
              className='
              w-full
                md:w-[90%]
              '
          >
            <Carousel responsive={responsive} arrows={true} renderArrowsWhenDisabled={true}>
              {categories.map((category)=>{
                    return <CategoryBox
                        key={category.label}
                        label={category.label}
                        icon ={category.icon}
                        selected={categoryLink ===category.label ? true : false}
                        description={category.description}
                    />
                })}
            </Carousel>
              
          </div>
          <div onClick={()=>fillterModal.onOpen()} className=' hidden md:block border-[2px] px-6 py-2 rounded-md cursor-pointer' >
            <TbAdjustmentsHorizontal />
          </div>
        </div>
    )
}

export default Categories