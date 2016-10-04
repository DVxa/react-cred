import React, {Component} from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Step, Stepper, StepLabel} from 'material-ui/Stepper';

import HomeOffesrLoan from './HomeOffesrLoan';
import HomeCalcForm from './HomeCalcForm';


const stepperStyles = {
    fontSize: '20px'
};

export default class HomeContent extends Component {
    render() {
        return (
            <div className="content__first-block green-layout">
                <div className="wrapper clearfix adfox-centered">
                    <div className="adfox-inlined"></div>
                </div>
                <div className="role">
                    <div className="wrapper no-padding">
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
                                    <StepLabel style={stepperStyles}>Заполните заявку</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel style={stepperStyles}>Рассмотрите предложения</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel style={stepperStyles}>Заполните анкету</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel style={stepperStyles}>Получите деньги</StepLabel>
                                </Step>
                            </Stepper>
                            <HomeCalcForm />
                            <Divider />
                            <HomeOffesrLoan />
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