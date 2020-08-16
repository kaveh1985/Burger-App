import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: "Salad", type: "salad" },
    {label: "Bacon", type: "bacon" },
    {label: "Cheese", type: "cheese" },
    {label: "Meat", type: "meat" }
];




const BuildControls = (props) => (
    <div className={classes.BuildControls}>
       <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
       {controls.map(ctrl => (
           <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                type={ctrl.type}
                Added={() => props.ingredientAdded(ctrl.type)}
                Removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
         ))}
         <button onClick={props.orderd} disabled={!props.purchasble} className={classes.OrderButton}>ORDER NOW</button>
    </div>
);

export default BuildControls;