import { pool } from "../data/db/connection.js";

export const customers = (request, response) => {
    pool.query('SELECT * FROM customers', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}