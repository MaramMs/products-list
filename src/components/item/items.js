import React, { useState } from 'react';

const Items = (props) => {
    const {items, del} = props;
    console.log(items);
    const [increase,setIncrease] = useState(0)
    const [decrease,setDecrease] = useState(0)
    let length = items.length
    const ListItem = length ? (
        items.map(item => {
            return(
                <div key={item.id} className="item">
                    <p>{item.product}</p>
                    <p>{item.price}</p>
                    <p className="delete" onClick={() => del(item.id)}>&times;</p>
                    <p className='quantity'>
                        <span className='inc' onClick={() =>{
                            setIncrease((prevSate) =>{
                                return prevSate + 1
                            })
                        }}>+</span>
                        <span className='des' onClick={()=>setDecrease((prevState) =>{
                            return prevState - 1
                        })}>-</span> 
                    </p>
                </div>
            )
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    )
    return (
        <div>
            <div className="header item">
                <p>Product</p>
                <p>Price</p>
                <p>Edit</p>
                <p>quantity</p>
            </div>
            {ListItem}
        </div>
    )
}

export default Items