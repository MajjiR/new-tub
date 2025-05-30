import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeSidebar } from "../components/home-sidebar";
import { HomeNavbar } from "@/modules/home/ui/components/home-navbar";
interface HomeLayoutProps {

    children: React.ReactNode;
};


const HomeLayout = ({children}: HomeLayoutProps) => {

    return (
        <div>
        <SidebarProvider>

        <div className="w-full">

            <HomeNavbar/>

        <div className="flex min-h-screen pt-[4rem] ">
        <HomeSidebar/>
        <main className="flex-1 overflow-y-auto">
        {children}

        </main>
       
        </div>


        </div>

       


        </SidebarProvider>
          
       

        </div>
        
    );

};

export default HomeLayout;