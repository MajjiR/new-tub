import {useIsMobile} from "@/hooks/use-mobile";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle} from "@/components/ui/drawer";



interface ResponsiveModalProps {
    children: React.ReactNode;
    open: boolean;
    title: string;
    onOpenChange: (open: boolean) => void;
}

export const ResponsiveModal = ({children, open, title, onOpenChange}: ResponsiveModalProps) => {
    const isMobile = useIsMobile();
    return (
        <>
        {isMobile ? (
            <Drawer open={open} onOpenChange={onOpenChange}>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>{title}</DrawerTitle>
                    </DrawerHeader>
                    {children}
                </DrawerContent>
            </Drawer>
        ) : (
            <Dialog open={open} onOpenChange={onOpenChange}>
              
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                    </DialogHeader>
                    {children}
                </DialogContent>
            </Dialog>
        )}
        </>
    );
};

    