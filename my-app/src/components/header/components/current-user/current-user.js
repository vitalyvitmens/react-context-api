import { useState } from 'react'
// import { useContext } from 'react'
// import { AppContext } from '../../../../context'
import { store } from '../../../../store'

export const CurrentUser = () => {
	// const { name } = useContext(AppContext)
	const { name } = useState(store.getState())
	return (
		<div>
			<div>Текущий пользователь: {name}</div>
		</div>
	)
}
