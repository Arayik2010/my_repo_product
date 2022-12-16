import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aboutProduct, action } from "../interface/common";
import { aboutThunk } from "../../redux/actions/aboutAction";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface Istate {
  abouts: {
    aboutData: [];
  };
}

const Аbout = () => {
  const { aboutData } = useSelector((state: Istate) => state.abouts);
  console.log(aboutData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(aboutThunk() as unknown as action);
  }, [dispatch]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">UserName</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {aboutData.map((data: aboutProduct) => (
              <TableRow key={data.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {data.id}
                </TableCell>
                <TableCell align="right">{data.name}</TableCell>
                <TableCell align="right">{data.username}</TableCell>
                <TableCell align="right">{data.email}</TableCell>
                <TableCell align="right">{data.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Аbout;
