export class ServiceConfig {
    public static DOMAINAPI = "http://localhost:6060/"
    public static API_AUTH = ServiceConfig.DOMAINAPI;
    public services = {

        login: { url: ServiceConfig.API_AUTH + 'auth/login', header: true, authorization: false, datatype: 'API' },
        signin: { url: ServiceConfig.API_AUTH + 'auth/signin', header: true, authorization: false, datatype: 'API' },
        getgender: { url: ServiceConfig.API_AUTH + 'auth/gender', header: true, authorization: false, datatype: 'API' },
        getbg: { url: ServiceConfig.API_AUTH + 'auth/bg', header: true, authorization: false, datatype: 'API' },
        getname: { url: ServiceConfig.API_AUTH + 'auth/name', header: true, authorization: true, datatype: 'API' },


        getroles: { url: ServiceConfig.API_AUTH + 'role/roles', header: true, authorization: true, datatype: 'API' },
        addrole: { url: ServiceConfig.API_AUTH + 'role/createrole', header: true, authorization: true, datatype: 'API' },
        getroleid: { url: ServiceConfig.API_AUTH + 'role/rolebyid/', header: true, authorization: true, datatype: 'API' },
        updaterole: { url: ServiceConfig.API_AUTH + 'role/updaterole', header: true, authorization: true, datatype: 'API' },
        deleterole: { url: ServiceConfig.API_AUTH + 'role/deleterole/', header: true, authorization: true, datatype: 'API' },


        getdepts: { url: ServiceConfig.API_AUTH + 'dept/depts', header: true, authorization: true, datatype: 'API' },
        adddept: { url: ServiceConfig.API_AUTH + 'dept/createdept', header: true, authorization: true, datatype: 'API' },
        getdeptid: { url: ServiceConfig.API_AUTH + 'dept/deptbyid/', header: true, authorization: true, datatype: 'API' },
        updatedept: { url: ServiceConfig.API_AUTH + 'dept/updatedept', header: true, authorization: true, datatype: 'API' },
        deletedept: { url: ServiceConfig.API_AUTH + 'dept/deletedept/', header: true, authorization: true, datatype: 'API' },



        getFaculty: { url: ServiceConfig.API_AUTH + 'employee/employees', header: true, authorization: true, datatype: 'API' },
        empbyid: { url: ServiceConfig.API_AUTH + 'employee/empbyid/', header: true, authorization: true, datatype: 'API' },
        addFaculty: { url: ServiceConfig.API_AUTH + 'employee/addemp', header: true, authorization: true, datatype: 'API' },
        updateEmp: { url: ServiceConfig.API_AUTH + 'employee/updateemp', header: true, authorization: true, datatype: 'API' },
        deleteEmp: { url: ServiceConfig.API_AUTH + 'employee/deleteemp/', header: true, authorization: true, datatype: 'API' },


        addstudent: { url: ServiceConfig.API_AUTH + 'student/addstudent', header: true, authorization: true, datatype: 'API' },
        getstudents: { url: ServiceConfig.API_AUTH + 'student/students', header: true, authorization: true, datatype: 'API' },
        stubyid: { url: ServiceConfig.API_AUTH + 'student/studentid/', header: true, authorization: true, datatype: 'API' },
        getbydept: { url: ServiceConfig.API_AUTH + 'student/studentdept/', header: true, authorization: true, datatype: 'API' },
        updateStu: { url: ServiceConfig.API_AUTH + 'student/updatestudent', header: true, authorization: true, datatype: 'API' },
        deleteStu: { url: ServiceConfig.API_AUTH + 'student/deletestudent/', header: true, authorization: true, datatype: 'API' },


        addtask: { url: ServiceConfig.API_AUTH + 'task/createtask', header: true, authorization: true, datatype: 'API' },
        gettasks: { url: ServiceConfig.API_AUTH + 'task/gettasks', header: true, authorization: true, datatype: 'API' },
        getcount: { url: ServiceConfig.API_AUTH + 'task/getcount/', header: true, authorization: true, datatype: 'API' },







    }
}