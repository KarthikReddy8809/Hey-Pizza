import {createStore} from "redux";
const initialState={
    items:[],
    prices:100,
    nextId:1
}

function Reducer(state=initialState,action){
    switch(action.type){
        case "addToCart":
            const newItem={id:state.nextId,
                           name:action.payload.name,
                           image:action.payload.image,
                           prices:action.payload.prices,
                        };
            return {
                ...state,
                items:[...state.items,newItem],
                nextId:state.nextId+1
            }
        default:
            return state
        
    }

}

const store=createStore(Reducer)

export default store;