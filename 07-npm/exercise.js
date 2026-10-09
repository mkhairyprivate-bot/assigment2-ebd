// 07-npm — your work goes in this file, and in package.json.
//
// Read 07-npm/README.md first and work through its numbered steps.
// Nothing here runs until you have done step 1: npm install dayjs
//
// Check your work with: npm test 07

import dayjs from "dayjs";

/**
 * Lays a date out the way people write it.
 * formatDate("2026-03-15") -> "15/03/2026"
 *
 * @param {string} dateString
 * @returns {string}
 */
export function formatDate(dateString) {
  return dayjs(dateString).format("DD/MM/YYYY");
}

/**
 * The year a date falls in, as a number.
 * yearOf("2026-03-15") -> 2026
 *
 * @param {string} dateString
 * @returns {number}
 */
export function yearOf(dateString) {
  return dayjs(dateString).year();
}

/**
 * Adds days to a date.
 */
export function addDays(dateString, days) {
  return dayjs(dateString).add(days, "day").format("YYYY-MM-DD");
}

/**
 * The package YOU chose from the registry.
 *
 * We will replace this after installing your second package.
 */
export const myPackage = "lodash";