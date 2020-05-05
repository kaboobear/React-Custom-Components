import React, {Component} from 'react';
import {connect} from 'react-redux';


import Accordion from './accordion';
import Tabs from './tabs';
import Slider from './slider';
import Dropdown from './dropdown';
import MobileMenu from './mobile';
import Toggler from './toggler';
import Radios from './radios';
import Counter from './counter';

// npm install react-dropdown  --save
import Select from 'react-dropdown';
import 'react-dropdown/style.css';

// npm i nouislider-react
import Nouislider from 'nouislider-react'
import "nouislider/distribute/nouislider.css";

// npm install react-scroll-up-button
import ScrollUpButton from "react-scroll-up-button";




class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            select:'one',
            isMenuShown:false,
            isToggled:false,
            radioValue: '1',
            count:3,
            rangeStart: 0,
            rangeEnd: 100,
            rangeMax: 100,
        }

        this.onSelect = this.onSelect.bind(this);
        this.setMenuShown = this.setMenuShown.bind(this);
        this.onChange = this.onChange.bind(this);
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.onSlide = this.onSlide.bind(this);
    }

    onChange(e){
        const {value, name, type, checked} = e.target;

        this.setState({
            [name]: (type === 'checkbox')
                ? checked
                : value
        })
    }

    onSelect(event){
        this.setState({select:event.value})
    }

    onSlide = (render, handle, value, un, percent) => {
        this.setState({
            rangeStart: parseInt(value[0]),
            rangeEnd: parseInt(value[1])
        });
    };

    setMenuShown(){
        this.setState({isMenuShown:!this.state.isMenuShown})
    }

    plus = () => {
        this.setState({count:this.state.count+1})
    }

    minus = () => {
        if(this.state.count > 1) {
            this.setState({count:this.state.count-1})
        }
    }

    render() {
        const {isAuth, isLoading} = this.props;
        const options = ['one', 'two', 'three'];


        return (
            <div className="main-section">

                <h1 className="element-title">Tabs</h1>
                <Tabs/>




                <h1 className="element-title">Accordion</h1>
                <Accordion/>




                <h1 className="element-title">Slider</h1>
                <Slider/>




                <h1 className="element-title">Select</h1>
                <Select options={options} onChange={this.onSelect} value={this.state.select} placeholder="Select an option" />




                <h1 className="element-title">Dropdown</h1>
                <Dropdown/>




                <h1 className="element-title">Toggler</h1>
                <Toggler isToggled={this.state.isToggled} setToggled={this.onChange}/> 





                <h1 className="element-title">Radio Buttons</h1>              
                <Radios radioValue={this.state.radioValue} setRadioValue={this.onChange}/> 





                <h1 className="element-title">Counter</h1>              
                <Counter minus={this.minus} plus={this.plus} count={this.state.count}/> 





                <h1 className="element-title">Number Range</h1>    
                <div className="number-range">
                    <Nouislider
                        connect
                        start={[0, this.state.rangeMax]}
                        behaviour="tap"
                        range={{min: [0],max: [this.state.rangeMax]}}
                        onSlide={this.onSlide}/>

                    <div className="values">
                        <input type="text" className="from" value={this.state.rangeStart} disabled/>
                        <div className="dash">-</div>
                        <input type="text" className="to" value={this.state.rangeEnd} disabled/>
                    </div>
                </div>





                <h1 className="element-title">Mobile Menu</h1>
                <div className="ham" onClick={this.setMenuShown}></div>
                <MobileMenu isMenuShown={this.state.isMenuShown} setMenuShown={this.setMenuShown}/>





                <ScrollUpButton ContainerClassName="to-top-button" />




                <div className="end-gap"></div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({isAuth: state.auth.isAuthenticated, isLoading: state.auth.isLoading})
export default connect(mapStateToProps, {})(Main);