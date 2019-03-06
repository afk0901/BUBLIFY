import React from 'react';
import PropTypes from 'prop-types';
import ViewItem from '../ItemViews/ViewItem';

const ListView = props => {
    const { list } = props;
    return list.map(item => <ViewItem key={item.id} {...item} />);
};

ListView.propTypes = {
    list: PropTypes.array.isRequired
};

export default ListView;