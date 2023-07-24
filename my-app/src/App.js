// import { useState } from 'react'
// import { useEffect, useReducer } from 'react'
import { useEffect, useState } from 'react'
import { Header, UserBlock } from './components'
import styles from './app.module.css'
// import { AppContext } from './context'
import { store } from './store'
import { appReducer } from './reducer'

// import { AppContextProvider } from './app-context-provider'

const getUserFromServer = () => ({
	id: 'a11100',
	name: 'Иван',
	age: 23,
	email: 'ivan@MediaList.ru',
	phone: '+375297777777',
})

const getAnotherUserFromServer = () => ({
	id: 'a77700',
	name: 'Егор',
	age: 14,
	email: 'egor@tut.by',
	phone: '+375447777777',
})

export const App = () => {
	// const [userData, setUserData] = useState({})

	// const dispatch = (action) => {
	// 	const newState = reducer(userData, action)

	// 	setUserData(newState)
	// }
	// const [userData, dispatch] = useReducer(reducer, {})
	const [state, setState] = useState(store.getState())
	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState())
		})

		return () => unsubscribe()
	}, [])
	// useEffect(() => {
	// 	store.subscribe(() => {
	// 		store.getState()
	// 	})
	// }, [])

	// const unsubscribe = store.subscribe()

	useEffect(() => {
		const userDataFromServer = getUserFromServer()

		// setUserData(userDataFromServer)
		store.dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer })
	}, [])

	const onUserChange = () => {
		const newUserDataFromServer = getAnotherUserFromServer()

		// setUserData(newUserDataFromServer)
		store.dispatch({ type: 'SET_USER_DATA', payload: newUserDataFromServer })
	}

	return (
		// <AppContext.Provider value={{ userData, dispatch }}>
		<div className={styles.app}>
			<Header />
			<hr />
			<UserBlock />
			<button onClick={onUserChange}>Сменить пользователя</button>
		</div>
		// </AppContext.Provider>
	)
}

{
	/* <AppContextProvider.Provider
themeValue={{ theme: 'light' }}
userValue={userData}
appConfigValue={null}
>
<div className={styles.app}>
  <Header />
  <hr />
  <UserBlock />
</div>
</AppContextProvider.Provider> */
}
