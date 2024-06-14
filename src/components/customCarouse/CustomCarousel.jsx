import Carousel from "react-bootstrap/Carousel";
import a from "../../assets/a.jpg";
import b from "../../assets/b.jpg";
import c from "../../assets/c.jpg";

export const CustomCarousel = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={a} alt="First slide" />
        <Carousel.Caption className="bg-dark p-2 rounded text-light">
          <h5>Easy Book Search</h5>
          <p>
            Find your desired books quickly with our powerful search engine.
            Browse by title, author, genre, or ISBN and get instant results.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={b} alt="Second slide" />
        <Carousel.Caption className="bg-dark p-2 rounded text-light">
          <h5>Effortless Borrowing</h5>
          <p>
            Streamline the borrowing process with our user-friendly interface.
            Reserve, renew, and return books with just a few clicks.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={c} alt="Third slide" />
        <Carousel.Caption className="bg-dark p-2 rounded text-light">
          <h5>Personalized Recommendations</h5>
          <p>
            Discover new favorites with personalized book recommendations based
            on your reading history and preferences. Never run out of great
            reads!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
