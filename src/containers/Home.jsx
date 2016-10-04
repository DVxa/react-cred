import React, { Component } from 'react';
import { green500, orange500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Header } from '../components/Header';
import Footer from "../components/Footer";
import HomeContent from '../components/Home/HomeContent';
import HomeAbout from '../components/Home/HomeAbout';


const muiTheme = getMuiTheme({
    palette: {
        primary1Color: green500,
        accent1Color: orange500
    }
});

export default class Home extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Header />
                    <main className="content">
                        <HomeContent />
                        <HomeAbout />
                    </main>
                    <Footer />
                </div>
            </MuiThemeProvider>
        );
    }
}
