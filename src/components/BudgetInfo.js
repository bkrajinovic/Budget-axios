import React, { useEffect, useState } from "react"
import "./styles.css"
import axios from "axios"

function BudgetInfo() {


  const [value, setValue] = useState({
    expenses: [],
  })
  const [budget, setBudget] = useState({})

  window.onload = function () {
    let x = JSON.parse(localStorage.getItem("curr"))[0]
    x = x.email
    console.log(x)
    axios.get(`http://localhost:3004/${x}Budget`).then((response) => {
      setBudget(response.data)
    })
    axios.get(`http://localhost:3004/${x}`).then((response) => {
      setValue(response.data)
    })
  }

  const totalExpenses =
    value.length > 0
      ? value.reduce((acc, curr) => {
          acc -= parseInt(curr.amount)
          return acc
        }, 0)
      : 0

  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">Starting Budget</div>
          <div className="card-body">
            <h5 className="text-center card-title" >
             {budget.amount} HRK
            </h5>
          </div>
        </div>
      </div>
     
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">Balance</div>
          <div className="card-body">
            <h5 className="text-center card-title" style={
                    (budget.amount - totalExpenses) < 0 ? { color: "red" } : { color: "green" }
                  }>
              {budget.amount - totalExpenses} HRK
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BudgetInfo
