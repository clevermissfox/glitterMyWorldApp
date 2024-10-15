import ProductCard from "./ProductCard";

export default function ProductCards({ products }) {
  return (
    <>
      {products && (
        <div className="row gap-1 padding-1">
          {products.map((product) => (
            <a data-product-id={product.id}>
              <ProductCard
                productSrc={product.images.card}
                cardWidth="300px"
                key={product.id}
              />
            </a>
          ))}
        </div>
      )}
    </>
  );
}
