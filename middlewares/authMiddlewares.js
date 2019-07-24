'use strict';
const mongoose = require('mongoose');

const isIdvalid = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.redirect(`/`);
  }
  next();
};

const isLoggedIn = (req, res, next) => {
  if (req.session.currentUser) {
    return res.redirect('/');
  }
  next();
};

const isNotLoggedIn = (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect('/');
  }
  next();
};

const isFormFilled = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.redirect(req.path);
  }
  next();
};

module.exports = { isIdvalid, isLoggedIn, isNotLoggedIn, isFormFilled };
