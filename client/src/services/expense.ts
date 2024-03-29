import axios from 'axios';
import IExpenseItem, { IExpenseCreateItem } from '../models/expense';

const GET_EXPENSE_ITEMS_URL = "http://localhost:4000/items";
const POST_EXPENSE_ITEMS_URL = "http://localhost:4000/items";

const getAllExpenseItems = async () => {

    const response = await axios.get<IExpenseItem[]>(GET_EXPENSE_ITEMS_URL);
    return response.data;

}

const postExpenseItem = async (newExpenseItem : IExpenseCreateItem) => {

    const response = await axios.post<IExpenseItem>(POST_EXPENSE_ITEMS_URL, newExpenseItem,{
        headers : {
            "Content-Type" : 'application/json'
        }
    });
    return response.data;

}

export {getAllExpenseItems};
export {postExpenseItem};