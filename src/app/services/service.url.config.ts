export class ServiceConfig {
  
    public services = {

        login: { url:'auth/login', header: true, authorization: false, datatype: 'API' },
        signin: { url: 'auth/signin', header: true, authorization: false, datatype: 'API' },
        getgender: { url:  'auth/gender', header: true, authorization: false, datatype: 'API' },
        getbg: { url:  'auth/bg', header: true, authorization: false, datatype: 'API' },
        getname: { url:  'auth/name', header: true, authorization: true, datatype: 'API' },


        getroles: { url: 'role/roles', header: true, authorization: true, datatype: 'API' },
        addrole: { url:  'role/createrole', header: true, authorization: true, datatype: 'API' },
        getroleid: { url:  'role/rolebyid/', header: true, authorization: true, datatype: 'API' },
        updaterole: { url: 'role/updaterole', header: true, authorization: true, datatype: 'API' },
        deleterole: { url:  'role/deleterole/', header: true, authorization: true, datatype: 'API' },


        getdepts: { url:  'dept/depts', header: true, authorization: true, datatype: 'API' },
        adddept: { url: 'dept/createdept', header: true, authorization: true, datatype: 'API' },
        getdeptid: { url:  'dept/deptbyid/', header: true, authorization: true, datatype: 'API' },
        updatedept: { url:  'dept/updatedept', header: true, authorization: true, datatype: 'API' },
        deletedept: { url:  'dept/deletedept/', header: true, authorization: true, datatype: 'API' },



        getFaculty: { url:  'employee/employees', header: true, authorization: true, datatype: 'API' },
        empbyid: { url:  'employee/empbyid/', header: true, authorization: true, datatype: 'API' },
        addFaculty: { url:  'employee/addemp', header: true, authorization: true, datatype: 'API' },
        updateEmp: { url:  'employee/updateemp', header: true, authorization: true, datatype: 'API' },
        deleteEmp: { url:  'employee/deleteemp/', header: true, authorization: true, datatype: 'API' },


        addstudent: { url:  'student/addstudent', header: true, authorization: true, datatype: 'API' },
        getstudents: { url: 'student/students', header: true, authorization: true, datatype: 'API' },
        stubyid: { url:  'student/studentid/', header: true, authorization: true, datatype: 'API' },
        getbydept: { url:  'student/studentdept/', header: true, authorization: true, datatype: 'API' },
        updateStu: { url: 'student/updatestudent', header: true, authorization: true, datatype: 'API' },
        deleteStu: { url:  'student/deletestudent/', header: true, authorization: true, datatype: 'API' },


        addtask: { url:  'task/createtask', header: true, authorization: true, datatype: 'API' },
        gettasks: { url:  'task/gettasks', header: true, authorization: true, datatype: 'API' },
        getcount: { url:  'task/getcount/', header: true, authorization: true, datatype: 'API' },







    }
}