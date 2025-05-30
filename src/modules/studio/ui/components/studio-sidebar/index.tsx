"use client";
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarGroup } from "@/components/ui/sidebar"

import { PersonalSection } from "./personal-section";
import { LogOutIcon, VideoIcon } from "lucide-react";
import Link from "next/link";
import { useImperativeHandle } from "react";
import { usePathname } from "next/navigation";
import { StudioSidebarHeader } from "./studio-sidebar-header";


export const StudioSidebar = () => {

    const pathname = usePathname();


    return (

    

    <Sidebar className="pt-16 z-40 " collapsible="icon">

    <SidebarContent className="bg-background">
        
        
        
        
    <SidebarGroup>
    <SidebarMenu>   

        <StudioSidebarHeader/>
       
            <SidebarMenuItem>

        <SidebarMenuButton isActive={pathname === "/studio"} tooltip="Content" asChild>
            <Link href="/studio"
            >

            <VideoIcon className="w-5 h-5"/>
            <span className="text-sm">Content</span>

        </Link>
        </SidebarMenuButton>

        </SidebarMenuItem>











        <SidebarMenuItem>

            <SidebarMenuButton  tooltip="Exit Studio" asChild>
                 <Link href="/">

                <LogOutIcon/>
                <span className="text-sm">Exit Studio</span>

            </Link>
            </SidebarMenuButton>
            
        </SidebarMenuItem>

        </SidebarMenu>   
        </SidebarGroup>


            


    </SidebarContent>

 


    </Sidebar>

);
};