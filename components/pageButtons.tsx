"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

type buttonProps = {
    previousPage: number,
    nextPage: number,
    nextPageContent: number
}

export default function PageButtons(props: buttonProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = searchParams.get('page') || "1";
    function handleClick(newPage: string) {
        const params = new URLSearchParams(searchParams);
        params.set('page', newPage);
        router.replace(`${pathname}?${params.toString()}`);
    }
    return (
        <div className="flex w-full justify-center my-5">
            {currentPage !== "1" ? <button className="cursor-pointer p-4 w-32 bg-[#54F4D0] me-2 rounded-l-4xl text-[#000061]" onClick={() => handleClick((parseInt(currentPage) - 1).toString())}>
                Previous
            </button> : <div></div>}

            {props.nextPageContent !== 0 ? <button className="cursor-pointer p-4 w-32 bg-[#54F4D0] rounded-r-4xl text-[#000061]" onClick={() => handleClick((parseInt(currentPage) + 1).toString())}>
                Next
            </button> : <div></div>}

        </div>
    )
}