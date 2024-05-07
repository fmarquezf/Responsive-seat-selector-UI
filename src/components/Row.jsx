import { Seat } from './Seat'
export default function Row ({seats}) { 
    
    return(
        <ul className="flex flex-row">
    {seats.map( (seat) => (
        <li key={seat.id}> <Seat id={seat.id} row={seat.row} col={seat.col} section={seat.section} initialIsSelected={seat.isSelected}></Seat> </li>
        ))}
</ul>
    )
 }


