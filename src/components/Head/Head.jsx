
import { useContext} from 'react'
import { EmailContext } from '../../context/EmailContext';

const Head = () => {

	const email = useContext(EmailContext); // Leer el valor del contexto

	return (
	
		<header>
			<h2>Soy el Head {email}</h2>
		</header>
	)
}

export default Head;
