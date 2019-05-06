import React from 'react';

function Timer(){
    return (
        <div>
            <h1>Collective Time</h1>
            <h2>00:00:00</h2>
            <h1>User Time</h1>
            <h2>00:00:00</h2>
            <h3>Current Users</h3>
            <h4></h4>
        </div>
    );
}

Timer.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Timer;