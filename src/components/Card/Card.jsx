
import React from 'react';
import "./Card.css"

const Card = ({ dataCard }) => {
    return (

        <div className="card">
            <div className="card-content">
                <div className="info">
                    <strong>Nombre:</strong>
                    <label>{dataCard.name || 'a la espera de cargar "Nombre"'}</label>
                </div>

                <div className="info">
                    <strong>Edad:</strong>
                    <label>{dataCard.age || 'a la espera de cargar "Edad"'}</label>
                </div>

                <div className="info">
                    <strong>Email:</strong>
                    <label>{dataCard.email || 'a la espera de cargar "Email"'}</label>
                </div>

                <div class="image">
                    <img width="100" src={dataCard.url_img || 'a la espera de cargar "Imagen"'}/>
                </div>
            </div>
        </div>
    );
};

export default Card;
