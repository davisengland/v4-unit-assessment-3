import React from 'react'

export default function BookList(props) {
    let {books} = props

    let mappedBooks = books.map((elem, i) => {
        return(
            <div>
                <img src={elem.img} alt={elem.title} height='150' width='120' onClick={() => props.addToShelf(elem.title)}/>
                <p>{elem.title} by {elem.author}</p>
            </div>
        )
    })

    return (
        <section className='list'>{mappedBooks}</section>
    )
}