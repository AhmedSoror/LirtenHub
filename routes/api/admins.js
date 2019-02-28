const express = require('express');
const router = express.Router();
const Admin =require('../../models/Admin');

const admins =[
    new Admin('admin1','admin1@gmail.com','Ad1233','123456','1'),
    new Admin('admin2','admin2@gmail.com','Ad1234','133456','2'),
    new Admin('admin3','admin3@gmail.com','Ad1235','143456','3')
];
// Get all admins
router.get('/', (req,res) => res.json({admins : admins}));

// Get a certain admin
router.get('/:id', (req, res) => {
    const adminId = req.params.id;
    const admin =admins.find(admin => admin.id === adminId);
    res.json(admin);
});

// Create a admin
router.post('/', (req, res) => {
    console.log("fffff"+req.body.name);
    const name = req.body.name;
    const mail = req.body.mail;
    const passward = req.body.passward;
    const phone = req.body.phone;
    const admin = {
        name: name,
        mail: mail,
        passward: passward,
        phone: phone,
        id: admins.length+1
    };
    admins.push(admin);
    res.json({admins : admins});
});

// Update a admin info
router.put('/:id', (req, res) => {
    const adminId = req.params.id; 
    const name = req.body.name;
    const mail = req.body.mail;
    const passward = req.body.passward;
    const phone = req.body.phone;
    const admin = admins.find(admin => admin.id === adminId);
    admin.name=name;
    admin.mail=mail;
    admin.passward=passward;
    admin.phone=phone;
    res.json({admins : admins});
});


// Delete a admin
router.delete(':id', (req, res) => {
    const adminId = req.params.id;
    const admin = admins.find(admin => admin.id === adminId);
    const index = admins.indexOf(admin);
    admins.splice(index,1);
    res.json({admins : admins});
});

module.exports = router;