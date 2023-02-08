/**
 * Class component example which has lifecycle methods
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {

    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: When the component is instanciated')
    }

    componentWillMount() {
        console.log('WILLMOUNT: Before the mount of the component')
    }

    componentDidMount() {
        console.log('DIDMOUNT: After the mount of the component, before renderizing it')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILLRECEIVEPROPS: If it is going to receive props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        // return true/false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WILLUPDATE: Before updating it')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DIDUPDATE: After updating it')
    }

    componentWillUnmount() {
        console.log('WILLUNMOUNT: Before disappearing')
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
