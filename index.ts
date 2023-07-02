import { createStore } from "./redux"

const initialState = { count: 50 }
type Actions = 
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'incrementBy', payload: number }
    | { type: 'decrementBy', payload: number }
    | { type: 'set', payload: number }
    
const reducer = (state: typeof initialState, action: Actions) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1}
        case 'decrement':
            return { count: state.count - 1}
        case 'incrementBy':
            return { count: state.count + action.payload}
        case 'decrementBy':
            return { count: state.count - action.payload}
        case 'set':
            return { count: action.payload }
        default:
            return state
    }
}

const store = createStore(initialState, reducer);

store.subscribe(newState => console.log('State changed!', newState.count));
store.subscribe(newState => {
    demo.innerText = newState.count.toString();
    myRange.value = newState.count.toString();
})

// myRange.addEventListener('input', (e) => {
//     const value = parseInt(e.target.value);
//     store.dispatch({ type: 'set', payload: value })
// });

window.dispatch = store.dispatch