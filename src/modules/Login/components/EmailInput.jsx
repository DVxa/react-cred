/**
 * Created by Kaiser on 04.10.2016.
 */

import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import ValidatedInputFactory from 'commons/HOC/ValidatedInput';

const textStyles = {
    width: '100%',
    fontSize: '18px'
};

class EmailInput extends Component {

    static propTypes = {
        value: PropTypes.string,
        errorText: PropTypes.object,
        onChange: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.onValueChangeHandler = this.onValueChangeHandler.bind(this);
    }

    onValueChangeHandler = (event) => {
        this.props.onChange(event.target.value);
    };

    render() {
        return (
            <TextField
                style={textStyles}
                type="text"
                name="email"
                errorText={this.props.errorText}
                hintText="Email"
                floatingLabelText="Email"
                value={this.props.value}
                onChange={this.props.onChange}
                fullWidth={true}
            />
        )
    }
}

export default ValidatedInputFactory(EmailInput);