import React from 'react';
import PropTypes from 'prop-types';
import './characterDetails.css';

export default function CharacterDetails({item}) {
    return (
        <div className="details-container">
            <h3 className='details-title'>{item.name}</h3>
            <div className="details-content">
                <p className="details-item">Gender : {item.gender}</p>
                <p className="details-item">Height : {item.height}</p>
                <p className="details-item">Mass : {item.mass}</p>
                <p className="details-item">Eyes color : {item.eye_color}</p>
                <p className="details-item">Skin Color : {item.skin_color}</p>
                <p className="details-item">Birth year : {item.birth_year}</p>
            </div>
        </div>
    )
}

CharacterDetails.propTypes = {
    item: PropTypes.object.isRequired
}