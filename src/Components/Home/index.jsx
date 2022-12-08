import Carousel from 'react-bootstrap/Carousel';
import Characters from '../Img/Characters__.jpg';
import Movies from '../Img/star-wars-movies.jpg';
import Principal from '../Img/star-wars-home.jpeg';
import './styles.css';
import {Link} from 'react-router-dom';



function Home() {
    return (
      <Carousel className='carousel'>
        <Carousel.Item>
        <div className='container-img'>
          <img
            src={Principal}
            alt="First slide"
          />
          </div>
        </Carousel.Item>


        <Carousel.Item>
          <Link to='/Movies'>
          <div className='container-img'>
          <img 
            src={Movies}
            alt="Second slide"
          />
          </div>
  
          <Carousel.Caption>
            <h3>Movies</h3>
            <p>Know more about your favourites movies</p>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>


        <Carousel.Item>
          <Link to='/Cards'>
        <div className='container-img'>
          <img
            src={Characters}
            alt="Third slide"
          />
          </div>
  
          <Carousel.Caption>
            <h3>Characters</h3>
            <p>
              Review about the iconic characters. Who is your favourite?
            </p>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Home;