import React from 'react';
import Form from '../Forms/Form';
import Input from '../Forms/Input';
import {Link} from 'react-router-dom';
import { Redirect } from'react-router';


class StorePickup extends React.Component {
    constructor(props) {
        super();
        this.state = {
            redirect: false,
            fields: {
                name: '',
                telephone: ''  
            },
            errors: {
                nameError: '',
                telephoneError: ''
            }
        }
    }
    onInputchange(e) {
        this.setState({
            fields: { ...this.state.fields, [e.target.name]: e.target.value}
        });
    }
    validateForm(){
        const { name, telephone } = this.state.fields;
        const errors = {};
        if(name === '' ) {errors.nameError = "You must enter your name"}
        if(telephone === '' ) {errors.telephoneError = "You must enter your telephone"}
        if(telephone.length !== 7) {errors.telephoneError = "Telephone number must be 7 digits"}
        // if(typeof telephone !== "number" ) {errors.telephoneError = "Telephone numbers must be only integers"}
        
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
            this.storeUser();
            this.setState({redirect: true})
            console.log("Success!!", "success yay");
        }
        else {
            console.log("Failure!!", "failed");
        }
    }

    storeUser(){
        const products = JSON.parse(localStorage.getItem('products'));
        const userData = {name: this.state.fields.name, telephone: this.state.fields.telephone, products: products };
        console.log(userData, "the userData ");
        localStorage.setItem("user",JSON.stringify(userData));
    }


    render(){
        if (this.state.redirect) {
            return <Redirect push to="/cart/checkout/confirm" />;
          }

        const { name, telephone } = this.state.fields;
        const { nameError, telephoneError} = this.state.errors;
        console.log(name)
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
                        errorMessage= {nameError}
                        onInput={e => this.onInputchange(e)} />
                    <Input 
                        type="tel"
                        name="telephone"
                        value={telephone}
                        htmlid="telephone"
                        label="Enter your telephone"
                        errorMessage= {telephoneError}
                        onInput={e => this.onInputchange(e)}
                         />
                    <input type="submit" value="Continue" className="btn btn-primary" style={{ float: 'left', marginTop: 10,}} />
                    <Link to="/"><button className="btn btn-danger" style={{ float: 'right', marginTop: 10}}>Cancel</button></Link>
                </Form>
                
            </>
        )
    }
}

export default StorePickup;