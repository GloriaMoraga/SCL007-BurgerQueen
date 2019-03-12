import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-iu/core/ToolBar'
import Typography from '@material-ui/core/Typography'

const NavBar = ()=> {
 return(
<div>
    <AppBar position="static">
        <Toolbar>
            <Typography variant ="title" color ="inherit">
                React & Material-Ui
            </Typography>
        </Toolbar>
    </AppBar>
</div>

 )

}

export default NavBar;