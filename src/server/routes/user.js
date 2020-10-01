const express = require("express");
const router = express.Router();
const { check } = require('express-validator');

const userCtrl = require("../controllers/user");

router.get("/", userCtrl.getAllUsers);
router.get("/:id", userCtrl.getOneUser);
router.post("/signup", [
        check('username', 'Username is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({ min: 6 }),
        check('color', 'Color is required').not().isEmpty(),
    ],
    userCtrl.signup);
router.post("/login", [
        check('email', 'Please include a valid email').isEmail(),
        check(
            'password',
            'Password is required.'
        ).exists()
    ],
    userCtrl.login);
router.put("/:id", userCtrl.updateUser);
router.delete("/:id", userCtrl.deleteUser);

module.exports = router;
