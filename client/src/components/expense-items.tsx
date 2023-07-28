import {Table} from 'react-bootstrap'
import IExpenseItem from '../models/expense';
import {format} from 'date-fns'

type ExpenseItemsModel = {
    expenseItems : IExpenseItem[];
}

const ExpenseItems = ({expenseItems}: ExpenseItemsModel) => {

  const defaultExpenseItems : IExpenseItem [] = [
    {
        "expenseDescription": "Bought Fridge",
        "payeeName": "Ramesh",
        "price": 12345,
        "date": new Date(),
        "id": 1
      },
      {
        "expenseDescription": "Paid Internet Bill",
        "payeeName": "Rahul",
        "price": 1200,
        "date": new Date(),
        "id": 2
      }
];

const convertDateAsString = (date : Date) => {
    return format(new Date(), "yyyy-MM-dd");
}

return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Expense Description</th>
            <th>Payee</th>
            <th>Expense Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
            {
                expenseItems.map((expenseItem : IExpenseItem, index) => {
                    return (
                        <tr>
                        <td>{index + 1}</td>
                        <td>{expenseItem.expenseDescription}</td>
                        <td>{expenseItem.payeeName}</td>
                        <td>{convertDateAsString(expenseItem.date)}</td>
                        <td>{expenseItem.price}</td>
                      </tr>
                    );
                })
            }
         
        </tbody>
      </Table>
    </div>
  );
};

export { ExpenseItems };
