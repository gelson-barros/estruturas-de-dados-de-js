function Stack() {
    var items = []

    this.push = function(element) {
        items.push(element)
    }

    this.pop = function() {
        return items.pop()
    }

    this.peek = function() {
        return items[items.length - 1]
    }

    this.isEmpty = function() {
        return items.length === 0
    }

    this.clear = function() {
        items = []
    }

    this.size = function() {
        return items.length
    }

    this.print = function() {
        console.log(items.toString())
    }
}

let pilha = new Stack();
pilha.push(23);
pilha.push(23);
console.log(pilha.peek());
pilha.print()