import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Iproduct } from "../interface/common";

interface ProductProps {
  item: Iproduct;
}

export const ProductItem = ({ item }: ProductProps) => {
  const [detals, setDetals] = useState(false);

  const showItemDetals = () => {
    setDetals((prev) => !prev);
  };
  return (
    <div>
      <div className="product" key={item.id}>
        <img className="productImg" src={item.image} alt={item.title} />
        <p>{item.title}</p>
        <p>{item.price}</p>

        <Box sx={{ "& button": { m: 1 } }}>
          <div>
            <Button variant="outlined" size="medium" onClick={showItemDetals}>
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
    </div>
  );
};
