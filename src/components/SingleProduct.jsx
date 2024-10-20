import { useEffect, useMemo, useReducer } from "react";
import BtnPrimary from "./BtnPrimary";
import Dropdown from "./Dropdown";

const initialState = (product) => ({
  flakeSize: product.flakeSizes[0].size,
  packaging: product.flakeSizes[0].packagingOptions[0].type,
  size: product.flakeSizes[0].packagingOptions[0].sizes[0].size,
  price: product.flakeSizes[0].packagingOptions[0].sizes[0].price,
});

function reducer(state, action) {
  switch (action.type) {
    case "SET_FLAKE_SIZE":
      return { ...state, flakeSize: action.payload };
    case "SET_PACKAGING":
      return { ...state, packaging: action.payload };
    case "SET_SIZE":
      return { ...state, size: action.payload };
    case "SET_PRICE":
      return { ...state, price: action.payload };
    case "UPDATE_ALL":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

const findFlakeSizeObj = (product, flakeSize) =>
  product.flakeSizes.find((flake) => flake.size === flakeSize);

const findPackagingObj = (flakeSizeObj, packaging) =>
  flakeSizeObj?.packagingOptions.find(
    (option) => option.type.toLowerCase() === packaging.toLowerCase()
  );

const findSizeObj = (packagingObj, size) =>
  packagingObj?.sizes.find((s) => s.size === size);

export default function SingleProduct({ product }) {
  const [state, dispatch] = useReducer(reducer, initialState(product));

  const packagingSizeOptions = useMemo(() => {
    const flakeSizeObj = findFlakeSizeObj(product, state.flakeSize);
    const packagingObj = findPackagingObj(flakeSizeObj, state.packaging);
    return packagingObj?.sizes || [];
  }, [product, state.flakeSize, state.packaging]);

  useEffect(() => {
    const flakeSizeObj = findFlakeSizeObj(product, state.flakeSize);
    const packagingObj = findPackagingObj(flakeSizeObj, state.packaging);
    let sizeObj = findSizeObj(packagingObj, state.size);

    if (!sizeObj && packagingObj) {
      // If the current size is not available in the new packaging, select the first available size
      sizeObj = packagingObj.sizes[0];
    }

    if (sizeObj) {
      dispatch({
        type: "UPDATE_ALL",
        payload: {
          size: sizeObj.size,
          price: sizeObj.price,
        },
      });
    }
  }, [product, state.flakeSize, state.packaging, state.size]);

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    const flakeSizeObj = findFlakeSizeObj(product, state.flakeSize);
    const packagingObj = findPackagingObj(flakeSizeObj, state.packaging);
    const sizeObj = findSizeObj(packagingObj, newSize);

    if (sizeObj) {
      dispatch({
        type: "UPDATE_ALL",
        payload: {
          size: sizeObj.size,
          price: sizeObj.price,
        },
      });
    }
  };

  return (
    <div className="single-product-wrapper padding-2">
      <h1 className="uppercase ls-1">{product.name}</h1>
      <div className="grid gap-1 margin-bs-1">
        <div className="single-product-img-wrapper">
          <img src={product.images.featured} alt="" />
        </div>
        <div className="single-product-options">
          <div className="grid gap-half">
            <div>
              <Dropdown
                label="Flake Size"
                value={state.flakeSize}
                onChange={(e) =>
                  dispatch({ type: "SET_FLAKE_SIZE", payload: e.target.value })
                }
              >
                {product.flakeSizes.map((flakeSize) => (
                  <option value={flakeSize.size} key={flakeSize.size}>
                    {flakeSize.size}
                  </option>
                ))}
              </Dropdown>
            </div>
            <div>
              <Dropdown
                label="Packaging Options"
                value={state.packaging}
                onChange={(e) =>
                  dispatch({ type: "SET_PACKAGING", payload: e.target.value })
                }
              >
                {product.flakeSizes[0].packagingOptions.map((option) => (
                  <option value={option.type} key={option.type}>
                    {option.type}
                  </option>
                ))}
              </Dropdown>
            </div>
            <div>
              <Dropdown
                label="Packaging Size"
                value={state.size}
                onChange={(e) =>
                  dispatch({ type: "SET_SIZE", payload: e.target.value })
                }
              >
                {product.flakeSizes
                  .find((flake) => flake.size === state.flakeSize)
                  ?.packagingOptions.find(
                    (option) =>
                      option.type.toLowerCase() ===
                      state.packaging.toLowerCase()
                  )
                  ?.sizes.map((size) => (
                    <option value={size.size} key={size.size}>
                      {size.size}
                    </option>
                  ))}
              </Dropdown>
            </div>
            <div>
              <p>Price: ${state.price}</p>
            </div>
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
