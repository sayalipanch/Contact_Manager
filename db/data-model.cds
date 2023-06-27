using {managed,cuid} from '@sap/cds/common';

namespace my.contacts;

type Contacts{
    ID : Integer;
    contacts : String;
}

entity User {
    key username : String;
    password : String;
    contactBook : many Contacts;
}

entity Contact : managed, cuid {
    key ID : UUID;
    index : Integer;
    name : String;
    email : String;
    number : String;
    address : String;
    isProfessional : Boolean;
    company : String;
    cNumber : String;
    isImportant : Boolean;
}