const Queue = require('bull');
const imageThumbnail = require('image-thumbnail');

let options = { width: [500, 250, 100]};

imageThumbnail('resources/images/dog.jpg')
    .then(thumbnail => { console.log(thumbnail) })
    .catch(err => console.error(err));