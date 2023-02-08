/**
 * Example of usage of lifecycle in class component and hook of lifecycle in functional component
 */

import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';


class DidMount extends Component {

    componentDidMount() {
        console.log('Behavior before the component is added to the DOM (renderize)')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


const DidMountHook = () => {

    useEffect(() => {
        console.log('Behavior before the component is added to the DOM (renderize)');
    }, []);
    // with [] only executes 1 time

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
};


DidMount.propTypes = {

};


export default DidMount;

