const { Router } = require("express");
const { createUser } = require('../controllers/user.controllers');

const router = Router();

router.post('/api/v1/users', createUser); // controller
// router.get('api/v1/users/:id/posts', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const userPosts =  await Users.findById(id, { include: Posts});
//         res.json(userPosts);
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });

module.exports = router;