import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsThunk } from "../../redux/actions/productsAction";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { action, Iproduct } from "../interface/common";
import "./product.scss";
import CreateProduct from "../CreateProduct/CreateProduct";

interface IState {
  products: {
    product: [];
    createProduct: [];
  };
}

const Product = () => {
  const { product } = useSelector((state: IState) => state.products);

  const [detals, setDetals] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsThunk() as unknown as action);
  }, [dispatch]);

  return (
    <div className="addProduct">
      <div className="container">
        <CreateProduct />
        {product.map((item: Iproduct) => (
          <div className="product" key={item.id}>
            <img className="productImg" src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.price}</p>

            <Box sx={{ "& button": { m: 1 } }}>
              <div>
                <Button variant="outlined" size="medium" onClick={() => setDetals((prev) => !prev)}>
                  {detals ? "Hide Detals" : "Show Detals"}
                </Button>
              </div>
            </Box>
            {detals && (
              <div>
                <p>{item.description}</p>
                <p>
                  Rate : <span>{item?.rating?.rate}</span>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Product;
