import React from 'react'
import Card_item from './card_item'
import './cards.css'

const Cards = (props) => {
    let arr = [...props.data]
    
    const listItems = arr.forEach(d => {
        
        <Card_item
            title={d.tenkho}
            location={d.diachi}
            number="033536875"
        />
        
    });
    
    
    
    return (
        <div>{props.data.map(d => (
        
            <Card_item
                title={d.tenkho}
                location={d.diachi}
                number="033536875"
            />

           
        ))}
        
        </div>
        
        
    )

    
}

export default Cards;