/**
 * Created by V.Minyailov-book on 24.10.2016.
 */

import React, { Component } from 'react';


export default class PageScheme extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <header className="header">
                    <MyAppBar />
                </header>
                <main className="content">
                    <div className="row">
                        {/*Left Menu*/}
                        <div className="col-xs-3">
                            <MyLeftMenu />
                        </div>
                        {/*Main Content*/}
                        <div className="col-xs-11">

                        </div>
                    </div>
                </main>
                <footer className="footer">
                    <Footer />
                </footer>
            </div>
        )
    }
}