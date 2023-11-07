const employee = {
    name: "Shawn",
    streetAddress: "1920 Loring PL S"
}
function  updateEmployeeWithKeyAndValue(employee, key, value) {
    const copy = {... employee}
    copy[key] = value
    return copy 

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key, value) {
    const copy = {... employee}
    delete copy[key]
    return copy

   
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key]
    return employee
}
