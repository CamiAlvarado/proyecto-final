import './styles.css'
import { Link } from 'react-router-dom'
import starwars from '../../Components/Img/star-wars-logo.jpg';


const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <div className="nav__container--brand>">
          <div className="nav__container--img">
            <img src={starwars} alt="star-wars-logo" />
          </div>

        </div>
        <div className="nav__menu">
          <ul>
            <li> <Link to='/'> Home</Link></li>
            <li> <Link to='/Cards'> Characters</Link></li>
            <li> <Link to='/Movies'> Movies</Link></li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav