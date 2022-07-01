import React, { Component } from 'react'
import city from './city.jpg'

class Quotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleClick = () => {
        this.getData()
    }

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then((response) => {
                document.getElementById('advice').innerHTML = response.slip.advice
            })
    }

    render() {
        return (
            <>
                <div style={{ backgroundImage: `url(${city})`, objectFit: "cover", backgroundSize: "100%", backgroundPosition: "center" }} className="w-100 h-100">
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className="col-md-6">
                            <div className="card border-0 p-5">
                                <div className="card-body text-center">
                                    <h5 className='' id='advice'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                    <button onClick={this.handleClick} className='btn btn-outline-primary rounded-pill px-5 mt-3'>Get Advice</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Quotes;
