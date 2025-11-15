import { pool } from "../data/db/connection.js";

export const customersSearch = (request, response) => {
    const code = request.query.code;

    pool.query('SELECT * FROM customers WHERE code = $1', [code], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}