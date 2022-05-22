export class ServiceConfig{
    public static DOMAINAPI ="http://localhost:6060/"
    public static API_AUTH = ServiceConfig.DOMAINAPI;
    public services ={
        login:{url: ServiceConfig.API_AUTH +'employees/login', header: true, authorization: false, datatype:'API'},
        register:{url: ServiceConfig.API_AUTH +'employees/register', header: true, authorization: false, datatype:'API'},


        getroles:{url: ServiceConfig.API_AUTH +'role/roles', header: true, authorization: false, datatype:'API'},
        addrole:{url: ServiceConfig.API_AUTH +'role/createrole', header: true, authorization: false, datatype:'API'},
        getroleid:{url: ServiceConfig.API_AUTH +'role/rolebyid/', header: true, authorization: false, datatype:'API'},
        updaterole:{url: ServiceConfig.API_AUTH +'role/updaterole', header: true, authorization: false, datatype:'API'},
        
        
        getdepts:{url: ServiceConfig.API_AUTH +'dept/depts', header: true, authorization: false, datatype:'API'},
        adddept:{url: ServiceConfig.API_AUTH +'dept/createdept', header: true, authorization: false, datatype:'API'}
    }
}