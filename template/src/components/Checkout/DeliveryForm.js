import React from 'react';
import Form from '../Forms/Form';
import Input from '../Forms/Input';
import {Link} from 'react-router-dom';


class DeliveryForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            fields: {
                name: '',
                address: '',
                postalCode: '',
                city: '',
                telephone: ''  
            },
            errors: {
                nameError: '',
                addressError: '',
                postalCodeError:'',
                cityError: '',
                telephoneError: ''
            }
        }
    }
    onInputchange(e) {
        this.setState({
            fields: { ...this.state.fields, [e.target.name]: e.target.value}
        });
    };
    validateForm(){
        const { name, address, postalCode, city, telephone } = this.state.fields;
        const errors = {};
        if(name === '' ) {errors.nameError = "You must enter your name"}
        if(address === '' ) {errors.addressError = "You must enter your address"}
        if(postalCode === '' ) {errors.postalCodeError = "You must enter your postal code"}
        if(city === '' ) {errors.cityError = "You must enter your city"}
        if(telephone === '' ) {errors.telephoneError = "You must enter your telephone"}
        
        if (Object.keys(errors).length > 0) { 
            this.setState({ ...this.state.errors, errors });
            return false; 
            
        }

        return true;
        console.log(errors);
    }
    submitForm(e) {
        e.preventDefault();
        if(this.validateForm()) {
            console.log("Success!!", "success yay");
        }
        else {
            console.log("Failure!!", "failed");
        }
    }
    render(){
        const { name, address, postalCode, city, telephone } = this.state.fields;
        const { nameError, addressError, postalCodeError, cityError, telephoneError} = this.state.errors;
        console.log(name)
        console.log(address)
        console.log(postalCode)
        console.log(city)
        console.log(telephone)
        return (
            <>
                <h1>Please enter your information</h1>
                <Form onSubmit={e => this.submitForm(e)}>
                    <Input 
                        type="text"
                        name="name"
                        value={name}
                        htmlid="name"
                        label="Enter your name"
                        errorMessage={nameError}
                        onInput={e => this.onInputchange(e)} />
                    <Input 
                        type="text"
                        name="address"
                        value={address}
                        htmlid="address"
                        label="Enter your address"
                        errorMessage={addressError}
                        onInput={e => this.onInputchange(e)} />
                    <Input 
                        type="text"
                        name="postalCode"
                        value={postalCode}
                        htmlid="postalCode"
                        label="Enter your postal code"
                        errorMessage={postalCodeError}
                        onInput={e => this.onInputchange(e)} />
                    <Input 
                        type="text"
                        name="city"
                        value={city}
                        htmlid="city"
                        label="Enter your city"
                        errorMessage={cityError}
                        onInput={e => this.onInputchange(e)} />
                    <Input 
                        type="tel"
                        name="telephone"
                        value={telephone}
                        htmlid="telephone"
                        label="Enter your telephone"
                        errorMessage={telephoneError}
                        onInput={e => this.onInputchange(e)}/>
                    <input type="submit" value="Continue" className="btn btn-primary" style={{ float: 'left', marginTop: 10,}} />
                    <Link to="/"><button className="btn btn-danger" style={{ float: 'right', marginTop: 10}}>Cancel</button></Link>
                </Form>
                
            </>
        )
    }
}

export default DeliveryForm;