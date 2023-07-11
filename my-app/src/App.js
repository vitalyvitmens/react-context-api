import { useState, useEffect } from 'react'
import { Header, UserBlock } from './components'
import styles from './app.module.css'
import { AppContext } from './context'
import { AppContextProvider } from './app-context-provider'

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

const reducer = (state, action) => {
	const { type, payload } = action

	switch (type) {
		case 'SET_USER_DATA': {
			return payload
		}
		case 'SET_USER_AGE': {
			return {
				...state,
				age: payload,
			}
		}
		default:
			return state
	}
}

export const App = () => {
	const [userData, setUserData] = useState({})

	const dispatch = (action) => {
		const newState = reducer(userData, action)

		setUserData(newState)
	}

	useEffect(() => {
		const userDataFromServer = getUserFromServer()

		setUserData(userDataFromServer)
	}, [])

	const onUserChange = () => {
		const newUserDataFromServer = getAnotherUserFromServer()

		setUserData(newUserDataFromServer)
	}

	return (
		<AppContext.Provider value={{ userData, dispatch }}>
			<div className={styles.app}>
				<Header />
				<hr />
				<UserBlock />
				<button onClick={onUserChange}>Сменить пользователя</button>
			</div>
		</AppContext.Provider>
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
