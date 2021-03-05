import React from 'react'

export default function Shelf(props) {
    let {shelf} = props
    
    let mappedTitles = shelf.map((elem, i, arr) => {
        return(
            <div>
                <p>{elem}</p>
            </div>
        )
    })

    return(
        <section className='shelf'>
            <h2>Your Shelf</h2>
            <button className='button' onClick={() => props.clearShelf()}>clear shelf</button>
            <p className='title-list'>{mappedTitles.length === 0 ? 'Add books to Your Shelf by clicking on the book cover' : mappedTitles}</p>
        </section>
    )
}