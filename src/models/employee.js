class Employee {
  constructor(name, dept) {
    this.name = name
    this.dept = dept
    this.shifts = []
  }

  greet(employee) {
    console.log(`Hello ${employee.name}, welcome to T4`)
  }

  addShift(shift) {
    this.shifts.push(shift)
  }
}
module.exports = Employee
