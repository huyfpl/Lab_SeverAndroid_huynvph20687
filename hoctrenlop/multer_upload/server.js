const express = require('express')
const app = express()
const port = 3000

const expressHbs = require('express-handlebars').create();

app.set('view engine', '.hbs');
app.set('views', './views');

app.engine('.hbs', expressHbs.engine);

app.get('/', (req, res) => {
    res.render('home', {
        layout:'main',
        showBody: true,
        showContentTinhToan: false,
        showTitle: true
    })
});
app.get('/baitaptinhtoan', (req, res) => {
    res.render('baitaphbs', {
        layout:'baitaphbstinhtoan',
        showBody: false,
        showContentTinhToan: true,
    })
});

app.get('/tinhtoan', (req, res) => {
    res.render('defaultView', {
        layout:'main',
        soA: 15,
        soB: 7,
        kq: 22,
        operator: 'cong',
        showBody: false,
        showContentTinhToan: true
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

