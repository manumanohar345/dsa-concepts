// Set to store a key-value pair
// Get to retrive a value givens its key
// Remove to delete a key-value pair
// Hasing a function to convert a string key to a numeric index
// Check if a key exists
class HashTable {
    constructor() {
        this.table = new Array(137) // Initialize an array of size 137
    }

    hash(key) {
        let total = 0
        // for (let char of key) {
        //     total += char.charCodeAt(0)
        // }
        // return total % this.table.length
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)

        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        // this.table[index] = value
        // Hash table collisons
        const buket = this.table[index]
        if (buket === undefined) {
            this.table[index] = [[key, value]]
        } else {
            // if (Array.isArray(buket)) {
            //     buket.push(value)
            // } else {
            //     this.table[index] = [buket, value]
            // }
            const sameKeyIndex = buket.findIndex(item => item[0] === key)
            if (sameKeyIndex === -1) {
                buket.push([key, value])
            } else {
                buket[sameKeyIndex][1] = value // Update the value if key already exists
            }
        }

    }

    get(key) {
        const index = this.hash(key)
        // return this.table[index]
        const buket = this.table[index]
        if (buket === undefined) {
            return undefined
        } else {
            const foundItem = buket.find(item => item[0] === key)
            return foundItem ? foundItem[1] : undefined // Return the value if found, otherwise undefined
        }
    }

    remove(key) {
        const index = this.hash(key)
        const buket = this.table[index]
        if (buket === undefined) {
            return undefined
        }
        const sameKeyIndex = buket.findIndex(item => item[0] === key)
        if (sameKeyIndex === -1) {
            return undefined
        } else {
            const removedItem = buket.splice(sameKeyIndex, 1) // Remove the item from the bucket
            if (buket.length === 0) {
                this.table[index] = undefined // If the bucket is empty, set it to undefined
            }
            return removedItem[0][1] // Return the value of the removed item
        }
    }

    // has(key) {
    //     const index = this.hash(key)
    //     return this.table[index] !== undefined
    // }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(`${i}: ${this.table[i]}`)
            }
        }
    }
}

const table = new HashTable(50)
table.set('name', 'Alice')
table.set('age', 30)
table.display()
console.log(table.get('name')) // Alice
console.log(table.get('age')) // 30
// table.remove('name')
table.set('name', 'Clark')
table.display()
console.log(table.get('name')) // Clark