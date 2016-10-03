import React, {Component} from 'react';

export default class Scroller extends Component {
    constructor (props) {
        super(props);
        this.handlerChange = this.handlerChange.bind(this);
    }
    handlerChange () {
        console.log(value);
    }
    render() {
        return(
            <div className="scroller clearfix">
                <div className="col-xs-4 caption scroller__text">{this.props.name}</div>
                <div className="col-xs-10 input-group field scroller">
                    <div className="col-xs-8 scroller__body">
                        <div className="scroller clearfix">
                            <input type="text" name={this.props.inputName}
                                   data-slider-tooltip="hide"
                                   data-slider-selection="after"
                                   data-slider-min={this.props.minValue}
                                   data-slider-max={this.props.maxValue}
                                   data-slider-step={this.props.step}
                                   data-slider-value={this.props.curValue}
                            />
                            <span className="scroller__body__line__from">{this.props.minValue}</span>
                            <span className="scroller__body__line__to">{this.props.maxValue}</span>
                        </div>
                    </div>
                    <div className="formatted col-xs-3 scroller__input">
                        <input type="text"
                               data-a-sep={this.props.step}
                               data-a-dec=","
                               data-v-min="0"
                               data-v-max={this.props.mask}
                               defaultValue={this.props.curValue} className="full-width"
                        />
                    </div>
                    <div className="col-xs-3 scroller__measure">{this.props.unit}</div>
                </div>
            </div>
        )
    }
}