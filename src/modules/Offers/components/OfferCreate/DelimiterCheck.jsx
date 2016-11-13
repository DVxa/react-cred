/**
 * Created by Kaiser on 04.10.2016.
 */

import React, { Component, PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ValidatedInputFactory from 'commons/HOC/ValidatedInput';

const textStyles = {
    width: '100%',
    fontSize: '18px'
};

class DelimiterCheck extends Component {

    static propTypes = {
        value: PropTypes.string,
        errorText: PropTypes.object,
        onChange: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.onValueChangeHandler = this.onValueChangeHandler.bind(this);
    }

    onValueChangeHandler(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <Checkbox
                label="Возможно дробление заявки"
                checked={this.props.value}
                onCheck={this.props.onChange}
            />
        )
    }
}

export default ValidatedInputFactory(DelimiterCheck);