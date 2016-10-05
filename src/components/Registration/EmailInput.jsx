/**
 * Created by Kaiser on 04.10.2016.
 */

import React, { Component, PropTypes } from 'react';

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
                <div className="col-xs-4 caption ">Email<span>*</span></div>
                <div className="col-xs-10 field  ">
                    <input
                        type="text"
                        placeholder="пример: ivanov@gmail.com"
                        name="email"
                        onChange={this.onValueChangeHandler}
                        value={this.props.value}
                    />
                    {!this.state.valid && this.state.dirty && <div>Введите корректный e-mail</div>}
                </div>
            </div>
        )
    }
}