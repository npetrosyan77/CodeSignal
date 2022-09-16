const animal1 = {
    name: 'animal',
    age: 5,
    hasTail: false
}

console.log(animal1)


class Animal {
    static type = 'animal'

    constructor(options) {
        this.name = options.name,
            this.age = options.age,
            this.hasTail = options.hasTail
    }


    voice() {
        console.log('roaring')
    }
}

const animal = new Animal({
    name: 'animal',
    age: 4,
    hasTail: true
});


class Cat extends Animal {
    constructor(options) {
        super(options)
        this.height = options.height
    }
    voice() {
        console.log('cating')
    }

    get ageInfo() {
        return this.age * 7
    }

    set ageInfo(newAge) {
        this.age = newAge
    }
}



const cat = new Cat({
    name: 'Cat',
    age: 5,
    height: 2,
    hasTail: true
})


class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)


        hide = () => {
            this.$el.style.display = 'none'
        }

        show = () => {

            this.$el.style.display = 'block'

        }
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})


const box2 = new Box({
    selector: '#box2',
    size: 100,
    color: 'blue'
})



class Circle extends Box {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%'
    }
}

const c = new Circle({
    selector: '#circle',
    color: 'green',
    size: 90
})