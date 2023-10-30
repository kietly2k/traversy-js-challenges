// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// 1. It starts at the root of the tree.
// 2. If the root is null, it returns an empty array.
// 3. It creates a helper function `traverse` that takes a node as an argument.
// 4. If the node is not null, it adds the node's data to the `result` array.
// 5. It then recursively traverses the left subtree of the node by calling `traverse(node.left)`.
// 6. After it's done with the left subtree, it recursively traverses the right subtree of the node by calling `traverse(node.right)`.
// 7. Finally, it invokes the `traverse` function on the root and returns the `result` array.

function recDepthFirstTraversal(root) {
  // If the root is null, return an empty array.
  const result = [];

  // Create a recursive helper function.
  function traverse(node) {
    // If the node is not null:
    if (node !== null) {
      // Add the node's data to the result.
      result.push(node.data);
      // Traverse the left subtree.
      traverse(node.left);
      // Traverse the right subtree.
      traverse(node.right);
    }
  }

  // Invoke the recursive helper function on the root.
  traverse(root);
  // Return the result.
  return result;
}

module.exports = {
  Node,
  recDepthFirstTraversal,
};