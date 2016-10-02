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
                        <div className="scroller clearfix">
                            <div className="col-xs-4 caption scroller__text">Сумма заявки</div>
                            <div className="col-xs-10 input-group field scroller id18114">
                                <div className="col-xs-8 scroller__body">
                                    <Scroller name="summa" curValue="3000" minValue="1000" maxValue="50000" step="100"/>
                                </div>
                                <div className="formatted col-xs-3 scroller__input">
                                    <input type="text" data-a-sep=" " data-a-dec="," data-v-min="0" data-v-max="99999" className="full-width" />
                                </div>
                                <div className="col-xs-3 scroller__measure">руб.</div>
                            </div>
                        </div>

                        <div className="scroller clearfix">
                            <div className="col-xs-4 caption scroller__text">Срок заявки</div>
                            <div className="col-xs-10 input-group field scroller id673">
                                <div className="col-xs-8 scroller__body">
                                    <Scroller name="period" curVal="30" minVal="1" maxValue="48" step="1"/>
                                </div>
                                <div className="formatted col-xs-3 scroller__input">
                                    <input type="text" data-a-sep=" " data-a-dec="," data-v-min="0" data-v-max="99"  className="full-width" />
                                </div>
                                <div className="col-xs-3 scroller__measure">дней</div>
                            </div>
                        </div>

                        <div className="scroller clearfix">
                            <div className="col-xs-4 caption scroller__text">Ставка</div>
                            <div className="col-xs-10 input-group field scroller id85653">
                                <div className="col-xs-8 scroller__body">
                                    <Scroller  name="percent" curValue="0.2" minValue="0" maxValue="2.0" step="0.1"/>
                                </div>
                                <div className="formatted col-xs-3 scroller__input">
                                    <input type="text" data-a-sep=" " data-a-dec="," data-v-min="0" data-v-max="9.9" className="full-width" />
                                </div>
                                <div className="col-xs-3 scroller__measure">% в день</div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}