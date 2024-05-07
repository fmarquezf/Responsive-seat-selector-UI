import Section from "./Section";
import RedSection from "./RedSection";
import data from "../data.json"
import { $Active } from "../stores/seatStore"
import { useStore } from "@nanostores/react"

export default function SeatDistribution () {

let seatsA1 = []
let seatsA2 = []
let seatsA3 = []
let seatsB1 = []
let seatsB2 = []
let seatsB3 = []
let seatsC1 = []
let seatsC2 = []
let seatsC3 = []


const rows = data.rows
const seats = data.seats


seats.map ((seat) => {
    if (seat.section == "A") {
        switch (seat.rowGroup) {
            case 1:
                seatsA1.push(seat)
                break;
            case 2:
                seatsA2.push(seat)
                break;
            case 3:
                seatsA3.push(seat)
                break;
        }
    }
    else if (seat.section == "B") {
        switch (seat.rowGroup) {
            case 1:
                seatsB1.push(seat)
                break;
            case 2:
                seatsB2.push(seat)
                break;
            case 3:
                seatsB3.push(seat)
                break;
        }
    }
    else if (seat.section == "C") {
        switch (seat.rowGroup) {
            case 1:
                seatsC1.push(seat)
                break;
            case 2:
                seatsC2.push(seat)
                break;
            case 3:
                seatsC3.push(seat)
                break;
        }
    }
})

const Active = useStore($Active)

let zoom = Active ? 'scale-100' : 'scale-50'

    return (
        <div className={`flex flex-row gap-5 justify-center ${zoom} my-5 sm:scale-90 md:scale-100`}>
                <RedSection NameSection={'A'}>
                    <Section seats={seatsA1} rows={rows} />
                    <Section seats={seatsA2} rows={rows} />
                    <Section seats={seatsA3} rows={rows} />
                </RedSection>
                <RedSection NameSection={'B'}>
                    <Section seats={seatsB1} rows={rows} />
                    <Section seats={seatsB2} rows={rows} />
                    <Section seats={seatsB3} rows={rows} />
                </RedSection>
                <RedSection NameSection={'C'}>
                    <Section seats={seatsC1} rows={rows} />
                    <Section seats={seatsC2} rows={rows} />
                    <Section seats={seatsC3} rows={rows} />
                </RedSection>
        </div>
    )
}