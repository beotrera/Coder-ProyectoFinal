import express from 'express';
import { UserDAO } from '../../db/dao/user.js'

const route = express.Router()

route.get('/list', async (req, res) => {
    let list = await UserDAO.getUsers();
    res.status(200).json(list)
})

export default route