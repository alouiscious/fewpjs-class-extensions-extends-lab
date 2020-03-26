

class Polygon {
  constructor(arr) {
    this.arr = arr
    this.count = this.arr.length
  }
  get countSides() {
    return this.arr.length 
    
  }

  get perimeter(){
    if (!Array.isArray(this.arr)) return;
    let perim = 0
    this.arr.map((side) => {
      perim = perim + side
    })
    return perim
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (!Array.isArray(this.arr) || this.countSides !== 3) return;
    let sideA = this.arr[0]
    let sideB = this.arr[1]
    let sideC = this.arr[2]
    return ((sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA))
     
  }
}

class Square extends Polygon {
  
  get isValid() {
    if (!Array.isArray(this.arr) || this.countSides !== 4) return;
    let sideA = this.arr[0]
    let sideB = this.arr[1]
    let sideC = this.arr[2]
    let sideD = this.arr[3]
    
    return (sideA == sideB && sideB == sideC && sideC == sideD);
  }
  
  get area() {
    if (!Array.isArray(this.arr) || this.countSides !== 4) return;
    let sideA = this.arr[0]
    let sideB = this.arr[1]

    return sideA * sideB
  }
}



