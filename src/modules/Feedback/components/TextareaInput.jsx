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

        return (
           <TextField
                style={textStyles}
                type="text"
                name="message"
                hintText="Ваше сообщение"
                multiLine={true}
                floatingLabelText="Ваше сообщение"
                fullWidth={true}
                {...this.props}
            />
        )
    }
}

export default ValidatedInputFactory(PasswordInput);