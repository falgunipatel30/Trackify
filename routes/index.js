const express = require('express');
const router = express.Router();
const { MongoClient }= require("mongodb");
const constants = require('../constants/app_constants');

const MongoDB_URL = constants.MongoDB_URL;
const DATABASE_NAME = constants.DATABASE_NAME;
const COLLECTION_ISSUE= constants.COLLECTION_ISSUE;

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

router.get('/intro', ensureAuthenticated, (req, res) =>
  res.render('intro', {
    user: req.user
  })
);


router.get('/success', ensureAuthenticated, (req, res) =>
  res.render('success', {
    user: req.user
  })
);


router.get('/display', async (req, res) => {
  const client = new MongoClient(MongoDB_URL);

  try {
    await client.connect();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_ISSUE);
 
    
        const result = await collection.find({}).toArray();
        res.render('view', {issues: result})
    
  
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
} finally {
    await client.close();
}
});





module.exports = router;
