import React from 'react';
import BundleListView from '../ListView/BundleViewItemList'

class Bundles extends React.Component {
    
    componentDidMount() {
        fetch('http://localhost:3600/api/bundles').then(resp => {
            if(resp.ok) {
                return resp.json();
            }
        }).then(data => {
            const bundles = data.map(d => { return { id: d.id, name: d.name, items: d.items } });
            this.setState( { bundles } ); 
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            bundles: []
        };
    }

    render () {
        //console.log(this.state.bundles);
        return (
        <div>
            <h1>Bundles!</h1>
            <BundleListView list= {this.state.bundles}/>
        </div>);
    }
};


export default Bundles;