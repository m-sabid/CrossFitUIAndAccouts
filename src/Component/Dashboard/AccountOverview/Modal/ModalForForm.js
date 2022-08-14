import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AuthUser from "../../LoginLogOut/AuthUser/AuthUser";

export function MyVerticallyCenteredModal(props) {
  const { getToken } = AuthUser();
  const token = getToken();

  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [expense_date, setExpense_date] = useState();
  const [message, setMessage] = useState();
  const [image, setImage] = useState();

  const submitFetch = () => {
    let bodyData = {
      name,
      amount,
      expense_date,
      message,
      image,
    };
    fetch("https://gym-management97.herokuapp.com/api/expense/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bodyData),
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Expense
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Modal Body */}
        {/* Modal Body */}
        {/* Modal Body */}
        <Modal.Body>
          {/* Expense Form */}

          <Form onSubmit={submitFetch}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* Expense source */}
              <Form.Label>Source Name</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter The Name of Expense Source"
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
            {/* Amount */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                value={amount}
                type="number"
                placeholder="Enter The Amount of Expense"
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>
            {/* Remarks */}
            {/* Date */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Expense Date</Form.Label>
              <Form.Control
                value={expense_date}
                type="date"
                onChange={(e) => setExpense_date(e.target.value)}
              />
            </Form.Group>
            {/* Date */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control
                value={message}
                as="textarea"
                placeholder="Write Any Message For This Income"
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Upload File</Form.Label>
              <Form.Control
                value={image}
                type="file"
                placeholder="Write Any Message For This Income"
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          {/* Income Form */}
        </Modal.Body>
        {/* Modal Body */}
        {/* Modal Body */}
        {/* Modal Body */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
// Add Expense BS Modals
// Add Expense BS Modals
// Add Expense BS Modals

// add income modals
// add income modals
// add income modals
export function MyIncomeModals(params) {
  //   income
  const [incomeSource, setIncomeSource] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeDate, setIncomeDate] = useState("");
  const [incomeMessage, setIncomeMessage] = useState("");

  const { getToken } = AuthUser();
  const token = getToken();

  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [expense_date, setExpense_date] = useState();
  const [message, setMessage] = useState();
  const [image, setImage] = useState();

  const submitFetch = () => {
    let bodyData = {
      name,
      amount,
      expense_date,
      message,
      image,
    };
    fetch("https://gym-management97.herokuapp.com/api/expense/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bodyData),
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Modal
      {...params}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Income</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Income Form */}

        <Form onSubmit={submitFetch}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* income source */}
            <Form.Label>Source Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter The Name of Income Source"
              onChange={(e) => setIncomeSource(e.target.value)}
            />
            {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
          </Form.Group>
          {/* Amount */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter The Amount of Income"
              onChange={(e) => setIncomeAmount(e.target.value)}
            />
          </Form.Group>
          {/* Remarks */}
          {/* Date */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Income Date</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setIncomeDate(e.target.value)}
            />
          </Form.Group>
          {/* Date */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write Any Message For This Income"
              onChange={(e) => setIncomeMessage(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>

        {/* Income Form */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={params.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
// add income modals
// add income modals
// add income modals
