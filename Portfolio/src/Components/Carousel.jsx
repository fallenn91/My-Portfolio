import './CarouselStyle.css';

function Carousel() {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-item-content carousel-item-1">
            <h2>STRENGTHS</h2>
            <ul>
              <li>Attention to detail</li>
              <li>Collaboration Skills</li>
              <li>Adaptability</li>
            </ul>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-item-content carousel-item-2">
            <h2>WEAKNESSES</h2>
            <ul>
              <li>Limited experience</li>
              <li>Lack of real-world experience</li>
            </ul>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-item-content carousel-item-3">
            <h2>OPPORTUNITIES</h2>
            <ul>
              <li>Growing demand for web developers</li>
              <li>Continuous learning</li>
              <li>Specialization in emerging technologies</li>
            </ul>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-item-content carousel-item-4">
            <h2>THREATS</h2>
            <ul>
              <li>High competition in the tech industry</li>
              <li>Automation and AI</li>
            </ul>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
