import React from 'react'
import './sidebaroptions.css'

function Sidebaroptions({ Icon, Title, number, selected }) {
    return (
        <div className={`sidebaroptions ${selected && "sidebaroption__active"}`}>
            <Icon />
            <h3>{Title}</h3>
            <p>{number}</p>

        </div>
    )
}

export default Sidebaroptions
