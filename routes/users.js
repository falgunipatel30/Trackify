const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const MongoClient = require("mongodb");
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const constants = require('../constants/app_constants');



const MongoDB_URL = constants.MongoDB_URL;
const DATABASE_NAME = constants.DATABASE_NAME;


// Load User model
const User = require('../models/User');
const Domain = require('../models/Domain');
const Issue = require('../models/Issue')

const { forwardAuthenticated } = require('../config/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));


// Register
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];


  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/intro',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

array=[]
// render dashboard



// submit Domain from Dashboard page
router.post('/dashboard', (req, res, next)=>{

  const {name } = req.body
  console.log(name)
  if(array.length!=0){
    array=[]
  }
  array.push(name)

  res.render('ticketissue',{name:name});

});

// ticketissue page
//router.get('/ticketissue', forwardAuthenticated, (req, res) => res.render('ticketissue'));

// ticketissue POST
router.post('/ticketissue',(req, res, next)=>{
  // passport.authenticate('local', {
  //   successRedirect: '/users/ticketissue',
  //   failureRedirect: '/users/login',
  //   failureFlash: true
  // })(req, res, next);
  let haveIt = [];
  function generateUniqueRandom(maxNr) {
      //Generate random number
      let random = (Math.floor(Math.pow(10, maxNr-1) + Math.random() * 9 * Math.pow(10, maxNr-1))).toFixed();
      //Coerce to number by boxing
      random = Number(random);

      if(!haveIt.includes(random)) {
          haveIt.push(random);
          return random;
      } else {
          if(haveIt.length < maxNr) {
            //Recursively generate number
           return  generateUniqueRandom(maxNr);
          } else {
            console.log('No more numbers available.')
            return false;
          }
      }
  }

  const newIssue = new Issue({
      user: req.user.name,
      ticket_status: req.body.ticket_status,
      ticket_prior : req.body.ticket_prior,
      ticket_type : req.body.ticket_type,
      comment :  req.body.comment,
      host_name:req.body.host_name,
      file : req.body.file,
      date: req.body.date

  });
  console.log(newIssue.user)
  //console.log(domain)
  console.log(haveIt)
  newIssue.save(function storeUser(err, user) {
     //TODO: check if the user was saved correctly.
     if(err){
       console.log(err)
     }else{
       console.log(user)
     }
  });


  res.render('success',{newIssue:newIssue})

  MongoClient.connect(MongoDB_URL, function(err, db) {
    if (err) throw err;
    var dbo = db.db(databasename);
    dbo.collection("domains").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.email);
      db.close();
    });
  });

  const log = console.log;

  // Step 1
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'user0@gmail.com', // TODO: your gmail account
          pass: '<password>' // TODO: your gmail password
      }
  });

  // Step 2
  let mailOptions = {
      from: 'user0@gmail.com', // TODO: email sender
      to: 'userq@gmail.com', // TODO: email receiver
      subject: 'Ticketing tool  - Your Ticket is Raised' ,
      text: 'Ticket Id : '+ newIssue._id + '\n' +
            'Ticket Type : '+ newIssue.ticket_type + '\n'+
            'Ticket Prior : '+ newIssue.ticket_prior + '\n'+
            'Ticket Description: ' + newIssue.comment +'\n'
  };

  // Step 3
  transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
          return log('Error occurs', err);
      }
      return log('Email sent!!!');
  });
});


// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});



module.exports = router;
