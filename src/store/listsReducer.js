/**
 * Created by V.Minyailov-book on 08.11.2016.
 */
import myDealListReducer from '../modules/Deals/components/MyDealList/MyDealListReducer';

export default function listsReducer(state = {}, action) {
    return {
        ...state,
        myDeals: myDealListReducer(state.myDeals, action)
    }
}