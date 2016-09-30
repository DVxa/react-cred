import React, { Component } from 'react';

import {green500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Header } from '../components/Header';
import Content from '../components/Content';
import TabsFAQ from '../components/FAQ/TabsFAQ';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: green500,
    }
});

export default class FAQ extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Header />
                    <main className="content">
                        <Content title="Вопрос-Ответ"/>
                        <div className="wrapper">
                            <div className="row">
                                <TabsFAQ />
                            </div>
                        </div>
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}
