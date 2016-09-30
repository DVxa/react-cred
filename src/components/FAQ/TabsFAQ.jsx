import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

export default class TabsFAQ extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '2',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (value) {
        this.setState({
            value: value
        });
        console.log(value);
    };

    render() {
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="Все" value="1">
                    <div>
                        <h2>Все</h2>
                        <p>
                            This is an example tab.
                        </p>
                    </div>
                </Tab>
                <Tab label="О сервисе" value="2">
                    <div>
                        <h2>О сервисе</h2>
                        <p>
                            This is an example tab.
                        </p>
                    </div>
                </Tab>
                <Tab label="Заемщикам" value="3" >
                    <div>
                        <h2>Заемщикам</h2>
                        <p>
                            This is an example tab.
                        </p>
                    </div>
                </Tab>
                <Tab label="Кредиторам" value="4">
                    <div>
                        <h2>Кредиторам</h2>
                        <p>
                            This is another example tab.
                        </p>
                    </div>
                </Tab>
            </Tabs>
        )
    }
}
