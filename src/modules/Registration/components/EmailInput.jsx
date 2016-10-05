/**
 * Created by Kaiser on 04.10.2016.
 */

import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const textStyles = {
    width: '100%',
    fontSize: '18px'
};

export default class EmailInput extends Component {

    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.function
    };

    constructor(props) {
        super(props);
        this.onValueChangeHandler = this.onValueChangeHandler.bind(this);
        this.state = {
            valid: false,
            dirty: false
        }
    }

    onValueChangeHandler(event) {
        let value = event.target.value;
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({
            valid: re.test(value),
            dirty: true
        });
        this.props.onChange(value);
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-14 field  ">
                    <TextField
                        style={textStyles}
                        type="text"
                        name="email"
                        errorText={!this.state.valid && this.state.dirty && <div>Введите корректный e-mail</div>}
                        hintText="Email"
                        floatingLabelText="Email"
                        value={this.state.value}
                        onChange={this.onValueChangeHandler}
                    />
                    {/*
                    <input
                        type="text"
                        placeholder="пример: ivanov@gmail.com"
                        name="email"
                        onChange={this.onValueChangeHandler}
                        value={this.props.value}
                    />

                    */}
                </div>
            </div>
        )
    }
}