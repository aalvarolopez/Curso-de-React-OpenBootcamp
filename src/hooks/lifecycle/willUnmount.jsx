/**
 * Example of componentWillUnmount for class component and functional component
 * (when component is gonna disappear)
 */

import React, { Component, useEffect } from 'react';

class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Behavior before component diappears');
    }
    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}


const WillUnmountHook = () => {

    useEffect(() => {
        // nothing here
        return () => {
            console.log('Behavior before component diappears');
        };
    }, []);

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}

export default WillUnmount;

