import { Children } from "react";

interface LayoutProps {
    children: React.ReactNode;
};



const Layout = ({children}: LayoutProps) => {
    return (

        <div className="flex items-center justify-center min-h-screen w-screen">
            {children}
        </div>

    )
}

export default Layout;