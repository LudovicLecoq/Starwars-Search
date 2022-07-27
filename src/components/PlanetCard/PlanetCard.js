
export default function PlanetCard({item}) {
    return (
        <li className="planet-item">
            <p>{item.name}</p>
            <p>{item.rotation_period}</p>
            <p>{item.diameter}</p>
            <p>{item.gravity}</p>
        </li>
    )
}
