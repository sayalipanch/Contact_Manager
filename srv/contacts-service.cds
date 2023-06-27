using my.contacts as my from '../db/data-model';

service ContactsService {
  entity Contact as projection on my.Contact;
  action onDelete(ID : UUID) returns String;
  action getID(name: String) returns UUID;
}
