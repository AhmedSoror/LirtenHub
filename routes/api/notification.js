// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// Models
const notification = require('../../models/Notification');

// temporary data created as if it was pulled out of the database ...
const notificationList = [
    //basicBussinesInformation,boardMembers,fieldOfWork,partnersList,eventOrganized,formFeedBack,pastProjects
	new notification(1,1,1),
	new notification(2,2,2),
	new notification(3,3,3),
	new notification(4,4,4),
	new notification(5,5,5)
];



// Get all notification
router.get('/', (req, res) => res.json({ data: notificationList }));


// Get specific notification
router.get('/:id', (req, res) => {  
    const  notificationId = (Number)(req.params.id);  
    const notification = notificationList.find(notification => notification.id === notificationId);    
    return res.json({notification});
 });


// Create a new notification
router.post('/', (req, res) => {
     //content,recieverId
	const content = req.body.content;
    const recieverId = req.body.recieverId;
    const notifierId = req.body.notifierId;
    
	const schema = {
		content: Joi.required(),
        recieverId: Joi.required(), 
        notifierId:Joi.required()
	}
	const result = Joi.validate(req.body, schema);
	if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    const notification =new notification(content,recieverId,notifierId);
    return res.json({notification });
    
});

//update notification
router.put('/:id', (req, res) => {
   const  notificationId = (Number)(req.params.id);    
   const notification = notificationList.find(notification => notification.id === notificationId);
   notification.isRead=true; 
   return res.json(notification);
});


//delete notification
router.delete('/:id', (req, res) => {  
   const  notificationId = (Number)(req.params.id);  
  
   const notification = notificationList.find(notification => notification.id === notificationId);
   const index = notificationList.indexOf(notification);
   notificationList.splice(index,1);
   
   return res.json({notificationList});
});


module.exports = router;
