var multer = require('multer');
var upload = multer({ dest: 'upload/'});
var type = upload.single('photo');

const express = require('express')

const AccountCtrl = require('../controllers/account-ctrl')

const router = express.Router()

router.post('/', type, AccountCtrl.createAccount)
router.post('/login', AccountCtrl.logIn)
router.get('/account', AccountCtrl.getCurrentAccount)
router.put('/account/:id', type, AccountCtrl.updateAccount)
router.get('/account/:id', AccountCtrl.getAccountById)
router.get('/people', AccountCtrl.getAccounts)

module.exports = router