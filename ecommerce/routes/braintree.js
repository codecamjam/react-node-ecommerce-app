const express = require('express');
const { requireSignin, isAuth } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const { generateToken } = require('../controllers/braintree');

const router = express.Router();

router.get(
  '/braintree/getToken/:userId',
  requireSignin,
  isAuth,
  generateToken
);

router.param('userId', userById);

module.exports = router;
