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
            <div className="row-padding">
                <div className="wrapper clearfix">
                    <div className="role">
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
                        <Paper>
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
                <div className="white-layout clearfix dealings">
                    <div className="wrapper clearfix"></div>
                </div>
            </div>
        )
    }
}