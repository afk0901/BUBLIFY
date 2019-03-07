import React from 'react';

const Form = props => {
    return (
        <form className="form form-horizonal">
            { props.children }
        </form>
    )
};

export default Form;