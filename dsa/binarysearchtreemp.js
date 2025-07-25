class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    search(root, value) {
        if (root === null) {
            return false;
        }
        if (value < root.value) {
            return this.search(root.left, value);
        } else if (value > root.value) {
            return this.search(root.right, value);
        } else {
            return true; // Value found
        }
    }

    preOrder(root) {
        if (root !== null) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inorder(root) {
        if (root !== null) {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }

    postOrder(root) {
        if (root !== null) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty()); // true

bst.insert(10);
bst.insert(5);
bst.insert(15);
// console.log(bst.isEmpty()); // false
bst.insert(3);
bst.insert(7);


console.log(bst.search(bst.root, 10)); // true
console.log(bst.search(bst.root, 5)); // true
console.log(bst.search(bst.root, 15)); // true
console.log(bst.search(bst.root, 20)); // false
// bst.preOrder(bst.root); // 10, 5, 3, 7, 15
bst.inorder(bst.root); // 10, 5, 3, 7, 15
