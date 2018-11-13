import mongoose from 'mongoose';
import {ContactSchema} from '../models/restModel';

const Contact=mongoose.model('Contact',ContactSchema);

export const AddNewContact= (req,res) =>{
    let newCOntact = new Contact(req.body);
    newCOntact.save((err,contact)=> {
        if(err){
            res.send(err);
        }
        res.send(contact);
    });
};

export const GetAllContacts=(req,res)=>{
    Contact.find({},(err,contact)=>{
        if(err){
            res.send(err);
        }
        res.send(contact);

    });
};

export const GetContact = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.send(contact);

    });
};

export const updateContact=(req,res)=>{
    Contact.findOneAndUpdate({_id : req.params.contactId}, req.body,{new : true} ,(err ,contact)=>{
        if (err) {
            res.send(err);
        }
        res.send(contact);
        }); 
};
export const deleteContact=(req,res)=>{
    Contact.remove({_id : req.params.contactId} ,(err,contact)=> {
        if (err){
            res.send(err);
        }
        res.send({  message : 'Successfully Deleted The Contact'});
    })
}