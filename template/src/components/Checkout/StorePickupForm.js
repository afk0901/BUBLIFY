import React from 'react';
import Form from '../Forms/Form';
import Input from '../Forms/Input';
import {Link} from 'react-router-dom';


class StorePickup extends React.Component {
    constructor(props) {
        super();
        this.state = {
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
    render(){
        const { name, telephone } = this.state.fields;
        console.log(name)
        return (
            <>
                <h1>Please enter your information</h1>
                <Form>
                    <Input 
                        type="text"
                        name="name"
                        value={name}
                        htmlid="name"
                        label="Enter your name"
                        onInput={e => this.onInputchange(e)} />
                    <Input 
                        type="tel"
                        name="telephone"
                        value={telephone}
                        onInput={e => this.onInputchange(e)}
                         />
                </Form>
                
            </>
        )
    }
}

export default StorePickup;

{/* <form action="" method="post">
                    <strong><label for="name">Name</label></strong>
                    <input type="text" value={name} name="name" id="name" onChange = {(e) => this.onInputchange(e)}></input>
                    <strong><label for="tel">Telephone</label></strong>
                    <input label="Telephone" type="text" value={telephone} name="telephone" id="tel" onChange = {(e) => this.onInputchange(e)}></input>
                </form> */}