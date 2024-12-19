import { useState } from "react";
import "./App.css";
import { productData } from "./data/productData";
import Footer from "./components/Footer";
import BtnPrimary from "./components/BtnPrimary";
import ProductCards from "./components/ProductCards";
import SingleProduct from "./components/SingleProduct";

export default function App() {
  const [products, setProducts] = useState(productData);

  return (
    <>
      <div className="hero padding-2 wrapper">
        <div className="ta-cen">
          <hgroup>
            <h1 className="uppercase">WE SUPPLY GLITTER...</h1>
            <p className="lg">
              by color, size, shape, + material; from mini&#8209;jars up to bulk
              boxes!
            </p>
          </hgroup>
          <BtnPrimary>Shop Now</BtnPrimary>
        </div>
        <section className="filters-wrapper padding-b-1 grid gap-2 wrapper">
          <div className="grid gap-1">
            <h2 className="uppercase ls-1 ta-cen">Shop Glitter By...</h2>
            <ul className="row jc-cen gap-2">
              <li>
                <a className="grid pi-cen gap-half" href="#">
                  <img
                    src="/src/assets/svgs/icon-arist_palette.svg"
                    alt=""
                    width="50px"
                  />
                  <p className="small ta-cen ls-1">Color</p>
                </a>
              </li>
              <li>
                <a className="grid pi-cen gap-half" href="#">
                  <img
                    src="/src/assets/svgs/icon-flake_size.svg"
                    alt=""
                    width="50px"
                  />
                  <p className="small ta-cen ls-1">Flake Size</p>
                </a>
              </li>
              <li>
                <a className="grid pi-cen gap-half" href="#">
                  <img
                    src="/src/assets/svgs/icon-jars.svg"
                    alt=""
                    width="50px"
                  />
                  <p className="small ta-cen ls-1">Jar Size</p>
                </a>
              </li>
              <li>
                <a className="grid pi-cen gap-half" href="#">
                  <img
                    src="/src/assets/svgs/icon-sparkle_factor.svg"
                    alt=""
                    width="50px"
                  />
                  <p className="small ta-cen ls-1">Sparkle</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="grid gap-1">
            <h2 className="uppercase ls-1 ta-cen">Or filter by material</h2>
            <ul className="row jc-cen gap-2">
              <li>
                <a className="grid pi-cen gap-half" href="#">
                  <img
                    src="/src/assets/svgs/icon-blush_brushes.svg"
                    alt=""
                    width="50px"
                  />
                  <p className="small ta-cen ls-1">Cosmetic</p>
                </a>
              </li>
              <li>
                <a className="grid pi-cen gap-half" href="#">
                  <img
                    src="/src/assets/svgs/icon-biodegradable.svg"
                    alt=""
                    width="50px"
                  />
                  <p className="small ta-cen ls-1">Biodegradable</p>
                </a>
              </li>
              <li>
                <a className="grid pi-cen gap-half" href="#">
                  <img
                    src="/src/assets/svgs/icon-pvc.svg"
                    alt=""
                    height="50px"
                  />
                  <p className="small ta-cen ls-1">PVC Craft</p>
                </a>
              </li>
              <li>
                <a className="grid pi-cen gap-half" href="#">
                  <img
                    src="/src/assets/svgs/icon-polyester.svg"
                    alt=""
                    width="50px"
                  />
                  <p className="small ta-cen ls-1">Polyester</p>
                </a>
              </li>
              <li>
                <a className="grid pi-cen gap-half" href="#">
                  <img
                    src="/src/assets/svgs/icon-hybrid_poly.svg"
                    alt=""
                    width="50px"
                  />
                  <p className="small ta-cen ls-1">Hybrid Poly</p>
                </a>
              </li>
              <li>
                <a className="grid pi-cen gap-half" href="#">
                  <img
                    src="/src/assets/svgs/icon-sample_bags.svg"
                    alt=""
                    width="50px"
                  />
                  <p className="small ta-cen ls-1">Sample Bags</p>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="featured-products padding-2 grid gap-1 wrapper">
        <h2 className="uppercase ls-1 ta-cen">Featured Products</h2>
        <div className="scroller-outer">
          <ul className="scroller-inner padding-1 row gap-1">
            {products
              .filter((product) => product.isFeatured)
              .map((product) => (
                <li
                  data-product-id={product.id}
                  key={product.id}
                  className="scroll-item"
                >
                  <img
                    src={product.images.frame}
                    alt={product.name}
                    width="200px"
                    loading="lazy"
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
      <section
        className="featured-services padding-2 wrapper"
        aria-label="Check out our other services"
      >
        <div className="featured-service">
          <div className="img-wrapper">
            <img
              src="./src/assets/images/other_assets/glitter-face_blue.png"
              alt=""
            />
          </div>
          <div>
            <h2 className="uppercase">Glitter University</h2>
            <p>Learn How to Glitter Your World</p>
            <a href="#">
              Learn More{" "}
              <span className="visually-hidden">about Glitter University</span>
            </a>
          </div>
        </div>
        <div className="featured-service">
          <div className="img-wrapper">
            <img
              src="./src/assets/images/other_assets/glitter-face_gold.png"
              alt=""
            />
          </div>
          <div>
            <h2 className="uppercase">Glitter Club</h2>
            <p>Earn Discounts + Exclusive Offers</p>
            <a href="#">
              Learn More{" "}
              <span className="visually-hidden">about Glitter Club</span>
            </a>
          </div>
        </div>
        <div className="featured-service">
          <div className="img-wrapper">
            <img
              src="./src/assets/images/other_assets/glitter-lips_purple.png"
              alt=""
            />
          </div>
          <div>
            <h2 className="uppercase">Glitter My World</h2>
            <p>Network with Other Glitter Enthusiasts</p>
            <a href="#">
              Learn More{" "}
              <span className="visually-hidden">about Glitter My World</span>
            </a>
          </div>
        </div>
      </section>
      <ProductCards products={products} />
      <SingleProduct product={products[1]} />
      <Footer />
    </>
  );
}
