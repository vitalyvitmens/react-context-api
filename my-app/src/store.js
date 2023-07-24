import { appReducer } from './reducer'

const createStore = (reducer) => {
	let state


	return {
		dispatch: (action) => {
			state = reducer(state, action)
			console.log(state)
		},
		getState: () => state,
	}
}

export const store = createStore(appReducer)

store.dispatch({type: 'INIT' })
// import { createStore } from 'redux';
// import { appReducer, initialState } from './reducer';

// export const store = createStore(appReducer, initialState);
// store.dispatch({ type: 'INIT' });
