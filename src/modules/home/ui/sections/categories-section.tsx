"use client";
import { FilterCarousel } from "@/components/filter-carousel";
import { trpc } from "@/trpc/client";
import { useRouter } from "next/navigation";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface CategoriesSectionProps {
    categoryId: string;
}

export const CategoriesSection = ({categoryId}: CategoriesSectionProps) => {
    return (
        <Suspense fallback={<CategoriesSkeleton/>}>
            <ErrorBoundary fallback={<p>Error</p>}>
                <CategoriesSectionSuspense categoryId={categoryId}/>

            </ErrorBoundary>
        </Suspense>
    )
}

const CategoriesSkeleton = () => {
    return (
        <FilterCarousel isLoading data={[]} onSelect={() => {}} value=""/>
    )
}

 const CategoriesSectionSuspense = ({categoryId}: CategoriesSectionProps) => {

    const [categories] = trpc.categories.getMany.useSuspenseQuery();
    const router = useRouter();
    const data = categories.map((category) => ({
        value: category.id,
        label: category.name,
    }));

    //console.log(data)

    const onSelect = (value: string | null) => {
        const url = new URL(window.location.href);

        if(value) {
            url.searchParams.set("category", value);

        }else {
            url.searchParams.delete("category");

        }

        router.push(url.toString());
            

        

        






    }


        

   return (

    <FilterCarousel onSelect={onSelect} value={categoryId} data={data}/>

   )

}