import Carousel from 'react-bootstrap/Carousel';


function Slider() {
    return (
      <Carousel>
        <Carousel.Item>
        <div className='container-img'>
          <img
            className="d-block w-100"
            // src={breakingbad}
            alt="First slide"
          />
          </div>
          
          <Carousel.Caption>
            <h3>Revisa nuestros clásicos</h3>
            <p>Conoce más sobre los clásicos de siempre.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='container-img'>
          <img
            className="d-block w-100"
            // src={bcs}
            alt="Second slide"
          />
          </div>
  
          <Carousel.Caption>
            <h3>Mejores series 2022</h3>
            <p>El año casi termina; revisa nuestro ranking de las mejores series 2022.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className='container-img'>
          <img
            className="d-block w-100"
            // src={hod}
            alt="Third slide"
          />
          </div>
  
          <Carousel.Caption>
            <h3>Ranking</h3>
            <p>
              Revisa el ranking de todos los tiempos. ¿Cuál es tu favorito?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Slider;