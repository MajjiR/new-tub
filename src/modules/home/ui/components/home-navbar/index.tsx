
import { SidebarTrigger } from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"
import { AuthButton } from "@/modules/auth/ui/components/auth-button"
import { SearchInput } from "../../layouts/search-input"
import React from "react"


export const HomeNavbar = () => {


   return (

    <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50 ">
        <div className="flex items-center  gap-5 w-full ">

            {/* Menu and Logo */}


        <div className="flex items-center flex-shrink-0"> 
        <SidebarTrigger/>

        <Link href="/">
        <div className=" font-bold flex items-center gap-1">
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
            <p className="text-xl font-semibold tracking-tight"> Home</p>
        </div>
        
        </Link>

        </div>

        {/* Search bar */}
        
        <div className= "flex-1 flex justify-center max-w-[720px] mx-auto">

            <SearchInput/>


        </div>

        

        <div className="flex flex-shrink-0 items-center">
            <AuthButton/>
        </div>







        </div>
    </nav>
   )




}