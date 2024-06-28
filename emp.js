let emp_1 = {
    id: 1,
    FirstName: "Sanjay",
    LastName: "Bhutia",
    Email: "sb@gmail.com",
    Gender: "Male"
}
let emp_2 = {
    id: 2,
    FirstName: "Md Kaif",
    LastName: "Ali",
    Email: "mka@gmail.com",
    Gender: "Male"
}
let emp_3 = {
    id: 3,
    FirstName: "Abhisek",
    LastName: "Nayak",
    Email: "an@gmail.com",
    Gender: "Male"
}
let emp_4 = {
    id: 4,
    FirstName: "Sri",
    LastName: "Devi",
    Email: "sd@gmail.com",
    Gender: "Female"
}
let emp_5 = {
    id: 5,
    FirstName: "Anuska",
    LastName: "Sharma",
    Email: "as@gmail.com",
    Gender: "Female"
}
let emparr = [emp_1, emp_2, emp_3, emp_4, emp_5];
function display(emp) {
    let emplist = ``;
    if (emp.length != 0) {
        for (let emps of emp) {
            emplist += `
                    <tr>
                        <td>${emps.id}</td>
                        <td>${emps.FirstName}</td>
                        <td>${emps.LastName}</td>
                        <td>${emps.Email}</td>
                        <td>${emps.Gender}</td>
                    </tr>`;
        }
        document.getElementById('display').innerHTML = emplist;
    }
}
let all_emp = document.getElementById('allemp');
let male_emp = document.getElementById('memp');
let female_emp = document.getElementById('femp');
let user_name=document.getElementById('usn');
all_emp.addEventListener('click', function () {
    display(emparr);
});
male_emp.addEventListener('click', function () {
    let filt_male = emparr.filter(function (emp) {
        if (emp.Gender == "Male") {
            return true;
        }
    })
    display(filt_male);
});
female_emp.addEventListener('click', function () {
    let filt_female = emparr.filter(function (emp) {
        if (emp.Gender == "Female") {
            return true;
        }
    })
    display(filt_female);
});


user_name.addEventListener('keyup',function(){
    let filt_search = emparr.filter(function (emp) {
        let uppername=emp.FirstName.toUpperCase().trim();
        let userEntry=user_name.value.toUpperCase().trim();
        if ( uppername.startsWith(userEntry)) {
            return true;
        }
        
})
display(filt_search);
});
