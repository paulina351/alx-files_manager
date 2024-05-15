import express from express;

const app = express();
const port = 3000;

app.get('/status/getStatus', (req, res) => {
  return getStatus;
});

app.get('/stats/getStats', (req, res) => {
    return getStats;
});

app.post('/users/UsersController/:postNew', (req, res) => {
    return users;
});

app.get('/connect/AuthController/:getConnect', (req, res) => {
    return connect;
});

app.get('/disconnect/AuthController/:getDisconnect', (req, res) => {
    return disconnect;
});

app.get('/user/me/UserController/:getMe', (req, res) => {
    return user;
});

app.post('/files/FilesController/:postUpload', (req, res) => {
    return file;
});

app.get('/files/FilesController/:id/getShow', (req, res) => {
    return files;
});

app.get('/files/FilesController/:getIndex', (req, res) => {
    return files;
});

app.put('/files/publish/FilesController/:id/putPublish', (req, res) => {
    return files;
});

app.put('/files/publish/FilesController/:id/putUnpublish', (req, res) => {
    return files;
});

app.get('/files/data/FilesController/:id/getFile', (req, res) => {
    return files;
});






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});