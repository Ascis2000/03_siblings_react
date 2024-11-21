
import React, { useState } from 'react';

import "./App.css"
import { EmailContext } from './context/EmailContext'

import Card from './components/Card';
import Head from './components/Head';
import Formulario from './components/Formulario';

const App = () => {

	// ESTADO
	// variable 'datosFormulario' con el valor 'Madrid'
	// Funcion asociada del Estado: setFormData()
	// cada vez que cambien los datos de formData se actualizaran automaticamwente
	const [datosFormulario, setDatosFormulario] = useState(
		{ 
			name: '', 
			age: '',
			url_img: '',
			email: ''
		}
	);

	return (
		<div className="boxApp">
			<h2>Comunicación entre Siblings</h2>

			<EmailContext.Provider value={ datosFormulario.email }>
				<Head></Head>
				<Formulario onSubmit={setDatosFormulario} />
				<Card dataCard={datosFormulario} />
			</EmailContext.Provider>
		</div>
	);
};
export default App;
