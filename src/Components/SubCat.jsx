import React, { useEffect, useState } from "react";
import { sub_url } from "../Api/api_url";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Row, Container, Card, Col } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { Button } from "react-bootstrap";

const SubCat = () => {
  let api_url = sub_url;

  let { prod } = useParams();
  // console.log("SubCat receieved prod:", prod);

  let [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(`${api_url}${prod}`)
      .then((res) => {
        console.log("Sub Axios: ", res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log("Sub Error: ", err);
      });
  }, [setState, api_url, prod]);

  return (
    <Container>
      <h1>Sub Category:</h1>
      <Row>
        {state.map((sub_prod) => (
          <Col key={sub_prod.id} lg={6}>
            <Card style={{ margin: "0.5rem", padding: "0.5rem" }}>
              <Card.Img
                variant="top"
                src={sub_prod.image}
                style={{ height: "8rem", width: "8rem", margin: "auto" }}
              />
              <Card.Body>
                <Card.Title>{sub_prod.title}</Card.Title>
                <Rating
                  name="half-rating-read"
                  value={sub_prod.rating.rate}
                  defaultValue={2.5}
                  precision={0.5}
                  style={{ margin: "auto" }}
                  readOnly
                />
                <Card.Text>Price: ${sub_prod.price}</Card.Text>
                <Link to={`singleprod/${sub_prod.id}`}>
                  <Button variant="primary">Read More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SubCat;
