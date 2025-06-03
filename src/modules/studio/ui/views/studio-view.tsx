import { VideosSection } from "../sections/videos-section"
import { trpc } from "@/trpc/server";

export const StudioView = () => {


    return (
        <div className="flex flex-col gap-y-6 pt-2.5">

        <div className="px-4">
            <h1 className="text-2xl font-bold"> Channel Content</h1>
            <p className=" text-xs text-muted-foreground">Upload and manage your videos</p>
        </div>
           
       
       
            <VideosSection/>
       


        </div>
    )
}