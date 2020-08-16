import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxx';
import Backdrop from '../BackDrop/BackDrop';


const modal = (props) => (
    <Aux>
        <Backdrop  show={props.show} clicked={props.modalClosed}/>

            <div className={classes.Modal} 
               style={ { 
                         display: props.show ? '': 'none'
                        }
                     }
               >
                {props.children}
                
            </div>
    </Aux>
)

export default modal;