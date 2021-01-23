import './SeasonDisplay.css';
import React from 'react';

const getseason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const config={
    summer: {
        text: 'sard nist ke!' ,
        icon: 'sun',
        },
        winter: {
            text: 'cheghadr sarde!' ,
            icon: 'snowflake',
        },
};

export default function SeasonDisplay(props) {
    const season = getseason(props.lat, new Date().getMonth());
    const {text , icon}=config[season];
    
    return (
        <div className={`season-display ${season}`}>
                <i className={`icon-left massive ${icon} icon`} />
               <h1> {text} </h1>
                <i className={`icon-right massive ${icon} icon`} />
        </div>
    );
};
