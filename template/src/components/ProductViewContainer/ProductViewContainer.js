import React from 'react';

class ProductViewContainer extends React.Component {
    componentDidMount() {
        fetch('http://localhost:3600/api/bubbles').then(resp => {
            if(resp.ok) { return resp.json(); } 
        }).then(data => {
            this.setState({ bubbleProducts: data })
            console.log(this.state);
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            bubbleProducts: []
        };
    }
    render(){
        return (
            <>
            <div className = "container">
                <h1>Products!</h1>
            </div>
            </>
        )
    }
};

export default ProductViewContainer;