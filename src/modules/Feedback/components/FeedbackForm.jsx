import React, {Component} from 'react';
import EmailInput from './EmailInput';
import NameInput from './NameInput';
import TextareaInput from './TextareaInput';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {browserHistory} from 'react-router';
import * as FeedbackActions from '../../../actions/FeedbackActions';
import {Link} from 'react-router';

// Utils
import {ApiClient} from '../../../utils/ApiClient';
// Const
import {PATH_TO_SERVER} from '../../../utils/Constants';


class FeedbackForm extends Component {
    constructor(props) {
        super(props);
        this.onPostButtonClickHandler = this.onPostButtonClickHandler.bind(this);
    }

    onRegisterButtonClickHandler = () => {
        browserHistory.push("/register");
    };

    onPostButtonClickHandler = () => {
        let {email, name, text} = this.props.form;

        var body =
            'email=' + encodeURIComponent(email.value) +
            '&name=' + encodeURIComponent(name.value) +
            '&text=' + encodeURIComponent(text.value);

        let url = PATH_TO_SERVER + "feedback/add";

        alert ('Отправка в разработке \n' + body);

        /*
        ApiClient.postNoAuth(url, body)
            .then(
                (data) => {
                    console.log(data);

                    if (data){
                        localStorage.setItem('auth-token', data.hash);
                        localStorage.setItem('uid', data.UID);
                        this.setState({modalIsOpen: false});
                        browserHistory.push('/myoffers/borrow');
                    }
                }
            );
            */
    };

    render() {
        let {email, name, text} = this.props.form;

        return (
            <form method="post" id="data" className="validatable">
                <Subheader style={styles.subheader}>
                    Введите ваше сообщение
                </Subheader>
                <div className="row">
                    <div className="col-xs-5 col-xs-offset-2">
                        <EmailInput
                            value={email.value}
                            valid={email.valid}
                            dirty={email.dirty}
                            errors={email.errors}
                            onChange={this.props.actions.setEmail}
                        />
                    </div>
                    <div className="col-xs-5">
                        <NameInput
                            value={name.value}
                            valid={name.valid}
                            dirty={name.dirty}
                            errors={name.errors}
                            onChange={this.props.actions.setName}
                        />
                    </div>
                </div>
                <div className="row separator-top"></div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-2">
                        <TextareaInput
                            value={text.value}
                            valid={text.valid}
                            dirty={text.dirty}
                            errors={text.errors}
                            onChange={this.props.actions.setText}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-xs-offset-10">
                        <RaisedButton
                            label="Отправить"
                            onClick={this.onPostButtonClickHandler}
                            secondary={true}
                            fullWidth={true}
                            disabled={!email.valid || !name.valid || !text.valid}
                        />
                    </div>
                </div>
            </form>
        )
    }
}


const styles = {
    subheader: {
        backgroundColor: '#efefef'
    }
};

function mapStateToProps(state) {
    return {
        form: state.forms.feedback,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(FeedbackActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);