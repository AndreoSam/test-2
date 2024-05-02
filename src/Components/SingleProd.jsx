import React, { useEffect, useState } from "react";
import { sing_url } from "../Api/api_url";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Col } from "react-bootstrap";

const SingleProd = () => {
  let api_url = sing_url;

  let { id } = useParams();
  console.log("Single Product receieved id:", id);

  let [state, setState] = useState({});

  useEffect(() => {
    axios
      .get(`${api_url}${id}`)
      .then((res) => {
        console.log("Single Get: ", res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log("Single Error: ", err);
      });
  }, [setState, api_url, id]);

  // console.log("Single Products:", id, state);

  return (
    <div style={{ marginTop: "2rem" }}>
      <Col>
        <Card style={{ width: "40rem", margin: "auto", padding: "0.5rem" }}>
          <Card.Text style={{ textAlign: "center" }}>
            <h3>{state.title}</h3> <hr />
          </Card.Text>
          <Card.Img
            style={{ maxHeight: "30rem", maxWidth: "20rem", margin: "auto" }}
            variant="top"
            src={state.image}
          />
          <Card.Body>
            <Card.Text style={{ textAlign: "justify" }}>
              <b>Price: </b> $ {state.price} <br />
              <b>Description:</b> {state.description} <br />
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </Col>
    </div>
  );
};

export default SingleProd;
