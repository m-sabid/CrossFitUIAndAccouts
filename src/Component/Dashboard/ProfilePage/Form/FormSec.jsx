import React from "react";
import { Col, Row } from "react-bootstrap";
import "./FormSec.css";

const FormSec = (props) => {
  const updateData = props.update;
  console.log(updateData);

  let x = {
    
  }


  return (
    <div className="FormSec">
      <Row>
        <Col md={12}>
          <div className="inputs1">
            <label htmlFor="">Name</label>
            <input type="text" value={updateData.name} />
            <label htmlFor="">Email</label>
            <input type="text" value={updateData.email} />
            <label htmlFor="">Phone</label>
            <input type="text" value={updateData.phone} />
            <label htmlFor="">Profile Image</label>
            <input type="file" name="profile image" id="" />
          </div>
        </Col>
      </Row>
      <button className="update">Update</button>
    </div>
  );
};

export default FormSec;
