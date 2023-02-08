/**
 * Example of usage of componentDidUpdate in class component and use of hook in functional component
 */

import React, { Component, useEffect } from 'react';

class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Behavior when component receives new props or changes its state')
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}

const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Behavior when component receives new props or changes its state')
    });
    // without [] it executes always
    
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}


