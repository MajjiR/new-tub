"use client";

import { SidebarGroup, 
    SidebarGroupContent, 
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem, SidebarGroupLabel } from "@/components/ui/sidebar";

    import { FlameIcon, HistoryIcon, HomeIcon, ListVideoIcon, PlaySquareIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";

const items = [
    {
        title: "History",
        url: "/playlists/history",
        icon: HistoryIcon,
        auth: true,
    },
    {
        title: "Liked Videos",
        url: "/playlitsts/likes",
        icon: ThumbsUpIcon,
        auth: true,
    },
    {
        title: "All Playlists",
        url: "/playlists",
        icon: ListVideoIcon,
        auth: true,
    },
   
];


export const PersonalSection = () => {
 return (
<SidebarGroup>
    <SidebarGroupLabel>
        You
    </SidebarGroupLabel>
    <SidebarGroupContent>
        <SidebarMenu>

            {items.map((item) => {

                return(<SidebarMenuItem key={item.title}>

                    <SidebarMenuButton
                    tooltip={item.title}
                    asChild
                    isActive={false} // chagne to look at curr path name
                    onClick={() => {}} // make button click
                    
                    
                    
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