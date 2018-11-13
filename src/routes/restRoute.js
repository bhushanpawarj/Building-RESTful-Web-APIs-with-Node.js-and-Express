import { AddNewContact, GetAllContacts, GetContact, updateContact, deleteContact} from '../controllers/restController';
const routes = (app) =>{

    app.route('/contact')
    .get(GetAllContacts)
    .post(AddNewContact);

    app.route('/contact/:contactId')
    //get Specific Contact
    .get(GetContact)
    .put(updateContact)
    .delete(deleteContact);

}

export default routes;