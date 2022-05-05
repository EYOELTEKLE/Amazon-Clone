import Image from 'next/image';
import {useState} from 'react';
import {StarIcon} from "@heroicons/react/solid"
import Currency from 'react-currency-formatter'
const Max = 5
const Min = 1
function Products({id,title,price,description,category,image}) {
    const [rating] = useState(Math.floor(Math.random() * (Max - Min)) + Min);
    const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
        <p className=' absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
        <Image src={image} height={200} width={200} objectFit="contain"></Image>
        <h4 className='my-3 '>{title}</h4>
        <div className='flex'>
        {Array(rating).fill().map((_,i) => (<StarIcon className='h-5 text-yellow-500'></StarIcon>))}
        
        </div>
        <p className='text-xs mt-2 mb-2 line-clamp-2'>{description}</p>
        <div>
            <Currency quantity={price} currency="GBP"></Currency>
        </div>
        {
            hasPrime && (<div className='flex items-center space-x-2 -mt-5'>
                <img className='w-12 ' src='https://links.papareact.com/fdw' alt=''></img>
                <p className='text-xs text-gray-400'>Next Day-day Delivery</p>
            </div>)
            
        }
        <button className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Products