import React, { useContext } from "react"
import Table from "react-bootstrap/Table"
// import { ExpensesContext } from "../store"

function ExpensesTable() {
  const { value } = useContext(ExpensesContext)

  return (
    <Table bordered hover size="sm">
      <thead style={{ backgroundColor: "gray", color: "white" }}>
        <tr>
          <th>Expenses</th>
          <th>Amount</th>
        </tr>
      </thead>
      {value.expenses.length > 0 ? (
        value.expenses.map((expense, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{expense.title}</td>
                <td
                  style={
                    expense.amount < 0 ? { color: "green" } : { color: "red" }
                  }
                >
                  {expense.amount < 0
                    ? Math.abs(expense.amount)
                    : -expense.amount}{" "}
                  HRK
                </td>
              </tr>
            </tbody>
          )
        })
      ) : (
        <tbody>
          <tr>
            <td>No Listed Expenses</td>
          </tr>
        </tbody>
      )}
    </Table>
  )
}

export default ExpensesTable
