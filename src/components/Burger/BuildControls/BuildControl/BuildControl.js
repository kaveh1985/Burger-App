import React from 'react';
import classes from './BuildControl.module.css';


const BuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
        <div className={classes.label}>{props.label}</div>
        <button onClick={props.Removed} className={classes.Less} disabled={props.disabled}>Less</button>
        <button onClick={props.Added} className={classes.More}>More</button>
     </div>
    )
}

export default BuildControl;