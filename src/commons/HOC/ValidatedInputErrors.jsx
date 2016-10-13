import React from 'react';

export default function ValidatedInputErrors(props) {
    const errors = props.errors.map((error, key) => <div key={key}>{error}</div>);
    return <div>{errors}</div>;
}

ValidatedInputErrors.propTypes = {
    errors: React.PropTypes.array,
};

ValidatedInputErrors.defaultProps = {
    errors: [],
};