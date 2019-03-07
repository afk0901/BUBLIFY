import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {

    const { value, onInput, name, htmlid, type, errorMessage, label} = props;

    return (
    <div className="form-group">
        {
            label
            ?
            <label className="control-label">{ label } </label>
            :
            <></>
        }
        <></>
        <input 
            className="form-control"
            onChange={ onInput }
            value={ value }
            name={ name }
            id={ htmlid }
            type={ type } />
        <span className="error"> { errorMessage } </span>
    </div>
    )

}

export default Input;

Input.propTypes = {
    value: PropTypes.string.isRequired,
    htmlid: PropTypes.string,
    onInput: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf( ['text', 'submit', 'tel'] ),
    errorMessage: PropTypes.string,
    label: PropTypes.string

}