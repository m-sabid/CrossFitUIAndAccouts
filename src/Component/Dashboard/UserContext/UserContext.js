import React, { createContext, useEffect, useState } from 'react';
import AuthUser from '../LoginLogOut/AuthUser/AuthUser';

export const UserContext = createContext();


export const UserProvider = (props) => {
    const { getToken } = AuthUser();
    const token = getToken();

    const [conExpense, setConExpense] = useState();

    useEffect(() => {
        const expenseUrl = "https://gym-management97.herokuapp.com/api/expense";
        fetch(expenseUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setConExpense(data.data));
      }, []);




    return (
        <UserContext.Provider value={[conExpense, setConExpense]}>
          {props.children}
        </UserContext.Provider>
    );
};