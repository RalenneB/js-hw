import "./ServicesContainer.scss";
import respo from "../img/icon-ultra-responsive.png";
import award from "../img/icon-award-winning-design.png";
import support from "../img/icon-online-support.png";

function ServicesContainer() {
  return (
    <div className="ServicesContainer">
      <div className="services_container-items">
        <h5>Our Services</h5>
        <h3>Why choose Agency theme</h3>
        <div className="services_container-items--items">
          <div className="services_container-items--items_elems">
            <img src={respo}
              alt="Responsiveness"
            />
            <h4>Ultra Responsive</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              hendrerit in erat nec fermentum vestibulum.
            </p>
          </div>
          <div className="services_container-items--items_elems">
            <img
              src={award}
              alt="Responsiveness"
            />
            <h4>Award Winning Design</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              hendrerit in erat nec fermentum vestibulum.
            </p>
          </div>
          <div className="services_container-items--items_elems">
            <img src={support}
              alt="Responsiveness"
            />
            <h4>Support & Updates</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              hendrerit in erat nec fermentum vestibulum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesContainer;
