import React, { useState } from 'react'
import { FiMinus, FiMinusCircle, FiPlus, FiPlusCircle } from "react-icons/fi";
import { FaCheckCircle, FaCircle } from "react-icons/fa"

const ShoppingList = () => {
    const [inputValue, setInputValue] = useState("")
    const [totalValue, setTotalValue] = useState(6)
    const [items, setItems] = useState([
        { itemName: 'items 1', quantity: 1, isCompleted: false },
        { itemName: 'items 2', quantity: 2, isCompleted: true },
        { itemName: 'items 3', quantity: 3, isCompleted: false },
    ])

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            itemName: inputValue,
            quantity: 1,
            isCompleted: false
        };

        setItems([...items, newItem]);
        setInputValue("");
        setTotalValue(totalValue + 1);
    }

    const handleIncrement = (index) => {
        const newwItems = [...items];
        newwItems[index].quantity++;
        setItems(newwItems);
        Calculate();
    }

    const handleDecrement = (index) => {
        const newwItems = [...items];
        newwItems[index].quantity--;
        setItems(newwItems);
        Calculate();
    }

    const handleIsCompleted = (index) => {
        const newwItems = [...items];
        newwItems[index].isCompleted = !newwItems[index].isCompleted
        setItems(newwItems);
    }

    const Calculate = () => {
        const total = items.reduce((total, item) => {
            return total + item.quantity
        }, 0)
        setTotalValue(total);
    }

    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <div className="col-lg-5 align-self-center text-start">
                    <div className="card shadow-sm bg-dark text-white border-0 rounded-3">
                        <div className="card-body">
                            <form action="" onSubmit={handleSubmit} method="post">
                                <div className="input-group mb-3">
                                    <input type="text" value={inputValue} onChange={handleInputValue} className="form-control border-0" placeholder="Add Items..." />
                                    <button className="input-group-text bg-white" ><FiPlus /> </button>
                                </div>
                            </form>
                            <ul className="list-group">
                                {items.map((item, index) => {
                                    return <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                                        <div onClick={() => { handleIsCompleted(index) }} className="me-auto d-flex gap-2 align-items-center cursor-pointer">
                                            {item.isCompleted ?
                                                <>
                                                    <FaCheckCircle />
                                                    <div className="fw-bold text-decoration-line-through">{item.itemName}</div>
                                                </>
                                                :
                                                <>
                                                    <FaCircle />
                                                    <div className="fw-bold">{item.itemName}</div>
                                                </>
                                            }

                                        </div>
                                        <div>
                                            <FiPlusCircle onClick={() => { handleIncrement(index) }} />
                                            <span className="badge bg-primary mx-2">{item.quantity}</span>
                                            <FiMinusCircle onClick={() => { handleDecrement(index) }} />
                                        </div>
                                    </li>
                                })}

                                {/* <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="me-auto d-flex gap-2 align-items-center">
                                        {false ?
                                            <>
                                                <FaCircle />
                                                <div className="fw-bold">Subheading</div>
                                            </>
                                            :
                                            <>
                                                <FaCheckCircle />
                                                <div className="fw-bold text-decoration-line-through">Subheading</div>
                                            </>
                                        }

                                    </div>
                                    <div>
                                        <FiPlusCircle />
                                        <span className="badge bg-primary mx-2">14</span>
                                        <FiMinusCircle />
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="me-auto d-flex gap-2 align-items-center">
                                        {false ?
                                            <>
                                                <FaCircle />
                                                <div className="fw-bold">Subheading</div>
                                            </>
                                            :
                                            <>
                                                <FaCheckCircle />
                                                <div className="fw-bold text-decoration-line-through">Subheading</div>
                                            </>
                                        }

                                    </div>
                                    <div>
                                        <FiPlusCircle />
                                        <span className="badge bg-primary mx-2">14</span>
                                        <FiMinusCircle />
                                    </div>
                                </li> */}
                                <li className="list-group-item d-flex justify-content-end">
                                    <h6 className='me-4 mb-0'>Total : {totalValue}</h6>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingList