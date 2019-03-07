import React from 'react';

const OldOrderViewItem = props => {

    const { name, address, city, postalCode,telephone, products } = props;
   
    return (

            
            <div className="card">
            
            
            <div className="card-body">
                <h5 className="card-title">{name} - { telephone }</h5>
          
                <div className="card-text"> {products.map(p =>  <div key={p.id}> {p.name}
                <img src={p.image} />
                </div>)}</div>
            </div>
        </div>
     
     
     



    ) 
}

export default OldOrderViewItem;

