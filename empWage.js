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
let empDailyHrsAndWageArr = new Array();


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
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push({
        dayNum : totalWorkingDays,
        dailyHours : empHrs,
        dailyWage : calcDailyWage(empHrs),
        toString(){
            return '\nDay' + this.dayNum + '=> working hours is '+this.dailyHours +
            ' and wage earned = ' + this.dailyWage
        }
    })
}

let totalWage = empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                .reduce((totalWage,dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage,0);

let totalHours = empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours > 0)
                .reduce((totalHours,dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours,0);

console.log("UC-11A Total hours:" + totalHours + " Total wages : " + totalWage);

console.log("UC-11B Logging full time working days - ForEach look")
let fullTimeWorkingDays = empDailyHrsAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                        .forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));

let partTimeWorkingDays = empDailyHrsAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                        .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\nUC-11C - Part time working days string" + partTimeWorkingDays);

let nonWorkingdaysNums = empDailyHrsAndWageArr
                    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                    .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("\nUC-11D - Non working days numeber: " + nonWorkingdaysNums);
