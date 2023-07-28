import IExpenseItem from "../models/expense";


const getUniquePayeeNames = (expenseItems: IExpenseItem[]) => {
    const uniquePayeeNames: string[] = [];

    expenseItems.forEach((expenseItem) => {
      let payeeName = expenseItem.payeeName;
      if (!uniquePayeeNames.includes(payeeName))
        uniquePayeeNames.push(payeeName);
    });
    return uniquePayeeNames;
  };

  const getTotalExpenseAmountByPayee = (payeeName: string, expenseItems : IExpenseItem[]) => {
    let totalAmount = 0;
    expenseItems.forEach((expenseItem) => {
      if (expenseItem.payeeName === payeeName) totalAmount += expenseItem.price;
    });
    return totalAmount;
  };

  const getGrandTotal = (expenseItems : IExpenseItem[]) => {
    let totalAmount = 0;
    expenseItems.forEach((expenseItem) => {
      totalAmount += expenseItem.price;
    });
    return totalAmount;
  };

  export {getUniquePayeeNames, getTotalExpenseAmountByPayee, getGrandTotal}