import { Button } from "@/components/ui/button"
import { UserCircleIcon } from "lucide-react"

export const AuthButton = () => {


    return (

        <Button 
        variant="outline"
        className="px-4 py-5 shadow-none font-medium text-blue-400 border-blue-400 rounded-full hover:text-blue-600"
        >
            <UserCircleIcon/>
            Sign in
        </Button>
    )



} 