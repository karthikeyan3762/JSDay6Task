class UberPriceCalculator {
    constructor(baseFareInRupees, costPerKilometerInRupees, costPerMinuteInRupees) {
      this.baseFareInRupees = baseFareInRupees;
      this.costPerKilometerInRupees = costPerKilometerInRupees;
      this.costPerMinuteInRupees = costPerMinuteInRupees;
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
      const distanceCostInRupees = distanceInKilometers * this.costPerKilometerInRupees;
      const timeCostInRupees = timeInMinutes * this.costPerMinuteInRupees;
      const totalPriceInRupees = this.baseFareInRupees + distanceCostInRupees + timeCostInRupees;
  
      return totalPriceInRupees;
    }
  }
  
  
  const uberCalculator = new UberPriceCalculator(70, 11, 2); 
  
  const distance = 25; 
  const time = 30; 
  
  const estimatedPrice = uberCalculator.calculatePrice(distance, time);
  console.log(`Estimated Uber Price: ${estimatedPrice.toFixed(2)}Rs`);