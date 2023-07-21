// import { useContext } from 'react'
// import { AppContext } from '../../../../context'
import { useEffect, useState } from 'react'
import { store } from '../../../../store'

export const UserPersonalInfo = () => {
	// const { userData, dispatch } = useContext(AppContext)
	// const { name, age, email, phone } = userData
	useState(store.getState())
	// useEffect(() => {
	// 	store.subscribe(() => {
	// 		store.getState()
	// 	})
	// }, [])

	const { name, age } = store.getState()

	const onUserUpdate = () => {
		const { name, email, phone } = store.getState()
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
