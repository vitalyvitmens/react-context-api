import { ThemeContext } from './theme-context'
import { UserDataContext } from './user-data-context'
import { AppConfigContext } from './app-config-context'

export const AppContextProvider = ({
	themeValue,
	userValue,
	appConfigValue,
}) => {
	return (
		<ThemeContext.Provider value={themeValue}>
			<UserDataContext.Provider value={userValue}>
				<AppConfigContext.Provider value={appConfigValue}>
					{/* {children} */}
				</AppConfigContext.Provider>
			</UserDataContext.Provider>
		</ThemeContext.Provider>
	)
}
