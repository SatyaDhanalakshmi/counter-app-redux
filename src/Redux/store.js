import {createStore} from 'redux';
const initialState={
    count:0
}
function counterReducer(state=initialState,action){
    switch(action.type){
        case 'increment':
            return{...state, count:state.count + action.payload}
        case 'decrement':
            return{...state, count:state.count - action.payload}
        default:
            return state;
    }

}
 const store=createStore(counterReducer);
 export default store;