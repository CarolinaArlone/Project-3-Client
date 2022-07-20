import { useState } from 'react'
import Calendar from 'react-calendar'
import { DefinedRange } from 'react-date-range'

const BookingCalendar = () => {

    const [value, onChange] = useState(new Date());

    return (
        <div className="Sample">
            <header>
                <h1>Selecciona la fecha de reserva</h1>
            </header>
            <div className="Sample__container">
                <main className="Sample__container__content">
                    <Calendar onChange={onChange} showWeekNumbers value={value} />
                </main>
            </div>
        </div>
    )
}

export default BookingCalendar