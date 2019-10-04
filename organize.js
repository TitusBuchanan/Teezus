var fileFoo = require('fs'); // 'fs' = file system the require calls the file system

//1.load_dept_names.txt
fileFoo.readFile('load_dept_names.txt', 'utf8', function (error, fileData) {
    if (error) throw (error);

    var newFileData = fileData.replace(/\(|\'|\),|\);/g, "");

    var newArrayFileData = newFileData.split("\n");
    newArrayFileData.shift();



    var departmentNames = [];
    for (var i = 0; i < newArrayFileData.length; i++) {
        departmentNames.push(newArrayFileData[i].split(","));
    }
    console.log(departmentNames);


});

//2.



fileFoo.readFile('load_dept_emp.txt', 'utf8', function (errorTwo, fileDataTwo) {
    if (errorTwo) throw (errorTwo);

    console.log(fileDataTwo);

    var newFileDataTwo = fileDataTwo.replace(/\(|\'|\),/g, "")

    


    var newArrayFileDataTwo = newFileDataTwo.split("\n")
    newArrayFileDataTwo.shift();

    console.log(newArrayFileDataTwo);

    var departmentNames = [];
    for(var i = 0; i < newArrayFileDataTwo.length; i++){
        if(newArrayFileDataTwo[i].length > 0){
           departmentNames.push(newArrayFileDataTwo[i].split(","))
        }
    }
console.log(departmentNames);
})

