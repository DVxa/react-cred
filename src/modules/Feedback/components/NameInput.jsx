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

class NameInput extends Component {

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
                name="name"
                hintText="Ваше имя"
                floatingLabelText="Ваше имя"
                fullWidth={true}
                {...this.props}
            />
        )
    }
}

export default ValidatedInputFactory(NameInput);