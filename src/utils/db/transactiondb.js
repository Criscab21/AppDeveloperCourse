import * as SQLite from 'expo-sqlite';
const db= SQLite.openDatabase('transactions.db');

export const initTransactions = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS Categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, type TEXT NOT NULL CHECK (type IN (?,?)))',
                ['Expense', 'Income'],
                (_,result) => resolve(result),
                (_,result) => reject(result),
            )
        })
    }) 
    return promise
}

export const insertTransaction = (name, type) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO Categories (comentary, amount, name, type) VALUES (?,?)',
                [name, type],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            );
        });
    });
    return promise
};

