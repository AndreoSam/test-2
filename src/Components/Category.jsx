import React, { useEffect, useState } from "react";
import { cat_url } from "../Api/api_url";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const Category = () => {
  let api_url = cat_url;

  let [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(api_url)
      .then((res) => {
        console.log("Category: ", res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log("Category: ", err);
      });
  }, [setState, api_url]);

  return (
    <TableContainer style={{ margin: "auto" }}>
      <h1>Catelogue:</h1>
      <Table sx={{ width: 500 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="right">More Details</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        {state.map((prod, index) => (
          <TableRow
            key={index}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell
              component="th"
              scope="row"
              style={{ textTransform: "uppercase" }}
            >
              {prod}
            </TableCell>
            <TableCell align="right">
              <Link to={`sub/${prod}`}>
                <Button className="mb-4">Read More</Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </TableContainer>
  );
};

export default Category;
