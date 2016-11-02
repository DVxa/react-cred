import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory, Link} from 'react-router';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';

const styles ={
    textStyles: {
        fontSize: '24px',
        width: '100%'
    },
    sliderStyle: {
        height: 24,
        marginTop: 6,
        marginBottom: 6,
        fontSize: 18
    },
    divCalcBlock: {
        margin: '0 0 0 30px'
    }
};



export default class HomeCalcForm extends Component {
    constructor (props) {
        super(props);
        this.onChangeAmountHandler = this.onChangeAmountHandler.bind(this);
        this.onChangePeriodHandler = this.onChangePeriodHandler.bind(this);
        this.onChangeRateHandler   = this.onChangeRateHandler.bind(this);
        this.btnCreateOfferHandler = this.btnCreateOfferHandler.bind(this);
        this.onChangeCalcElems     = this.onChangeCalcElems.bind(this);

        var dateToday = new Date();
        dateToday.setDate(dateToday.getDate() + 14);

        this.state = {
            amountValue : 5000,
            periodValue : 14,
            rateValue   : 0.2,
            backAmountValue: 5000 + 5000 * (0.2 + 0.05)/100 * 14,
            backDate    : ('0' + dateToday.getDate()).slice(-2) + '.' +
                          ('0' + (dateToday.getMonth()+1)).slice(-2) + '.' +
                          dateToday.getFullYear()
        };
    }
    onChangeCalcElems = () => {
        var backAmount = this.state.amountValue +
            (this.state.amountValue * (this.state.rateValue + 0.05) / 100 * this.state.periodValue);
        this.setState({backAmountValue: backAmount});
    };
    onChangeAmountHandler = (event, value) => {
        if (value < 3000) {
            this.setState({amountValue: 3000});
        } else {
            if (value > 30000) {
                this.setState({amountValue: 30000});
            } else {
                this.setState({amountValue: value});
            }
        }
        this.onChangeCalcElems();
    };
    onChangePeriodHandler = (event, value) => {
        this.setState({periodValue: value > 48 ? 48: value});
        var dateToday = new Date();
        dateToday.setDate(dateToday.getDate() + value);
        this.setState({
            backDate:
            ('0' + dateToday.getDate()).slice(-2) + '.' +
            ('0' + (dateToday.getMonth()+1)).slice(-2) + '.' +
            dateToday.getFullYear()
        });
        this.onChangeCalcElems();
    };
    onChangeRateHandler = (event, value) => {
        this.setState({rateValue: value > 2 ? 2 : value});
        this.onChangeCalcElems();

    };
    btnCreateOfferHandler = () => {
        browserHistory.push("/offers/lend/" +
         this.state.amountValue + "/" +
         this.state.periodValue + "/" +
         this.state.rateValue
        );
    };
    render() {
        return (
            <div>
                <div className="calculator clearfix">
                    <div className="scrollers">
                        {/*<i className="triangle-icon"></i>*/}
                        <div className="scroller clearfix">
                            <div className="col-xs-11 scroller__body">
                                <Slider style={styles.sliderStyle}
                                        min={3000}
                                        max={30000}
                                        step={1000}
                                        sliderStyle={{marginBottom: 16, marginTop: 8, backgroungColor: 'red'}}
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
                                    style={{padding: '3px', width: '80px', fontSize: '20px'}}
                                    value={this.state.amountValue}
                                    floatingLabelText="рублей"
                                    floatingLabelFixed={true}
                                    onChange={this.onChangeAmountHandler}
                                />
                            </div>
                        </div>
                        <div className="scroller clearfix">
                            <div className="col-xs-11 scroller__body">
                                <Slider style={styles.sliderStyle}
                                        min={1}
                                        max={48}
                                        step={1}
                                        sliderStyle={{marginBottom: '16px', marginTop: '8px'}}
                                        defaultValue={14}
                                        description="Период заявки"
                                        value={this.state.periodValue}
                                        onChange={this.onChangePeriodHandler}
                                />
                            </div>
                            <div className="col-xs-2 scroller__input">
                                <TextField
                                    style={{padding: '3px', width: '80px', fontSize: '20px'}}
                                    value={this.state.periodValue}
                                    floatingLabelText="дней"
                                    floatingLabelFixed={true}
                                    onChange={this.onChangePeriodHandler}
                                />
                            </div>
                        </div>
                        <div className="scroller clearfix">
                            <div className="col-xs-11 scroller__body">
                                <Slider style={styles.sliderStyle}
                                        min={0}
                                        max={0.5}
                                        step={0.05}
                                        sliderStyle={{marginBottom: '16px', marginTop: '8px'}}
                                        defaultValue={0.2}
                                        description="Ставка"
                                        value={this.state.rateValue}
                                        onChange={this.onChangeRateHandler}
                                />
                            </div>
                            <div className="col-xs-2 scroller__input">
                                <TextField
                                    style={{padding: '3px', width: '80px', fontSize: '20px'}}
                                    value={this.state.rateValue}
                                    floatingLabelText="% в дн"
                                    floatingLabelFixed={true}
                                    onChange={this.onChangeRateHandler}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="calculator-result">
                        <div style={styles.divCalcBlock}>
                            <div className="row">
                                <div className="col-xs-6">
                                    <h4>Возьмете:</h4>
                                </div>
                                <div className="col-xs-8">
                                    <h1>{this.state.amountValue}</h1>
                                </div>
                            </div>
                        </div>
                        <div style={styles.divCalcBlock}>
                            <div className="row">
                                <div className="col-xs-3">
                                    <h4>До:</h4>
                                </div>
                                <div className="col-xs-11">
                                    <h1>{this.state.backDate}</h1>
                                </div>
                            </div>
                        </div>
                        <div style={styles.divCalcBlock}>
                            <div className="row">
                                <div className="col-xs-6">
                                    <h4>Отдадите:</h4>
                                </div>
                                <div className="col-xs-8">
                                    <h1>{this.state.backAmountValue}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-11">
                        </div>
                        <div className="col-xs-3">
                            <RaisedButton label='Подать заявку'
                                          style={{marginTop: '10px'}}
                                          onClick={this.btnCreateOfferHandler}
                                          secondary={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}