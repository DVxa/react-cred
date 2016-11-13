/**
 * Created by V.Minyailov-book on 08.11.2016.
 */
import myDealListReducer from '../reducers/MyDealListReducer';
import myOfferListReducer from '../reducers/MyOfferlListReducer';

export default function listsReducer(state = {}, action) {
    return {
        ...state,
        myDeals:  myDealListReducer(state.myDeals, action),
        myOffers: myOfferListReducer(state.myOffers, action)
    }
}