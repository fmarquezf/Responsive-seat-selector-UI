import { useState } from "react";
import { useStore } from "@nanostores/react";
import { $seatStore, $PaymentCompleted } from "../stores/seatStore";

export function Seat ({id, row, col, section, initialIsSelected}) {
    const [status, setStatus] = useState(initialIsSelected)

    let cursor = 'cursor-pointer'
    
    let color = status ? '#4ade80' : '#3b82f6'

    const PaymentCompleted = useStore($PaymentCompleted)

    if (PaymentCompleted && status) {
        setStatus(null)
    }

    if (status === null) {
        color = '#9ca3af'
        cursor = ''
    }

    


    const handleClick = () => {
        if (status === null) return
        setStatus(!status)
        if (status === true) {
            $seatStore.set($seatStore.get() - 1)
        } else {
            $seatStore.set($seatStore.get() + 1)
        }
    }

    

    
    return (
        <>
            <div onClick={handleClick} id={id} className={`flex justify-center items-center relative ${cursor}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-armchair" width="26" height="26" viewBox="0 0 21 21" strokeWidth="1" stroke="currentColor" fill={color} strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" /><path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5 M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 0 1 2 -2" /></svg>
                <span className=" text-sm text-white absolute top-[1px] translate-x-[1.5px] font-medium text-center select-none [text-shadow:0.1px_0.1px_3px_rgb(0_0_0)]">{col}</span>
            </div>
        </>
    
    )
}
