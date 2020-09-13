const express = require('express')
const { OK } = require('http-status-codes')

const wrap = require('../wrap.js')
const { routers } = require('../constants')

const { usersController } = require('../controllers')

const router = express.Router()

router.get(routers.USERS, wrap(usersController.listUsers))

router.post(routers.USERS, wrap(usersController.createUsers))

router.put(routers.USERS, wrap(usersController.updateUsers))

router.delete(routers.USERS, wrap(usersController.deleteUsers))

router.get(routers.HEALTH, wrap(async (req, res) => {
    res.status(OK).json({ message: 'OK' })
  }))

module.exports = router