import perfumeImage from "../../assets/images/image-product-desktop.jpg";
import perfumeImageMobile from "../../assets/images/image-product-mobile.jpg";
import cartIcon from "../../assets/images/icon-cart.svg";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="image-div">
        <img
          className="img-desktop"
          src={perfumeImage}
          alt="Imagem de perfume"
        />
        <img
          className="img-mobile"
          src={perfumeImageMobile}
          alt="Imagem de perfume"
        />
      </div>
      <div className="description-div">
        <span className="normal-text" id="title">
          P E R F U M E
        </span>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p className="normal-text">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="price">
          <h1>$149.99</h1>
          <span className="old-price">$169.99</span>
        </div>
        <button>
          <a href="">
            <img src={cartIcon} alt="cart-icon" />
            <span>Add to Cart</span>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Card;
