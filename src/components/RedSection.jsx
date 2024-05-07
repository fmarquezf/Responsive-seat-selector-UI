import { $Active, $selectedSection } from "../stores/seatStore"
import { useStore } from "@nanostores/react"
import { motion } from "framer-motion";
import {useEffect, useState } from "react";

export default function RedSection({NameSection, children}) {

    const [selected, setSelected] = useState(false)
    const Active = useStore($Active)
    const selectedSection = useStore($selectedSection)

    useEffect(() => {
        selectedSection != NameSection && setSelected(false);
    }, [selectedSection])

    const handleClick = () => {
        $Active.set(!Active);
        setSelected(true);
        $selectedSection.set(NameSection)
    }

    let display = !Active || selected ? '' : 'hidden'
    
    return (
        <motion.div layout className= {`relative`}>
            <div  onClick={handleClick} className={`bg-red-600 h-full absolute w-full z-10 ${Active ? ' invisible opacity-0 ' : 'opacity-70'} sm:invisible cursor-pointer  select-none transition-opacity`}>
                <h1 className={`text-white text-3xl font-bold text-center pt-10 ${Active ? 'hidden' : ''}`}>{NameSection}</h1>
            </div>
            <div className={`flex flex-col gap-5 ${display}`}>
                    {children}
            </div> 
        </motion.div>
    )
}