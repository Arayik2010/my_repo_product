import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsThunk } from "../../redux/actions/productsAction";
import Pagination from "react-bootstrap/Pagination";

import { action, Iproduct } from "../interface/common";
import "./product.scss";
import CreateProduct from "../CreateProduct/CreateProduct";
import { ProductItem } from "../ProductItem/ProductItem";

interface IState {
  products: {
    product: [];
    productCount: number;
  };
}

const Product = () => {
  const [activePage, setActivePage] = useState(1);

  const [chunkData, setChunkData] = useState<IState["products"]["product"]>([]);
  const { product, productCount } = useSelector((state: IState) => state.products);
  const dispatch = useDispatch();
  let pageCountSize = Math.ceil(product.length / productCount);
  console.log(pageCountSize);

  let items = [];

  for (let number = 1; number <= pageCountSize; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage}>
        {number}
      </Pagination.Item>
    );
  }

  const chunk = product.reduce<IState["products"]["product"][][]>((acc, _, i) => {
    return i % productCount ? acc : [...acc, product.slice(i, i + productCount)];
  }, []);

  useEffect(() => {
    dispatch(productsThunk() as unknown as action);
  }, [dispatch]);

  useEffect(() => {
    const data = chunk[activePage - 1] as IState["products"]["product"];
    console.log(data);

    setChunkData(data);
  }, [activePage]);

  return (
    <div className="addProduct">
      <CreateProduct />
      <div className="container">
        {chunkData?.map((item: Iproduct) => (
          <ProductItem item={item} />
        ))}
      </div>
      <div className="pagination">
        <Pagination
          onClick={(e) => {
            const input = e.target as HTMLElement;
            setActivePage(+input.innerText);
          }}
        >
          {items}
        </Pagination>
      </div>
    </div>
  );
};
export default Product;
