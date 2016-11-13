import React, {Component, PropTypes} from 'react';
import Slider from 'material-ui/Slider';

const sliderStyle = {
    height: '24px',
    marginTop: '6px',
    marginBottom: '6px',
    fontSize: '18px'
};

export default class SliderInput extends Component {

    static propTypes = {
        minValue:       PropTypes.number.isRequired,
        maxValue:       PropTypes.number.isRequired,
        curValue:       PropTypes.number.isRequired,
        stepValue:      PropTypes.number.isRequired,
        description:    PropTypes.string.isRequired,
        onChange:       PropTypes.func.isRequired
    };

    constructor (props) {
        super(props);
    }

    render() {
        return(
            <Slider style={sliderStyle}
                    min={this.props.minValue}
                    max={this.props.maxValue}
                    value={this.props.curValue}
                    defaultValue={this.props.curValue}
                    step={this.props.stepValue}
                    sliderStyle={sliderStyle}
                    description={this.props.description}
                    onChange={this.props.onChange}
            />
        )
    }
}