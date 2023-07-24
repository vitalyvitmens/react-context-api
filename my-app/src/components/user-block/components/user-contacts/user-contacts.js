import { useState } from 'react'
// import { useContext } from 'react'
// import { AppContext } from '../../../../context'
import { store } from '../../../../store'

export const UserContacts = () => {
	const state = store.getState()
	const { email, phone } = state
	// const { email, phone } = useContext(AppContext)

	return (
		<div>
			<h3>Контакты:</h3>
			<div>Почта: {email}</div>
			<div>Телефон: {phone}</div>
		</div>
	)
}
