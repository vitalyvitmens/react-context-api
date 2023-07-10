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

export const App = () => {
	const userData = getUserFromServer()

	return (
		<AppContext.Provider value={userData}>
			<div className={styles.app}>
				<Header />
				<hr />
				<UserBlock />
			</div>
		</AppContext.Provider>
	)
}

{/* <AppContextProvider.Provider
themeValue={{ theme: 'light' }}
userValue={userData}
appConfigValue={null}
>
<div className={styles.app}>
  <Header />
  <hr />
  <UserBlock />
</div>
</AppContextProvider.Provider> */}
