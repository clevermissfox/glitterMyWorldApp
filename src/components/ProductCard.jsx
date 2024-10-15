export default function ProductCard({ productSrc, cardWidth }) {
  return <img src={productSrc} width={cardWidth} alt="" loading="lazy" />;
}
