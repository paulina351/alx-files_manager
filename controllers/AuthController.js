const express = require('express');

app.get('/auth', (req, res) => {
    let email = req.query.email || '';
    const password = req.query.password || '';

    email = email.replace(/[!@#$%^&*]/g, '');

    if (!email || !password || !users[email]) {
      return res.sendStatus(400);
    }

    const { salt, hash } = users[email];
    const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');

    if (crypto.timingSafeEqual(hash, encryptHash)) {
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  });