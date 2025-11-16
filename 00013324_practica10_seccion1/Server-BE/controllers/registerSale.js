import { pool } from "../data/db/connection.js";

export const registerSale = async (request, response) => {
    const { amount, id_customer } = request.body

    try {
        const customerCheck = await pool.query('SELECT COUNT(id) from customers WHERE id=$1', [id_customer]);
        if (customerCheck.rowCount === 0) {
            return response.status(404).send("No se ha encontrado un cliente con esa id.");
        }
        const insert = await pool.query('INSERT INTO sales (amount, created_at, id_customer) VALUES ($1, NOW(), $2) RETURNING *', [amount, id_customer])
        return response.status(201).send(`Venta agregada para el cliente con la id: ${insert.rows[0].id_customer}`)

    } catch (error) {
        return response.status(500).send("No se ha podido agregar la venta.")
    }
}