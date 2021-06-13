class EmployeePayRollData{
    id;
    salary;
    genderl
    startDate;

    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        // const empDate = this.startDate === undefined ? "undifined" :
        //                 this.startDate.toLocalDateString("en-US",options);
        return "id = " + this.id + " name = " + this.name + " salary = " + this.salary +
        " gender = " + this.gender + " startdate = " + this.startDate;
    }
}

let employeePayRollData = new EmployeePayRollData(1,"mark",30000);
console.log(employeePayRollData.toString());
employeePayRollData.name = "John"
console.log(employeePayRollData.toString());
let newemployeePayRollData = new EmployeePayRollData(1,"Teressa",30000,"female", new Date());
console.log(newemployeePayRollData.toString());
