import './count.css'

export default function Count({count}) {
  return (
    <div className="count-container">
        <p>{count === 0 ? "No result" 
        : 
        `${count} result${count > 1 ?"s":""}`
        }</p>
    </div>
  )
}
