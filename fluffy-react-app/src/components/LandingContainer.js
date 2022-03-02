import "./LandingContainer.scss";
import rightImg from "../img/uploading-illustration.png";

function LandingContainer() {
  return (
    <div className="LandingContainer">
      <div className="text_container">
        <div className="text_container-items">
          <h5>An Agency That Helps You</h5>
          <h1>Grow your Business</h1>
          <p>
            Build an award winning website that grows your business with the
            help of Last Door. Our 15+ years of experience in building websites
            have grown businesses of 1000+ clients.
          </p>
          <button type="button" className="landing_page--button">
            Get Your Free Consultation Now
          </button>
        </div>
      </div>
      <div className="img_container">
        <img className="img-block"src={rightImg}  alt="Girl with bookshelf" />
      </div>
    </div>
  );
}

export default LandingContainer;
