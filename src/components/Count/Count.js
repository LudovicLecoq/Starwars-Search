import './count.css'

export default function Count({count}) {
  return (
    <div className="count-container">
        <p>{count === 0 ? "Aucun résultat" 
        : 
        `${count} résult${count > 1 ?"s":""}`
        }</p>
    </div>
  )
}
