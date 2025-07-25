class Node {
    constructor(value) {
        this.value = value
        this.list = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    // prepend(value) {
    //     const node = new Node(value)
    //     if (this.isEmpty()) {
    //         this.head = node
    //     } else {
    //         node.next = this.head
    //         this.head = node
    //     }
    //     this.size++
    // }

    // append(value) {
    //     const node = new Node(value)
    //     if (this.isEmpty()) {
    //         this.head = node
    //     } else {
    //         let prev = this.head
    //         while (prev.next) {
    //             prev = prev.next
    //         }
    //         prev.next = node
    //     }
    //     this.size++
    // }

    // insert(value, index) {
    //     if (index < 0 || index > this.size) {
    //         return
    //     }
    //     if (index === 0) {
    //         this.prepend(value)
    //     } else {
    //         const node = new Node(value)
    //         let prev = this.head
    //         for (let i = 0; i < index - 1; i++) {
    //             prev = prev.next
    //         }
    //         node.next = prev.next
    //         prev.next = node
    //         this.size++
    //     }
    // }

    // removeFrom(index) {
    //     if (index < 0 || index >= this.size) {
    //         return null
    //     }
    //     let removedNode
    //     if (index === 0) {
    //         removedNode = this.head
    //         this.head = this.head.next
    //     } else {
    //         let prev = this.head
    //         for (let i = 0; i < index - 1; i++) {
    //             prev = prev.next

    //         }
    //         removedNode = prev.next
    //         prev.next = removedNode.next
    //     }
    //     this.size--
    //     return removedNode.value
    // }

    // removeValue() {
    //     if (this.isEmpty()) {
    //         return null
    //     }
    //     if (this.head.value === value) {
    //         this.head = this.head.next
    //         this.size++
    //         return value
    //     } else {
    //         let prev = this.head
    //         while (prev.next && prev.next.value !== value) {
    //             prev = prev.next
    //         } if (prev.next) {
    //             const removedNode = prev.next
    //             prev.next = removedNode.next
    //             this.size--
    //             return value
    //         }
    //     }
    // }

    // search(value) {
    //     if (this.isEmpty()) {
    //         return -1
    //     }
    //     let i = 0
    //     let curr = this.head //temporary point tospecify
    //     while (curr) {
    //         if (curr.value === value) {
    //             return i
    //         }
    //         curr = curr.next
    //         i++
    //     }
    //     return -1
    // }

    // reverse() {
    //     let prev = null
    //     let curr = this.head
    //     while (curr) {
    //         let next = curr.next
    //         curr.next = prev
    //         prev = curr
    //         curr = next
    //     }
    //     this.head = prev
    // }

    // linked list with tail implementation
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // append
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFromFront() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }


    removeFromEnd() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.tail.value
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while (prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty')
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value}`
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

const list = new LinkedList()
console.log('Link is empty?', list.isEmpty())
console.log('List size', list.getSize())
list.print()

// list.append(10)
// list.append(10)
// list.insert(10, 0)
// list.print()

// list.append(20)
// list.append(30)
// list.insert(20, 0)
// list.print()

// list.insert(30, 1)
// list.print()

// list.insert(40, 2)
// list.print()

// console.log(list.getSize())

// console.log(list.removeFrom(10))

// console.log(list.removeFrom(0))
// list.print()

// console.log(list.removeFrom(1))
// list.print()
// console.log(list.getSize())
// console.log(list.search(20))
// list.reverse()
list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
list.print()
console.log('List size', list.getSize())

list.removeFromFront()
list.removeFromEnd()
list.print()
