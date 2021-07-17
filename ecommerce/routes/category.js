const express = require('express');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const { create, categoryById, read } = require('../controllers/category');

const router = express.Router();

router.get('/category/:categoryId', read);

router.post(
  '/category/create/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  create
);

router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;
