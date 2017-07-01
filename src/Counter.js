import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        this.increment = this.increment.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment() {
        this.setState(prevState => ({
            count: ++prevState.count
        }));
    }
    reset() {
        this.setState(prevState => ({
            count: 0
        }));
    }
    render() {
        return (
            <div>
                <div className="count">{this.state.count}</div>
                <button type="button" onClick={this.increment}>Increment</button>
                <button type="button" onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Counter;