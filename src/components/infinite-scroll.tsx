import { userIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

interface InfiniteScrollProps {
    isManual?: boolean;
    hasNextPage: boolean;
    isFetchingNextPage: boolean;
    fetchNextPage: () => void;
}


export const InfiniteScroll = ({isManual, hasNextPage, isFetchingNextPage, fetchNextPage    }: InfiniteScrollProps) => {

    const {targetRef, isIntersecting} = userIntersectionObserver({
        threshold: 0.5,
        rootMargin: "100px"
    });

    useEffect(() => {
        if (isIntersecting && !isManual && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [isIntersecting, isManual, hasNextPage, isFetchingNextPage, fetchNextPage]);

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <div ref={targetRef} className="h-1">
            {hasNextPage? (
                <Button
                variant="secondary"
                disabled={!hasNextPage || isFetchingNextPage}
                onClick={() => fetchNextPage()}>
                    {isFetchingNextPage ? "Loading..." : "Load More"}
                </Button>
            ) : (
                <p className="text-xs text-muted-foreground"> You Have reached the end</p>
            )}
        </div>
        </div>
    );    
}