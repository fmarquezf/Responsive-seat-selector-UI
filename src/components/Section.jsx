import Row from "./Row";
import { $Active, $selectedSection } from "../stores/seatStore";
import { useStore } from "@nanostores/react";

export default function Section ({seats, rows}) { 
    let rowarray = []
    let seatarray = []
    let i = rows.indexOf(seats[0].row)

    const Active = useStore($Active)
    
    const selectedSection = useStore($selectedSection)

    const section = Active ? selectedSection : 'A'

    seats.map((seat) => {
        if (seat.row == rows[i]) {
            seatarray.push(seat)
        }
        else {
            rowarray.push(seatarray)
            seatarray = []
            seatarray.push(seat)
            i = i+1
        }
    })
    rowarray.push(seatarray)

    return(
        <ul className="flex flex-col">
    {
    rowarray.map( (row) => (
        <li key={row[0].row} className=" flex flex-row gap-5 justify-between">{ row[0].section == section && <span className=" text-base text-white absolute -left-5 select-none">{row[0].row}</span>}<Row seats={row} /></li>
    ))}
</ul>
    )
}

    



