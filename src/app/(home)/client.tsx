"use client";

import {trpc} from "@/trpc/client";

export  const PageClient = () => { 

    const [data] = trpc.hello.useSuspenseQuery({text: "Rohan"});
  

    return (    
        <div>
            Page Client: {data.greeting}
            
        </div>


    ); 







};

    
