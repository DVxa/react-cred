import React, {Component} from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import { Step, Stepper, StepLabel} from 'material-ui/Stepper';

import HomeOffesrLoan from './HomeOffesrLoan';
import HomeCalcForm from './HomeCalcForm';


const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    stepperStyles: {
        fontSize: '20px'
    }
};

export default class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabValue: 1
        }

    }
    tabChangeHandler(event, value) {
        this.setState({
            tabValue: value
        });
    }
    render() {
        return (
            <div>
                <div className="content__first-block green-layout">
                    <div className="wrapper clearfix adfox-centered">
                        <div className="adfox-inlined"></div>
                    </div>


                    <div className="role">
                        <div className="wrapper no-padding">

                            {/*<Tabs onChange={this.tabChangeHandler}
                                  value={this.state.tabValue}>
                                <Tab label="Вы хотите взять в долг" value={1}>
                                    <div>
                                        <h2 style={styles.headline}>Вы хотите взять в долг</h2>
                                        <p>
                                            This is an example tab.
                                        </p>
                                    </div>
                                </Tab>
                                <Tab label="Вы хотите дать в долг" value={2}>
                                    <div>
                                        <h2 style={styles.headline}>Вы хотите дать в долг</h2>
                                        <p>
                                            This is another example tab 2.
                                        </p>
                                    </div>
                                </Tab>
                            </Tabs>*/}

                            <ul className="role-tabs clearfix">
                                <li className="col-xs-7 current">
                                    <span>
                                        Вы хотите взять в долг
                                    </span>
                                </li>
                                <li className="col-xs-7">
                                    <span>
                                        <Link to="/lender">Вы хотите дать в долг</Link>
                                    </span>
                                </li>
                            </ul>
                            <Paper zDepth={2}>
                                <Stepper activeStep={1}>
                                    <Step>
                                        <StepLabel style={styles.stepperStyles}>Заполните заявку</StepLabel>
                                    </Step>
                                    <Step>
                                        <StepLabel style={styles.stepperStyles}>Рассмотрите предложения</StepLabel>
                                    </Step>
                                    <Step>
                                        <StepLabel style={styles.stepperStyles}>Заполните анкету</StepLabel>
                                    </Step>
                                    <Step>
                                        <StepLabel style={styles.stepperStyles}>Получите деньги</StepLabel>
                                    </Step>
                                </Stepper>
                                <HomeCalcForm />
                                <div className="wrapper clearfix"></div>
                            </Paper>
                        </div>
                    </div>
                </div>
                <div className="white-layout clearfix dealings">
                    <div className="wrapper clearfix"></div>
                </div>
                {/*<div className="white-layout about-project">
                    <div className="wrapper clearfix">
                        <Paper zDepth={2}>
                            <HomeOffesrLoan />
                        </Paper>
                    </div>
                </div>*/}
            </div>
        )
    }
}