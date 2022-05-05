import Image from "next/image"
import {MenuIcon, SearchIcon,ShoppingCartIcon} from '@heroicons/react/outline'
function Header() {
  return (
    <header>
        {/*Top Nav */}
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                width={150} height = {40} objectFit="contain" className="cursor-pointer"></Image>
            </div>
            {/*Search */}
            <div className="hidden sm:flex items-center h-10 rounded-md bg-yellow-400 flex-grow cursor-pointer hover:bg-yellow-500">
            <input type="text"className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" />
            <SearchIcon className="h-12 p-4"></SearchIcon>
            </div>
            {/* Right Navigation */}
            <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                <div className="link">
                    <p>Hello Eyoel</p>
                    <p className="font-extrabold md:sm">Account & Lists</p>
                </div>
                <div className="link">
                    <p>Returns</p>
                    <p className="font-extrabold md:sm">& Orders</p>
                </div>
                <div className="relative link flex items-center">
                    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">4</span>
                    <ShoppingCartIcon className="h-10"></ShoppingCartIcon>
                    <p className="hidden md:inline font-extrabold md:sm mt-2">Basket</p>
                </div>
            </div>
        </div>
    {/* Bottom Nav*/}
        <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="flex link items-center">
            <MenuIcon className="h-6 mr-1"></MenuIcon>
            All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food and Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>

        </div>
    </header>
  )
}

export default Header