import { Carousel } from "react-bootstrap"

const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
        className="d block w-100"
        style={{maxHeight: "500px", objectFit: 'cover'}}
        src="https://img.freepik.com/foto-gratis/concepto-collage-html-css-persona_23-2150062008.jpg?w=996&t=st=1700355292~exp=1700355892~hmac=86b946ae0045dd5d6548406ed422572b9bcf8f177dee059d45df9e13a5b35280" alt="slide1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img
        className="d block w-100"
        style={{maxHeight: "500px", objectFit: 'cover'}}
        src="https://img.freepik.com/foto-gratis/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010125.jpg?w=996&t=st=1700355178~exp=1700355778~hmac=c7ea83834bc7bfe33c66b97e90379dbe1edae2fef41a58955c0dbdbf394e1d15" alt="slide2" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img
        className="d block w-100"
        style={{maxHeight: "500px", objectFit: 'cover'}}
        src="https://img.freepik.com/foto-gratis/programador-profesional-trabajando-tarde-oscura-oficina_1098-18705.jpg?w=996&t=st=1700355230~exp=1700355830~hmac=955fddc8924ca75fed8d17284ad98c11fcaceedcca39d494b3a06178d41d3ff2" alt="slide3" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselHome