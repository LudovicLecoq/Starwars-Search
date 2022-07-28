import PropTypes from 'prop-types';

export default function PlanetDetails({item}) {
  return (
    <div className="details-container">
    <h3 className='details-title'>{item.name}</h3>
    <div className="details-content">
        <p className="details-item">Population : {item.population}</p>
        <p className="details-item">Terrain : {item.terrain}</p>
        <p className="details-item">Surface water : {item.surface_water}%</p>
        <p className="details-item">Gravity : {item.gravity}</p>
        <p className="details-item">Diamater : {item.diameter}</p>
        <p className="details-item">Rotation period : {item.rotation_period}H</p>
        <p className="details-item">Orbital period : {item.orbital_period} days</p>

    </div>
</div>
  )
}

PlanetDetails.propTypes = {
  item: PropTypes.object.isRequired,
}