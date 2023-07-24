// import { useContext } from 'react'
// import { AppContext } from '../../../../context'
import { store } from '../../../../store'

export const UserPersonalInfo = () => {
	// const { userData, dispatch } = useContext(AppContext)
	// const { name, age, email, phone } = userData
  const state = store.getState();
	const { name, age } = state

	const onUserUpdate = () => {
		const { name, email, phone } = state
		const newUserData = { name, age: 30, email, phone }
		// setUserData(newUserData)
		store.dispatch({ type: 'SET_USER_DATA', payload: newUserData })
	}

	const onUserAgeDecrease = () => {
		store.dispatch({ type: 'SET_USER_AGE', payload: 15 })
	}

	return (
		<div>
			<h3>Персональные данные:</h3>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>
			<button onClick={onUserUpdate}>Обновить пользователя</button>
			<button onClick={onUserAgeDecrease}>
				Уменьшить возраст пользователя
			</button>
		</div>
	)
}
