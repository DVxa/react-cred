/**
 * Created by Kaiser on 06.10.2016.
 */

import React, { Component, PropTypes } from 'react';
import ValidatedInputErrors from './ValidatedInputErrors';

export default function ValidatedInputFactory(WrappedInput) {
    return class ValidatedInput extends Component {

        static propTypes = {
            value: PropTypes.string,
            valid: PropTypes.bool,
            dirty: PropTypes.bool,
            errors: PropTypes.array,
            onChange: PropTypes.func.isRequired
        };

        static defaultProps = {
            errors: [],
        };

        constructor(props) {
            super(props);
            this.onValueChangeHandler = this.onValueChangeHandler.bind(this);
        }

        onValueChangeHandler(event) {
            this.props.onChange(event.target.value);
        }

        render() {
            const {valid, dirty, errors} = this.props;
            let props = {...this.props};
            delete props.valid;
            delete props.dirty;
            delete props.errors;

            return (
                <div>
                    <WrappedInput
                        {...props}
                        errorText={!valid && dirty ? <ValidatedInputErrors errors={errors}/> : null}
                        onChange={this.onValueChangeHandler}
                    />
                </div>
            )
        }
    }
}
