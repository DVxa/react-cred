/**
 * Created by V.Minyailov-book on 24.10.2016.
 */

import React, { Component } from 'react';

import {green500, orange500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Header, MainMenu,
    LeftMenu, LogoBlock,
    Footer
} from '../commons';


const muiTheme = getMuiTheme({
    palette: {
        primary1Color: green500,
        accent1Color: orange500
    }
});

export default class PageLayuot extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <header className="header">
                        <Header />
                    </header>
                    <main className="content">
                        <div className="row">
                            <div className="col-xs-3">
                                <LeftMenu />
                            </div>
                            <div className="col-xs-11">
                                <LogoBlock />
                                <MainMenu />
                                {this.props.children}
                            </div>
                        </div>
                    </main>
                    <footer className="footer">
                        <Footer />
                    </footer>
                </div>
            </MuiThemeProvider>
        )
    }
}