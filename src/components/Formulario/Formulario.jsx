
import React, { useState } from 'react';

import "./Formulario.css"

const Formulario = ({ onSubmit }) => {

	// usamos un solo estado para almacenar todos los valores del formulario
	const [formData, setFormData] = useState({
		name: '',
		age: '',
		url_img: '',
		email: ''
	});

	// función para manejar los cambios en los campos del formulario
	const handleChange = (e) => {

		// obtenemos el nombre y valor del campo
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value  // actualizamos el valor del campo correspondiente
		});
	};

	// función para manejar el envío del formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		onSubmit(formData); // enviamos los datos al componente padre
		
		// reiniciamos los valores del formulario
		setFormData(
			{ 
				name: '', 
				age: '',
				url_img: '',
				email: ''
			}
		);  
	};

	return (
		<>
			<h2>Soy el Formulario</h2>
			<form className="data" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Nombre:</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label htmlFor="age">Edad:</label>
					<input
						type="number"
						name="age"
						value={formData.age}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label htmlFor="age">IMG FOTO:</label>
					<input
						type="text"
						name="url_img"
						value={formData.url_img}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email" 
						value={formData.email}  
						onChange={handleChange} 
					/>
				</div>
				<div className="botonera">
					<button type="submit">Enviar</button>
				</div>
				
			</form>
		</>
	);
};
export default Formulario;
