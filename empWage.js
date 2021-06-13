console.log("Welcome to Employ Wage Program");

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 10;
const MAX_HOURS_IN_MONTH = 100;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }  
}

while (totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays,getWorkingHours(empCheck));
}

console.log(empDailyWageMap);
function totalWages(totalWage,dailyWage) {
    return totalWage + dailyWage;
}

const findTotal = (totalVal,dailyVal) =>{
    return totalVal + dailyVal;
}

let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal,0);

console.log("UC-9A- Emp wage with Arrow: " + "Total hours: " + totalHours + "Total Wages" + totalSalary);

let nonWorkingDays = new Array();
let partTimeWorkingDays = new Array();
let fullTimeWorkingDays = new Array();

empDailyHrsMap.forEach((value,key,map) =>{
    if (value == 8) {
        fullTimeWorkingDays.push(key);
    } else if(value == 4) {
        partTimeWorkingDays.push(key);
    } else{
        nonWorkingDays.push(key);
    }
});

console.log("Full working days " + fullTimeWorkingDays);
console.log("Part time working days " + partTimeWorkingDays);
console.log("Non working days " + nonWorkingDays);

