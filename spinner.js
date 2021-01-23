import React from 'react';

const spinner = (props) => {
    return (
        <div class="ui active dimmer">
            <div class="ui text loader">{props.message}</div>
        </div>

    );
};

spinner.defaultProps = {
    message: 'loading...'
};

export default spinner;