import Carousel from 'react-bootstrap/Carousel';
import Characters from '../Img/Characters__.jpg';
import Movies from '../Img/star-wars-movies.jpg';
import Principal from '../Img/star-wars-home.jpeg';



function Home() {
    return (
      <Carousel>
        <Carousel.Item>
        <div className='container-img'>
          <img
            className="d-block w-100"
            src={Principal}
            alt="First slide"
          />
          </div>
          
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='container-img'>
          <img
            className="d-block w-100"
            src={Movies}
            alt="Second slide"
          />
          </div>
  
          <Carousel.Caption>
            <h3>Movies</h3>
            <p>Know more about your favourites movies</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className='container-img'>
          <img
            className="d-block w-100"
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
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Home;