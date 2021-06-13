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
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name)) 
            this._name = name;
        else throw 'Name is incorrect';
    }

    set id(id){
        let idRegex = RegExp('^[1-9]\d$');
        if (idRegex.test(id)) 
            this._id = id;
        else throw 'ID is incorrect';
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate === undefined ? "undifined" :
                        this.startDate.toLocaleDateString("en-US",options);
        return "id = " + this.id + " name = " + this.name + " salary = " + this.salary +
        " gender = " + this.gender + " startdate = " + empDate;
    }
}

let employeePayRollData = new EmployeePayRollData(1,"Mark",30000);
console.log(employeePayRollData.toString());

try {
    employeePayRollData.name = "John";
    console.log(employeePayRollData.toString());
} catch (e) {
    console.error(e);
}

try {
    employeePayRollData.id = "John";
    console.log(employeePayRollData.toString());
} catch (e) {
    console.error(e);
}

try {
    let newemployeePayRollData = new EmployeePayRollData("a","Teressa",30000,"female", new Date());
    console.log(newemployeePayRollData.toString());
} catch (e) {
    console.error(e);
}


