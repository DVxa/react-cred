/**
 * Created by Kaiser on 06.10.2016.
 */

import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import ValidatedInputFactory from 'commons/HOC/ValidatedInput';

const textStyles = {
    width: '100%',
    fontSize: '18px'
};

class PasswordInput extends Component {

    static propTypes = {
        value: PropTypes.string,
        errorText: PropTypes.object,
        onChange: PropTypes.func
    };

    render() {
        // errorText={this.props.errorText}
        // value={this.props.value}
        // onChange={this.props.onChange}

        return (
            <TextField
                style={textStyles}
                type="password"
                name="password"
                hintText="Пароль"
                floatingLabelText="Пароль"
                fullWidth={true}
                {...this.props}
            />
        )
    }
}

export default ValidatedInputFactory(PasswordInput);