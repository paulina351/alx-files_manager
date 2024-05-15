import  express from 'express';

app.get('/newUser', (req, res) => {
    let email = req.query.email || '';
    const password = req.query.password || '';

    email = email.replace(/[!@#$%^&*]/g, '');

    if (!email || !password || users[email]) {
      return res.sendStatus(400);
    }

    const salt = crypto.randomBytes(128).toString('base64');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');

    users[username] = { salt, hash };

    res.sendStatus(200);
});

app.get('/user/me', (req, res) => {
    res.send();
    if (!found) {
        return(unauthorized, 401);
    }
    else {
        return({ ${email}, ${id}});
    }
});