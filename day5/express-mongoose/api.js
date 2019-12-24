
var router = require('express').Router();
var user = require('./models/usermodel');

router.post('/user', (req, res) => {
    user.create(req.body, (err, result) => {
        if (err) res.send(500, err);
        res.send('data inserted: ' + JSON.stringify(result));
    });
});


router.get('/user/:name', (req, res) => {
    user.findOne({ name: req.params.name }, (err, result) => {
        if (err) res.send(500, err);
        res.send('data found: ' + JSON.stringify(result));
    })
});

router.put('/user', (req, res) => {
    let updateObj = {
        name: req.body.name,
        city: req.body.city,
        job: req.body.job
    };

    user.findOneAndUpdate({ name: req.body.name },
        { $set: updateObj },
        { upsert: true },
        (err, result) => {
            if (err) res.send(500, err);
            res.send('data updated: ' + JSON.stringify(result));
        });
});


router.delete('/user', (req, res) => {
    user.findOneAndDelete({ name: req.body.name },
        (err, result) => {
            if (err) res.send(500, err);
            res.send('data deleted: ' + JSON.stringify(result));
        });
});

module.exports = router;