import { Button } from "@/components/ui/button"
import { User, UserCircleIcon } from "lucide-react"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

export const AuthButton = () => {


    return (

        <>

        <SignedIn>
            <UserButton/>
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