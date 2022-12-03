import './styles.css'
import starwars from '../../Components/Img/Star_Wars_Logo.png';


const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <div className="nav__container--brand>">
          <div className="nav__container--img">
            <img src={starwars} alt="star-wars-logo" />
          </div>

        </div>
        <div class="nav__menu">
          <ul>
            <li>Home</li>
            <li>Characters</li>
            <li>Movies</li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav