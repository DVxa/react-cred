import React, {Component} from 'react';
import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';


const sliderStyle = {
    height: '24px',
    marginTop: '6px',
    marginBottom: '6px',
    fontSize: '18px'
};

export default class Sliders extends Component {
    constructor (props) {
        super(props);
        this.onChangeAmountHandler = this.onChangeAmountHandler.bind(this);
        this.onChangePeriodHandler = this.onChangePeriodHandler.bind(this);
        this.onChangeRateHandler   = this.onChangeRateHandler.bind(this);
        this.state = {
            amountValue : 5000,
            periodValue : 14,
            rateValue   : 0.2
        };
    }
    onChangeAmountHandler (event, value) {
        if (value < 3000) {
            this.setState({amountValue: 3000});
        } else {
            if (value > 50000) {
                this.setState({amountValue: 50000});
            } else {
                this.setState({amountValue: value});
            }
        }
    }
    onChangePeriodHandler (event, value) {
        this.setState({periodValue: value > 48 ? 48: value});
    }
    onChangeRateHandler (event, value) {
        this.setState({rateValue: value > 2 ? 2 : value});
    }
    render() {
        return(
            <div className="scrollers">
                <i className="triangle-icon"></i>
                <div className="scroller clearfix">
                    <div className="col-xs-11 scroller__body">
                        <Slider style={sliderStyle}
                                min={3000}
                                max={50000}
                                step={500}
                                defaultValue={5000}
                                description="Сумма заявки"
                                value={this.state.amountValue}
                                onChange={this.onChangeAmountHandler}
                        />
                        {/*<span className="scroller__body__line__from">{this.props.minValue}</span>
                         <span className="scroller__body__line__to">{this.props.maxValue}</span>*/}
                    </div>
                    <div className="col-xs-2 scroller__input">
                        <TextField
                            style={{padding: '3px', width: '100%'}}
                            value={this.state.amountValue}
                            floatingLabelText="рублей"
                            floatingLabelFixed={true}
                            onChange={this.onChangeAmountHandler}
                        />
                    </div>
                </div>
                <div className="scroller clearfix">
                    <div className="col-xs-11 scroller__body">
                        <Slider style={sliderStyle}
                                min={1}
                                max={48}
                                step={1}
                                defaultValue={14}
                                description="Период заявки"
                                value={this.state.periodValue}
                                onChange={this.onChangePeriodHandler}
                        />
                    </div>
                    <div className="col-xs-2 scroller__input">
                        <TextField
                            style={{padding: '3px', width: '100%'}}
                            value={this.state.periodValue}
                            floatingLabelText="дней"
                            floatingLabelFixed={true}
                            onChange={this.onChangePeriodHandler}
                        />
                    </div>
                </div>
                <div className="scroller clearfix">
                    <div className="col-xs-11 scroller__body">
                        <Slider style={sliderStyle}
                                min={0}
                                max={2.0}
                                step={0.15}
                                defaultValue={0.2}
                                description="Ставка"
                                value={this.state.rateValue}
                                onChange={this.onChangeRateHandler}
                        />
                    </div>
                    <div className="col-xs-2 scroller__input">
                        <TextField
                            style={textStyles}
                            value={this.state.rateValue}
                            floatingLabelText="рублей"
                            floatingLabelFixed={true}
                            onChange={this.onChangeRateHandler}
                        />
                    </div>
                </div>
            </div>
        )
    }
}