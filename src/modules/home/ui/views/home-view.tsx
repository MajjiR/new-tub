import { Suspense } from "react";
import { CategoriesSection } from "../sections/categories-section";

interface HomeViewProps {
   categoryId: string;
};



export const HomeView = ({categoryId}: HomeViewProps) => {

   

   return (

    <div className="max-w-[2400px] mx-auto flex flex-col gap-y-6  px-4 pt-2.5 mb-10">


    <CategoriesSection categoryId={categoryId} />

  
        

    </div>

   );







}