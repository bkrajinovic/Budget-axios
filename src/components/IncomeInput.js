import React, { useContext, useState } from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import axios from "axios"

// import { ExpensesContext } from "../store"

function IncomeInput() {
  // const { expenses, setValue } = useContext(ExpensesContext)
  const [input, setInput] = useState({
    id: "",
    title: "",
    amount: "",
  })

  // const neg = (e) => {
  //   const x = -Math.abs(e)
  //   console.log(x)
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    // neg()
    // setValue({
    //   expenses: [...expenses, { title: input.title, amount: input.amount }],
    // })

    axios.post("http://localhost:3004/data", input).then((data) => {
      console.log(data)
    })
    console.log({ input })

    setInput({ title: "", amount: 0, id: "" })
    window.location.reload()
  }

  return (
    <div>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Income
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            required
            type="text"
            className="input"
            placeholder="Salary"
            value={input.title}
            onChange={(e) => setInput({ ...input, title: e.target.value })}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Amount
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            required
            type="number"
            className="input"
            placeholder="200"
            value={input.amount}
            onChange={(e) =>
              setInput({ ...input, amount: Number(e.target.value) })
            }
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={!(input.title && input.amount)}
          >
            Submit
          </Button>
        </Col>
      </Form.Group>
    </div>
  )
}

export default IncomeInput
