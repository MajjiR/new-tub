"use client";

import { DEFAULT_LIMIT } from "@/constants";    

import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { InfiniteScroll } from "@/components/infinite-scroll";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { videos } from "@/db/schema";
import Link from "next/link";
import { TableCell } from "@/components/ui/table";

export const VideosSection = () => {

    return (
        
        <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary fallback={<p>Error</p>}>
        <VideosSectionSuspense/>
        </ErrorBoundary>
        </Suspense>
        
    )
    
}


export const VideosSectionSuspense = () => {
    const [videos, query] = trpc.studio.getMany.useSuspenseInfiniteQuery(   
        {
            limit:DEFAULT_LIMIT,
        }, {
            getNextPageParam: (lastPage) => lastPage.nextCursor,
                
            
        }
    );
    return (
        <div>
            <div className="border-y">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="pl-6 w-[510px]"> Video</TableHead>
                            <TableHead className=""> Visibility </TableHead>
                            <TableHead className=""> Status </TableHead>
                            <TableHead className=""> Date </TableHead>
                            <TableHead className="text-right"> Views </TableHead>
                            <TableHead className="text-right"> Comments </TableHead>
                            <TableHead className="text-right pr-6"> Likes </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {videos.pages.flatMap((page) => page.items).map((video) => (
                            <Link href={`/studio/${video.id}`} key={video.id} legacyBehavior>
                                <TableRow className="cursor-pointer">
                                    <TableCell className="pl-6">
                                        {video.title}
                                    </TableCell>
                                    <TableCell>
                                        Visibility
                                    </TableCell>
                                    <TableCell>
                                        Status
                                    </TableCell>
                                    <TableCell>
                                        Date
                                    </TableCell>
                                    <TableCell className="text-right ">
                                        Views
                                    </TableCell>
                                    <TableCell className="text-right ">
                                        Comments
                                    </TableCell>
                                    <TableCell className="text-right pr-6">
                                        Likes
                                    </TableCell>
                                    </TableRow>
                                    
                            </Link>
                            ))}
                    </TableBody>
                </Table>

            </div>
            {/* {JSON.stringify(videos)} */}
            <InfiniteScroll
            isManual
            hasNextPage={query.hasNextPage}
            isFetchingNextPage={query.isFetchingNextPage}
            fetchNextPage={query.fetchNextPage}
            />
        </div>
    )
}
    