import React, {Component} from 'react';

class Counter extends Component {
    render() {
        return (
            <div className="counter-box">
                <div className="counter-val counter2">
                    <button
                        type="button"
                        className="minus"
                        onClick={this.props.minus}>-</button>
                    <div className="input-wrap">
                        <input type="number" onChange={null} value={this.props.count}/>
                    </div>
                    <button
                        type="button"
                        onClick={this.props.plus}
                        className="plus">+</button>
                </div>
            </div>
        )
    }
}

export default Counter
