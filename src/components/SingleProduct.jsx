import BtnPrimary from "./BtnPrimary";

export default function SingleProduct({ product }) {
  return (
    <div className="single-product-wrapper padding-2">
      <h1 className="uppercase ls-1">{product.name}</h1>
      <div className="grid gap-1 margin-bs-1">
        <div className="single-product-img-wrapper">
          <img src={product.images.featured} alt="" />
        </div>
        <div className="single-product-options">
          <div>
            <p className="ta-cen lg ls-1">Options:</p>
            {product.flakeSizes.map((size) => {
              return <p key={size.size}>{size.size}</p>;
            })}
            <p>
              Price: ${product.flakeSizes[0].packagingOptions[0].sizes[0].price}
            </p>
          </div>
          <BtnPrimary>Add to Cart</BtnPrimary>
        </div>
      </div>
      <div className="single-product-tabs">
        <ul>
          <li>
            <strong>Name:</strong> {product.name}
          </li>
          <li>
            <strong>Description:</strong> {product.description}
          </li>
          <li>
            <strong>Origin:</strong> {product.origin}
          </li>
          <li>
            <strong>Materials:</strong> {product.materials[0].typeDetails}
          </li>
        </ul>
      </div>
    </div>
  );
}
