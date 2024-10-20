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
      <div className="hero padding-2">
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
        <section className="filters-wrapper padding-b-1 grid gap-2">
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
      <div className="featured-products padding-2 grid gap-1">
        <h2 className="uppercase ls-1 ta-cen">Featured Products</h2>
        <div className="scroller-outer">
          <div className="scroller-inner padding-1 row gap-1">
            {products.map((product) => (
              <a href="#" data-product-id={product.id} key={product.id}>
                <img
                  src={product.images.frame}
                  alt={product.name}
                  width="200px"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <ProductCards products={products} />
      <SingleProduct product={products[1]} />
      <Footer />
    </>
  );
}
