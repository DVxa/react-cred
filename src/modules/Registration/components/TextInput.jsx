/**
 * Created by V.Minyailov-book on 15.10.2016.
 */
import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import ValidatedInputFactory from 'commons/HOC/ValidatedInput';

const textStyles = {
    width: '100%',
    fontSize: '18px'
};

class TextInput extends Component {

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
            <div className="col-xs-7">
                <TextField
                    style={textStyles}
                    type="text"
                    name="FirstName"
                    hintText="Фамилия"
                    floatingLabelText="Фамилия"
                    {...this.props}
                />
                <div className="error-message-box"></div>
            </div>
        )
    }
}

export default ValidatedInputFactory(TextInput);