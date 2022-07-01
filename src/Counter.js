import React, {Component} from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conuters : 0,
            tempratureColor : 'cold'
        }
    }

    handleIncrement= ()=>{
        this.setState({conuters : this.state.conuters + 1})
        this.handleTemp()
    }

    handleTemp = ()=>{
    if(this.state.conuters >= 14)
        this.setState({tempratureColor : 'hot'})
    
    if(this.state.conuters < 14)
        this.setState({tempratureColor : 'cold'})
    }

    handleDecrement= ()=>{
        if(this.state.conuters > 0)
            this.setState({conuters : this.state.conuters - 1})
        this.handleTemp()
    }

    render() {
        return ( 
            <> 
            <p><span className={`${this.state.tempratureColor}`}> {this.state.conuters}</span> <sup>o</sup>C</p>
            <button onClick={this.handleIncrement}>increment</button>
            <button onClick={this.handleDecrement}>decrement</button>
            </>
        )
    }
}

export default Counter;