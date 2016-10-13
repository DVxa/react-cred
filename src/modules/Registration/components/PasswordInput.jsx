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
            <div className="row">
                <div className="col-xs-14 field  ">
                    <TextField
                        style={textStyles}
                        type="password"
                        name="password"
                        hintText="Пароль"
                        floatingLabelText="Пароль"
                        {...this.props}
                    />
                    <div className="error-message-box"></div>
                </div>
            </div>
        )
    }
}

export default ValidatedInputFactory(PasswordInput);