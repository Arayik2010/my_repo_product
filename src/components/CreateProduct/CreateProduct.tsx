import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddproductThunk } from "../../redux/actions/productsAction";
import { action, productData } from "../interface/common";

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
    <div>
      <form>
        <input type="text" placeholder="enter product" value={value} onChange={(e) => setValue(e.target.value)} />
        <p>{error}</p>
        <Box sx={{ "& button": { m: 1 } }}>
          <div>
            <Button variant="outlined" size="small" onClick={AddProductfunc}>
              Create
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
};
export default CreateProduct;
