export class ServiceConfig {
    public static DOMAINAPI = "http://localhost:6060/"
    public static API_AUTH = ServiceConfig.DOMAINAPI;
    public services = {

        login: { url: ServiceConfig.API_AUTH + 'auth/login', header: true, authorization: false, datatype: 'API' },

        getroles: { url: ServiceConfig.API_AUTH + 'role/roles', header: true, authorization: false, datatype: 'API' },
        addrole: { url: ServiceConfig.API_AUTH + 'role/createrole', header: true, authorization: false, datatype: 'API' },
        getroleid: { url: ServiceConfig.API_AUTH + 'role/rolebyid/', header: true, authorization: false, datatype: 'API' },
        updaterole: { url: ServiceConfig.API_AUTH + 'role/updaterole', header: true, authorization: false, datatype: 'API' },
        deleterole: { url: ServiceConfig.API_AUTH + 'role/deleterole/', header: true, authorization: false, datatype: 'API' },


        getdepts: { url: ServiceConfig.API_AUTH + 'dept/depts', header: true, authorization: false, datatype: 'API' },
        adddept: { url: ServiceConfig.API_AUTH + 'dept/createdept', header: true, authorization: false, datatype: 'API' },
        getdeptid: { url: ServiceConfig.API_AUTH + 'dept/deptbyid/', header: true, authorization: false, datatype: 'API' },
        updatedept: { url: ServiceConfig.API_AUTH + 'dept/updatedept', header: true, authorization: false, datatype: 'API' },
        deletedept: { url: ServiceConfig.API_AUTH + 'dept/deletedept/', header: true, authorization: false, datatype: 'API' },

        getFaculty: { url: ServiceConfig.API_AUTH + 'employee/employees', header: true, authorization: true, datatype: 'API' },
        empbyid: { url: ServiceConfig.API_AUTH + 'employee/empbyid/', header: true, authorization: false, datatype: 'API' },
        addFaculty: { url: ServiceConfig.API_AUTH + 'employee/addemp', header: true, authorization: false, datatype: 'API' },


    }
}