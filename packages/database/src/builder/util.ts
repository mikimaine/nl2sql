import { ExpressionNode, QueryNode, SubQueryNode, TableNode } from "../types"

export const checkIsFromTable = (
  value: TableNode | SubQueryNode,
): value is TableNode => {
  return Object.hasOwn(value, "name")
}

/**
 * Traverses an expression tree and applies a callback function to each operand and operator.
 *
 * @param expression - The expression tree to traverse, represented by an ExpressionNode.
 * @param callback - A function that takes an operand (string, number, or string[]) and an optional operator (string).
 */
export function traverseExpression(
  expression: ExpressionNode,
  callback: (
    operand:
      | string
      | number
      | boolean
      | null
      | string[]
      | ExpressionNode
      | QueryNode,
    operator?: string,
  ) => void,
): void {
  if (expression === null) return
  if (
    typeof expression.left === "string" ||
    typeof expression.left === "number" ||
    typeof expression.left === "boolean" ||
    expression.left === null
  ) {
    callback(expression.left, expression.operator)
  } else if (
    typeof expression.left === "object" &&
    expression.left &&
    expression.left.type === "expression"
  ) {
    traverseExpression(expression.left, callback)
  }

  if (
    expression.right &&
    typeof expression.right === "object" &&
    !Array.isArray(expression.right) &&
    expression.right.type === "expression"
  ) {
    traverseExpression(expression.right, callback)
  } else if (expression.right) {
    callback(expression.right, expression.operator)
  }
}

/**
 * A monad that applies a builder function to a value if the value is not null or undefined.
 *
 * @param value - The value to be processed, which can be of type T, null, or undefined.
 * @param builder - A function that takes an optional value of type T and returns a string.
 * @returns A string generated by the builder function, or an empty string if the value is null or undefined.
 */
export function applyMaybeClause<T>(
  value: T | null | undefined,
  builder: (value?: T) => string,
): string {
  if ((Array.isArray(value) && !value.length) || typeof value == "undefined")
    return ""
  if (value === null) return builder()
  return builder(value)
}
