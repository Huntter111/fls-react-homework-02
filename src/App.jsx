import './App.scss'

import Login from './components/Login/Login'
import Ticket from './components/Ticket/Ticket'
import UnorderedList from './components/UnorderedList/UnorderedList'
import Resources from './components/Resources/Resources'
import Translator from './components/Translator/Translator'
import Kitchen from './components/Kitchen/Kitchen'

function App() {
	return (
		<div className="my-0 m-auto max-w-[1440px] px-4">
			<Login />
			<Ticket />
			<Translator />
			<UnorderedList />
			<Resources />
			<Kitchen />
		</div>
	)
}

export default App
