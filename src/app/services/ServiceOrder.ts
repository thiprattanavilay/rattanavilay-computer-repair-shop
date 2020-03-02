export class ServiceOrder {
  passwordReset = { name: "Password Reset", price: 39.99, checked: false };
  spywareRemoval = { name: "Spyware Removal", price: 99.99, checked: false };
  ramUpgrade = { name: "RAM Upgrade", price: 129.99, checked: false };
  softwareInstallation = { name: "Software Installation",price: 49.99,checked: false};
  tuneUp = { name: "Tune-Up", price: 89.99, checked: false };
  keyboardCleaning = { name: "Keyboard Cleaning", price: 45.0, checked: false };
  cleanUp = { name: "Disk Clean-up", price: 149.99, checked: false };
  laborCost = { name: "Labor Cost", hoursRequested: 0, price: 0, rate: 50.00 };
  parts = { name: "Parts", partsNeeded: "" };
  totalCost: number = 0;

  getPasswordResetInfo(): any {
    return this.passwordReset;
  }

  getSpywareRemovalInfo(): any {
    return this.spywareRemoval;
  }

  getRamUpgradeInfo(): any {
    return this.ramUpgrade;
  }

  getSoftwareInstallationInfo(): any {
    return this.softwareInstallation;
  }

  getTuneUpInfo(): any {
    return this.tuneUp;
  }

  getKeyboardCleaningInfo(): any {
    return this.keyboardCleaning;
  }

  getCleanUpInfo(): any {
    return this.cleanUp;
  }

  getLaborCostInfo(): any {
    return this.laborCost;
  }

  getPartsInfo(): any {
    return this.parts;
  }

  getTotalCost(): number {
    return this.totalCost;
  }

  setPasswordResetFlag(value: boolean) {
    this.passwordReset.checked = value;
  }

  setSpywareRemovalFlag(value: boolean) {
    this.spywareRemoval.checked = value;
  }

  setRamUpgradeFlag(value: boolean) {
    this.ramUpgrade.checked = value;
  }

  setSoftwareInstallationFlag(value: boolean) {
    this.softwareInstallation.checked = value;
  }

  setTuneUpFlag(value: boolean) {
    return this.tuneUp.checked = value;
  }

  setKeyboardCleaningFlag(value: boolean) {
    this.keyboardCleaning.checked = value;
  }

  setCleanUpFlag(value: boolean) {
    this.cleanUp.checked = value;
  }

  setLaborHoursRequested(hours: number) {
    this.laborCost.hoursRequested = hours;
  }

  setLaborCost(price: number) {
    this.laborCost.price = price;
  }

  setPartsInfo(parts: string) {
    this.parts.partsNeeded = parts;
  }

  setTotalCost(value: number){
    this.totalCost = (this.totalCost + value);
  }
}
