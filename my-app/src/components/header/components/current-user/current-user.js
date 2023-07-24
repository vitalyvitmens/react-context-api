// import { useContext } from 'react'
// import { AppContext } from '../../../../context'
import { store } from '../../../../store'

export const CurrentUser = () => {
	// const { name } = useContext(AppContext)
  const state = store.getState();
	const { name } = state

	return (
		<div>
			<div>Текущий пользователь: {name}</div>
		</div>
	)
}
