/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 let createEmployeeRecord = (array) => {
    return {
      firstName: array[0],
      familyName: array[1],
      title:array[2],
      payPerHour:array[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }
 const createEmployeeRecords = (arrays) => {
    
    return arrays.map(array => {
        return createEmployeeRecord(array)
    })

}
let createTimeInEvent = (employeeRecord, dateStamp) => {
    const [date, hour] = dateStamp.split(" ")
    employeeRecord.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
  
    })
    return employeeRecord
  }
  const createTimeOutEvent = (employeeRecord, dateStamp) => {
    const [date, hour] = dateStamp.split(" ")
    employeeRecord.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
  
  
    })
    return employeeRecord
  }


  const hoursWorkedOnDate = (employeeRecord, dateStamp) => {
    const timeIn = employeeRecord.timeInEvents.find((event) => {
      return event.date === dateStamp
  
    })
  
    const timeOut = employeeRecord.timeOutEvents.find((event) => {
      return event.date === dateStamp
    })
  
    const timeWorked = (timeOut.hour - timeIn.hour) / 100
    return timeWorked
    
  }

  const wagesEarnedOnDate = (employeeRecord, dateStamp) => {
    const Earned = hoursWorkedOnDate (employeeRecord, dateStamp)
    const Wage = Earned * employeeRecord.payPerHour
    return parseInt(currentWage)
  
  }
  


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable

}

const calculatePayroll = (employeeArray) => {
    return employeeArray.reduce((total, record) => {
      return total + allWagesFor(record)
    }, 0)
  
  }




