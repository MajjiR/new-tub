"use client";

import { Button } from "@/components/ui/button"
import { ClapperboardIcon, User, UserCircleIcon } from "lucide-react"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"

export const AuthButton = () => {


    return (

        <>

        <SignedIn>
            {/* <Button asChild >
                <Link href="/studio">
                <ClapperboardIcon/>
                    Studio
                </Link>
            </Button> */}
            
            <UserButton>
                <UserButton.MenuItems>
                    <UserButton.Link href="/studio" label="Studio" labelIcon={<ClapperboardIcon className="size-4" />}/>
                    <UserButton.Action label="manageAccount"/>
                   
                        
                   
                </UserButton.MenuItems>

            </UserButton>
            {/* add menu items studio*/}
        </SignedIn>

        <SignedOut>


        <SignInButton>

        <Button 
        variant="outline"
        className="px-4 py-5 shadow-none font-medium text-blue-400 border-blue-400 rounded-full hover:text-blue-600"
        >
            <UserCircleIcon/>
            Sign in
        </Button>

        </SignInButton>



        </SignedOut>
        
        
        </>

        

        
    )



} 