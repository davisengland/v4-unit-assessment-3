import React from 'react'

export default function Shelf(props) {
    let {shelf} = props
    
    let mappedTitles = shelf.map(elem => {
        return(
            <div>
                <p>{elem}</p>
            </div>
        )
    })

    return(
        <section className='shelf'>
            <h2>Your Shelf</h2>
            <button onClick={() => props.clearShelf()}>clear-shelf</button>
            {mappedTitles}
        </section>
    )
}