import React, {Component} from 'react';

class Radios extends Component {
    render() {
        return (
            <div className="radio-buttons">
                <label className="check-label">
                    <input
                        type="radio"
                        name="radioValue"
                        value="1"
                        checked={this.props.radioValue === '1'}
                        onChange={this.props.setRadioValue}/>
                    <span className="check-box"></span>
                    <span className="check-text">One</span>
                </label>

                <label className="check-label">
                    <input
                        type="radio"
                        name="radioValue"
                        value="2"
                        checked={this.props.radioValue === '2'}
                        onChange={this.props.setRadioValue}/>
                    <span className="check-box"></span>
                    <span className="check-text">Two</span>
                </label>

                <label className="check-label">
                    <input
                        type="radio"
                        name="radioValue"
                        value="3"
                        checked={this.props.radioValue === '3'}
                        onChange={this.props.setRadioValue}/>
                    <span className="check-box"></span>
                    <span className="check-text">Three</span>
                </label>
            </div>
        )
    }
}

export default Radios
