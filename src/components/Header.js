import { Link } from "react-router-dom"

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Mario's Reviews</div>
      </Link>
    </nav>
  )
}

export default Header