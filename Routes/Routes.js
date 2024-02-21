const express = require('express')

const [getdata,transaction] = require('../Controllers/Controll.js')
const router = express.Router();

router.route('/api/data').get(getdata);
router.route('/transaction').get(transaction)
module.exports=router;