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
            onInput={ onInput }
            value={ value }
            name={ name }
            htmlid={ htmlid }
            type={ type } />
        <span className="error"> { errorMessage } </span>
    </div>
    )

}

export default Input;

/*
    value - the value from the input
    htmlid - id on the input itself
    oninput - runs a function when the input changes
    type - allowed types of inputs
    errorMessage - This property holds a error string if the input is invalid
    label - the input label
 */
Input.propTypes = {
    value: PropTypes.string.isRequired,
    htmlid: PropTypes.string,
    onInput: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf( ['text', 'submit', 'tel'] ),
    errorMessage: PropTypes.string,
    label: PropTypes.string

}