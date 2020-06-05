import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SharedButton extends Component {

    render(){
        const {buttonText, emitEvent} = this.props;
        return(
            <button onClick={emitEvent} data-test="buttonComponent">
                {buttonText}
            </button>
        );
    }
}

SharedButton.propTypes = {
    buttonText : PropTypes.string,
    emitEvent :  PropTypes.func
}

export default SharedButton;