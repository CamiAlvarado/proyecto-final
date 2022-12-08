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
          <ul className='unorderList'>
            <li> <Link className='li' to='/'> Home</Link></li>
            <li> <Link className='li' to='/Cards'> Characters</Link></li>
            <li> <Link className='li' to='/Movies'> Movies</Link></li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav