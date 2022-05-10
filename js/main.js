// fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//             console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       })

// Main class of Fruit

class Fruit{
  constructor(name, color, flavor){
    this._name = name
    this.color = color
    this.flavor = flavor
  }
  eat(){
    console.log(`this ${this.color} ${this.name} tastes ${this.flavor}`)
  }
  get name(){
    return this._name
  }
}

class Berries extends Fruit{
  constructor(name, color, flavor, dried){
    super(name, color, flavor)
    this.dried = dried
  }
  ferment(){
    console.log(`a ${this.flavor} wine was made`)
  }
  get fruitFlavor(){
    return this.flavor
  }
}

class Drupes extends Fruit{
  constructor(name, color, flavor, needsPittingToEat){
    super(name, color, flavor)
    this.needsPittingToEat = needsPittingToEat
  }
  eat(){
    if(this.needsPittingToEat){
      console.log(`this ${this.name} needs to be pitted first`)
    }
    else{
      super.eat()
    }
  }
}

class Pomes extends Fruit{
  constructor(name, color, flavor, ediblePeel){
    super(name, color, flavor)
    this.ediblePeel = ediblePeel
  }
  cutSlice(){
    console.log(`You cut off a slice of this ${this.name} and ate it`)
  }
}
let apricot = new Drupes("Apricot", "orange", "sweet", false)
apricot.eat()
let strawberry = new Berries("strawberry", "red", "sweet", false)
console.log(strawberry.fruitFlavor)
