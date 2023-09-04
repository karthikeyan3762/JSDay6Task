class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    toString() {
      return `Circle[radius=${this.radius},color=${this.color}]`;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  
  const circle1 = new Circle(); 
  console.log(circle1.toString()); 
  console.log(circle1.getArea()); 
  console.log(circle1.getCircumference()); 
  
  const circle2 = new Circle(2.5, "blue");
  console.log(circle2.toString()); 