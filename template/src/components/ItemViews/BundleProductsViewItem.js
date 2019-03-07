import React from 'react';
import proptypes from 'prop-types';


class BundleProductViewItem extends React.Component {

    componentDidMount() {
        var productArr = [];
        fetch('http://localhost:3600/api/bubbles').then(resp => {
            if (resp.ok) { return resp.json(); }
        }).then(data => {
            const bubbleProducts = data.map(d => { return { id: d.id, name: d.name, price: d.price, image: d.image, description: d.description } });
            this.setState({ bubbleProducts });

            for (var i = 0; i < this.state.bubbleProducts.length; i++) {
                if (this.props.bundle.includes(this.state.bubbleProducts[i].id)) {
                    productArr.push(this.state.bubbleProducts[i]);
                }
            }
            const productsAndImages = productArr;
            this.setState({ productsAndImages });
            
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            bubbleProducts: [],
            productsAndImages: []
        };
    }

    render() {
       
        return (
            <div>
                {this.state.productsAndImages.map(p =>
                    <div>{p.name}
                        <img src={p.image} />
                    </div>)}
            </div>

        );
    }
};
/*Getting items id's from this.props.bundle
  so that's possible to find the correct items.
*/
BundleProductViewItem.proptypes = {
    items: proptypes.number.isRequired
}

export default BundleProductViewItem;