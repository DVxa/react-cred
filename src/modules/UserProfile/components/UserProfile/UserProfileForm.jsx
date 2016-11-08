/**
 * Created by V.Minyailov-book on 24.10.2016.
 */

import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class UserProfileForm extends Component {
    constructor(props) {
        super(props);
        this.onSaveButtonClickHandler = this.onSaveButtonClickHandler.bind(this);
        this.state = {
            selectRegionValue: 1,
            selectPositionValue: 1,
        };
    }

    onSaveButtonClickHandler() {
        alert("Изменения сохранены");
    }

    render() {
        return (
            <form method="post" id="data" className="validatable">
                <input type="hidden" name="agreementSigned" value="true" />
                <input type="hidden" name="leadId" value="0" />
                <div className="row">
                    <div className="col-xs-7">
                        <TextField floatingLabelText="Фамилия"/>
                    </div>
                    <div className="col-xs-7">
                        <TextField floatingLabelText="Имя"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-7">
                        <TextField floatingLabelText="Отчество"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-7">
                        <div>
                            <SelectField
                                floatingLabelText="Регион"
                                disabled={false}
                                value={this.state.selectRegionValue}
                            >
                                <MenuItem value={1} primaryText="Москва" />
                                <MenuItem value={2} primaryText="Санкт-Петербург" />
                                <MenuItem value={3} primaryText="Новосибирск" />
                                <MenuItem value={4} primaryText="Рязань" />
                                <MenuItem value={5} primaryText="Тюмень" />
                                <MenuItem value={6} primaryText="Омск" />
                                <MenuItem value={7} primaryText="Барнаул" />
                                <MenuItem value={8} primaryText="Вологда" />
                            </SelectField>
                        </div>
                    </div>
                    <div className="col-xs-7">
                        <SelectField
                            floatingLabelText="Должность"
                            value={this.state.selectPositionValue}
                        >
                            <MenuItem value={1} primaryText="7й грейд" />
                            <MenuItem value={2} primaryText="8й грейд" />
                            <MenuItem value={3} primaryText="9й грейд" />
                            <MenuItem value={4} primaryText="10й грейд" />
                            <MenuItem value={5} primaryText="11й грейд" />
                            <MenuItem value={6} primaryText="12й грейд" />
                            <MenuItem value={7} primaryText="13й грейд" />
                            <MenuItem value={8} primaryText="14й грейд" />
                        </SelectField>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-7 col-xs-8 button-container">
                        <RaisedButton
                            label="Сохранить"
                            onClick={this.onSaveButtonClickHandler}
                            secondary={true}
                        />
                    </div>
                    <div className="col-xs-4"></div>
                </div>
            </form>
        )
    }
}
