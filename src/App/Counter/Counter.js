import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        this.increment = this.increment.bind(this);
    }
    increment() {
        this.setState(prevState => ({
            count: ++prevState.count
        }));
    }
    render() {
        return (
            <div>
                <div className="count">{this.state.count}</div>
                <button type="button" onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default Counter;