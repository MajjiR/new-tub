"use client";

import { SidebarGroup, 
    SidebarGroupContent, 
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem } from "@/components/ui/sidebar";

import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import Link from "next/link";
import {SignedIn, useAuth, useClerk} from "@clerk/nextjs";

const items = [
    {
        title: "Home",
        url: "/home",
        icon: HomeIcon,
    },
    {
        title: "Subscriptions",
        url: "/feed/subscriptions",
        icon: PlaySquareIcon,
        auth: true,
    },
    {
        title: "Trending",
        url: "/feed/trending",
        icon: FlameIcon,
    },
   
];


export const MainSection = () => {

const clerk = useClerk();
const {isSignedIn} = useAuth();
 return (
<SidebarGroup>
    <SidebarGroupContent>
        <SidebarMenu>

            {items.map((item) => {

                return(<SidebarMenuItem key={item.title}>

                    <SidebarMenuButton
                    tooltip={item.title}
                    asChild
                    isActive={false} // chagne to look at curr path name
                    onClick={(e) => {
                        if ( !isSignedIn && item.auth) {

                            e.preventDefault();
                            return clerk.openSignIn();

                        }
                    }} // make button click
                    
                    
                    
                    >
                        
                     <Link href={item.url}>

                     <item.icon/>
                     <span className="text-sm"> {item.title} </span>
                     
                     </Link>

                    </SidebarMenuButton>

                    

                </SidebarMenuItem>)



            })}


        </SidebarMenu>
    </SidebarGroupContent>

</SidebarGroup>



     
 )

}