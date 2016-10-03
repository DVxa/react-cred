import React, {Component} from 'react';
import Scroller from './Scroller';

export default class HomeCalcForm extends Component {
    constructor(props) {
        super(props);
        this.handlerCreateOffer = this.handlerCreateOffer.bind(this);
    }
    handlerCreateOffer() {
        console.log('this.handlerCreateOffer - click');
    }
    render() {
        return (
            <form>
                <div className="calculator clearfix">
                    <div className="scrollers">
                        <i className="triangle-icon"></i>
                        <Scroller name="Сумма"  inputName="data.amount" curValue="3000" minValue="1000" maxValue="50000" mask="999999"  step="100"  unit="руб."      />
                        <Scroller name="Срок"   inputName="data.period" curValue="30"   minVal="1"      maxValue="48"    mask="999"     step="1"    unit="дней"      />
                        <Scroller name="Ставка" inputName="data.rate"   curValue="0.2"  minValue="0"    maxValue="2.0"   mask="9.99"    step="0.05" unit="% в день"  />
                    </div>
                    <div className="calculator-result">
                        <div className="calculator-result__item-block">
                            <div className="calculator-result__item-block__text">Возьмёте:</div>
                            <span className="formatted" data-a-sep=" " data-v-min="0"
                                  data-v-max="999999999999999999">0</span>
                            руб.
                        </div>

                        <div className="calculator-result__item-block">
                            <div className="calculator-result__item-block__text">До:</div>
                            <span date-format="dd.MM.yyyy"></span>
                        </div>

                        <div className="calculator-result__item-block">
                            <div className="calculator-result__item-block__text">Отдадите:</div>
                            <span className="formatted" data-a-sep=" " data-a-dec="," data-v-min="0.00"
                                  data-v-max="999999999999999999.99">0</span>
                            руб.
                        </div>
                        <button className="btn" type="submit">Подать заявку</button>
                    </div>
                </div>
            </form>
        )
    }
}