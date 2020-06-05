import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {

    render() {

        if(!this.props.title){
            return null;
        }

        return(
            <div data-test="ListItemComponent"> 
                <h2 data-test="ListItemTitle">{this.props.title}</h2>
                <div data-test="ListItemDescription">
                    {this.props.desc}
                </div>
            </div>
        );
    }
}

ListItem.propTypes = {
    title : PropTypes.string,
    desc :  PropTypes.string
}


export default ListItem;


