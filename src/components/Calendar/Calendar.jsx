import { useState } from 'react'
import Calendar from 'react-calendar'
import { DefinedRange } from 'react-date-range'
import { DateRange } from 'react-date-range'
import { addDays } from 'date-fns'

const BookingCalendar = () => {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 0),
            key: 'selection'
        }
    ])

    return (
        <div className="Sample">
            <header>
                <h1>Selecciona la fecha de reserva</h1>
            </header>
            <div className="Sample__container">
                <main className="Sample__container__content">
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                        showPreview={true}
                        rangeColors={'red'}
                        date={'red'}
                        
                    />
                    {/* <Calendar onChange={onChange} showWeekNumbers value={value} /> */}
                
                </main>
            </div>
        </div>
    )
}

export default BookingCalendar