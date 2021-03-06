/** @format */

const express = require('express')
const router = express.Router()

// @route     GET api/contacts
// @desc      Get all user contacts
// @acccess   Private
router.get('/', (req, res) => {
  res.send('Get user contacts')
})

// @route     POST api/contacts
// @desc      Add new contacts
// @acccess   Private
router.post('/', (req, res) => {
  res.send('Add contact')
})

// @route     PUT api/contacts/:id
// @desc      Update contacts
// @acccess   Private
router.put('/:id', (req, res) => {
  res.send('Update contact')
})

// @route     DELETE api/contacts/:id
// @desc      DELETE contact
// @acccess   Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact')
})

module.exports = router
