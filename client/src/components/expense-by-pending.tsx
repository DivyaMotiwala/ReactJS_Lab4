import { Table } from "react-bootstrap";
import IExpenseItem from "../models/expense";
import { getGrandTotal, getUniquePayeeNames, getTotalExpenseAmountByPayee } from "../services/expense-utils";
import exp from "constants";

type ExpenseByPendingModel = {
  expenseItems: IExpenseItem[];
};

const ExpenseByPending = ({ expenseItems }: ExpenseByPendingModel) => {
  

  const uniquePayeeNames = getUniquePayeeNames(expenseItems);

  const getPendingAmount = (payeeName : string) => {
    const totalExpenseAmount = getGrandTotal(expenseItems);
    const totalExpenseByPayee = getTotalExpenseAmountByPayee(payeeName, expenseItems);
    const halfAmount = totalExpenseAmount / 2;

    if(totalExpenseByPayee >= halfAmount)
        return 0;
    else
        return (halfAmount - totalExpenseByPayee);


  }
 
 
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Payee {`<=>`} Payee</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {uniquePayeeNames.map((payeeName, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{payeeName}</td>
              <td>{getPendingAmount(payeeName)}</td>
            </tr>
          );
        })}
         
      </tbody>
    </Table>
  );
};

export { ExpenseByPending };
