import React, { PureComponent } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';

export class Header extends PureComponent {
    render() {
        return <header className="header">
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography type="title" color="inherit">
                        <Link to="/">
                            Beer market
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>;
    }
}