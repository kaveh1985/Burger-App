import React from 'react';
import Aux from '../../hoc/Auxx';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


const Layout = ( props ) => (
    <Aux>
       <Toolbar />
       <SideDrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;