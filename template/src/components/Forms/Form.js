import React from 'react';

const Form = props => {
    return (
        <form className="form form-horizonal" onSubmit={ props.onSubmit }>
            { props.children }
        </form>
    )
};

export default Form;