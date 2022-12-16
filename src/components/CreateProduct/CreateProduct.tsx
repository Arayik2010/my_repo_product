import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action, Iproduct, productData } from "../interface/common";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AddproductThunk } from "../../redux/actions/productsAction";
import './createProduct.scss'



const CreateProduct = () => {

  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const AddProductfunc = () => {
    productData.title = value;
    if (value.trim().length === 0) {
      setError("please enter valid title");
      return;
    }
    dispatch(AddproductThunk() as unknown as action);
  };

  return (
    <div className="createproduct">
      <form>
        <div className="inputButton">
          <input className="input" type="text" placeholder="enter product" value={value} onChange={(e) => setValue(e.target.value)} />
          <p>{error}</p>
          <Box sx={{ "& button": { m: 1 } }}>
            <div>
              <Button className="button" variant="outlined" size="small" onClick={AddProductfunc}>
                Create
              </Button>
            </div>
          </Box>
        </div>
      </form>
    </div>
  );
};
export default CreateProduct;
