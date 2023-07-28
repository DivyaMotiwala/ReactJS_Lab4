import {useEffect, useState} from "react"
import {getAllExpenseItems} from "../services/expense"
import {Container} from "react-bootstrap"
import { ExpenseItems } from "./expense-items"
import IExpenseItem from "../models/expense"
import { ExpenseByPayees } from "./expense-by-payees"

import { ExpenseCreator } from "./expense-creator"
import { ExpenseByPending } from "./expense-by-pending"


const ExpenseTracker = () => {

  const [expenseItems, setExpenseItems] 
    = useState<IExpenseItem[]>([])

  useEffect( () => {

    const getAllExpenseItemsInvoker = async () => {
      try{
        const response = await getAllExpenseItems();
        console.log(response);
        setExpenseItems(response);
      }catch(error){
        console.log(error);
      }  
    }

    getAllExpenseItemsInvoker();

  }, [])

  const refreshParentUponNewExpenseAddition = (newlyCreatedExpenseItem : IExpenseItem) => {

    setExpenseItems(
      [
        newlyCreatedExpenseItem,
        ...expenseItems
      ]
    )
  }

  return (
    <Container>
      <h2>Expense Items

        <ExpenseCreator expenseItems={expenseItems} refreshParent={refreshParentUponNewExpenseAddition}></ExpenseCreator>
      </h2>
      <ExpenseItems expenseItems={expenseItems}></ExpenseItems>

      <ExpenseByPayees expenseItems={expenseItems}></ExpenseByPayees>

      <ExpenseByPending expenseItems={expenseItems}></ExpenseByPending>
    </Container>
  )
}

export {ExpenseTracker}