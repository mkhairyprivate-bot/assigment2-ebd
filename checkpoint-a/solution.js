import { findAllOrders, findOrderById } from "./orders-db.js";

/**
 * Returns every order from the database.
 */
export async function loadOrders() {
  return await findAllOrders();
}

/**
 * Returns only orders from Mansoura with paid status.
 */
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Mansoura" && order.status === "paid"
  );
}

/**
 * Calculates total revenue: price × quantity for every order.
 */
export function summarize(orders) {
  return orders.reduce(
    (total, order) => total + order.price * order.quantity,
    0
  );
}

/**
 * Describes an order or returns a missing-order message.
 * This function never throws.
 */
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student} ordered ${order.quantity} x ${order.item}`;
  } catch {
    return `Missing order: ${id}`;
  }
}

/**
 * Returns JSON text containing only item and price for each order.
 */
export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({
      item: order.item,
      price: order.price,
    }))
  );
}