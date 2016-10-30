import React, {Component} from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import { Step, Stepper, StepLabel} from 'material-ui/Stepper';

import LenderCalcForm from './LenderCalcForm';


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

export default class LenderContent extends Component {
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
                            <li className="col-xs-7">
                                <span>
                                    <Link to="/">Вы хотите взять в долг</Link>
                                </span>
                            </li>
                            <li className="col-xs-7 current">
                                <span>
                                    Вы хотите дать в долг
                                </span>
                            </li>
                        </ul>
                        <Paper>
                            <Stepper activeStep={1}>
                                <Step>
                                    <StepLabel style={styles.stepperStyles}>Рассчитайте суммы</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel style={styles.stepperStyles}>Рассмотрите запросы</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel style={styles.stepperStyles}>Заполните заявку</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel style={styles.stepperStyles}>Выдайте деньги</StepLabel>
                                </Step>
                            </Stepper>
                            <LenderCalcForm />
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