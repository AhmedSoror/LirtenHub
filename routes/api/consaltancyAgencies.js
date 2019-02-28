const express = require('express');
const router = express.Router();
const ConsaltancyAgency =require('../../models/ConsaltancyAgency');

const ConsaltancyAgencies =[
    new ConsaltancyAgency('experts','best consaltancy ever','education'
    ,'www.experts.org','experts@gmail.com','5214752','elrehab','exp12345'
    ,'3','655','eee','ddd','hhh','1'),
    new ConsaltancyAgency('experts1','best consaltancy ever','education'
    ,'www.experts.org','experts1@gmail.com','5214752','elrehab','exp12345'
    ,'3','655','eee','ddd','hhh','2')
];

// Get all consaltancy agancies
router.get('/', (req,res) => res.json({ConsaltancyAgencies : ConsaltancyAgencies}));

// Get a certain consaltancy agancy
router.get('/:id', (req, res) => {
    const consaltantId = req.params.id;
    const consaltant =ConsaltancyAgencies.find(consaltant => consaltant.id === consaltantId);
    res.json(consaltant);
});

// Create a consaltancy agancy
router.post('/', (req, res) => {
    const name = req.body.name;
    const description= req.body.description;
    const specialization=req.body.specialization;
    const website=req.body.website;
    const mail=req.body.mail;
    const fax=req.body.fax;
    const address=req.body.address;
    const password=req.body.password;
    const rate=req.body.rate;
    const reports=req.body.reports;
    const boardMembers=req.body.boardMembers;
    const partners=req.body.partners;
    const events=req.body.events;
    const consaltant = {
        name: name,
        description: description,
        specialization: specialization,
        website: website,
        mail: mail,
        fax: fax,
        address: address,
        password: password,
        rate: rate,
        reports: reports,
        boardMembers: boardMembers,
        partners: partners,
        events: events,
        id: ConsaltancyAgencies.length+1
    };
    ConsaltancyAgencies.push(consaltant);
    res.json({ConsaltancyAgencies : ConsaltancyAgencies});
});

// Update a consaltancy agancy info
router.put('/:id', (req, res) => {
    const consaltantId = req.params.id;
    const name = req.body.name;
    const description= req.body.description;
    const specialization=req.body.specialization;
    const website=req.body.website;
    const mail=req.body.mail;
    const fax=req.body.fax;
    const address=req.body.address;
    const password=req.body.password;
    const rate=req.body.rate;
    const reports=req.body.reports;
    const boardMembers=req.body.boardMembers;
    const partners=req.body.partners;
    const events=req.body.events; const adminId = req.params.id; 
    const consaltant = ConsaltancyAgencies.find(consaltant => consaltant.id === consaltantId);
    consaltant.name=name;
    consaltant.description=description;
    consaltant.specialization=specialization;
    consaltant.website=website;
    consaltant.mail=mail;
    consaltant.fax=fax;
    consaltant.address=address;
    consaltant.password=password;
    consaltant.rate=rate;
    consaltant.reports=reports;
    consaltant.boardMembers=boardMembers;
    consaltant.partners=partners;
    consaltant.events=events;
    res.json({ConsaltancyAgencies : ConsaltancyAgencies});
});


// Delete a consaltancy agancy
router.delete(':id', (req, res) => {
    const consaltantId = req.params.id;
    const consaltant = ConsaltancyAgencies.find(consaltant => consaltant.id === consaltantId);
    const index = ConsaltancyAgencies.indexOf(consaltant);
    ConsaltancyAgencies.splice(index,1);
    res.json({ConsaltancyAgencies : ConsaltancyAgencies});
});

module.exports = router;