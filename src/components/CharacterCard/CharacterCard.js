
export default function CharacterCard({item}) {
    return (
        <li className="character-item">
            <p>{item.name}</p>
            <p>{item.height}</p>
            <p>{item.mass}</p>
            <p>{item.hair_color}</p>
            <p>{item.film}</p>
        </li>
    )
}
