"use client";

import {PlusIcon, Loader2Icon} from "lucide-react";
import {Button} from "@/components/ui/button";
import { trpc } from "@/trpc/client";
import { toast } from "sonner";
import { ResponsiveModal } from "@/components/responsive-modal";
import { useState } from "react";
import {StudioUploader} from "./studio-uploader";

  





export const StudioUploadModal = () => {

    const [open, setOpen] = useState(false);
    

    const utils = trpc.useUtils();
   

    const create = trpc.videos.create.useMutation({
        //this will revalidate the components using this api, it's like useeffect
        onSuccess: () => {
           
            toast.success("Video created successfully");
            utils.studio.getMany.invalidate();
        },

        onError: (error) => {
            toast.error("Failed to create video " + error.message);
        }
    });

    

    return (

        <>
        <ResponsiveModal open={open} onOpenChange={() => setOpen(false)} title="Upload Video">
            <StudioUploader/>
        </ResponsiveModal>
    <Button variant="secondary" onClick={() => {create.mutate (); setOpen(true);}} disabled={create.isPending}>
    {create.isPending ? <Loader2Icon className="mr-2 h-4 w-4 animate-spin" /> : <PlusIcon/>}
    Create
    </Button>
    </>
    );
};
        