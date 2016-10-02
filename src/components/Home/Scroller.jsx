import React, {Component} from 'react';

export default class Scroller extends Component {
    render() {
        return(
            <div className="scroller clearfix">
                <div className="slider slider-horizontal" id="">
                    <div className="slider-track">
                        <div className="slider-track-low" ></div>
                        <div className="slider-selection" ></div>
                        <div className="slider-track-high" ></div>
                        <div className="slider-handle min-slider-handle round" tabindex="0" ></div>
                        <div className="slider-handle max-slider-handle round hide" tabindex="0"></div>
                    </div>
                    <div className="tooltip tooltip-main top hide" >
                        <div className="tooltip-arrow"></div>
                        <div className="tooltip-inner">{this.props.maxValue}</div>
                    </div>
                    <div className="tooltip tooltip-min top hide">
                        <div className="tooltip-arrow"></div>
                        <div className="tooltip-inner"></div>
                    </div>
                    <div className="tooltip tooltip-max bottom hide">
                        <div className="tooltip-arrow"></div>
                        <div className="tooltip-inner"></div>
                    </div>
                </div>
                <input type="text" name="data-{this.props.name}"
                        data-slider-tooltip="hide"
                        data-slider-selection="after"
                        data-slider-min='{this.props.minValue}'
                        data-slider-max='{this.props.maxValue}'
                        data-slider-step='{this.props.step}'
                        data-slider-value='{this.props.curValue}'
                        style={{display: 'none'}}
                        data="value: '{this.props.curValue}'"
                        />
                <span className="scroller__body__line__from">{this.props.minValue}</span>
                <span className="scroller__body__line__to">{this.props.maxValue}</span>
            </div>
        )
    }
}