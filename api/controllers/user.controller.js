import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import bcrypt from 'bcryptjs';

export const test = (req, res) => {
    res.send('app is still working....!');
};

export const updateUser = async (req, res, next) => {
    try {
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
        }

        // Check if the user has permission to update the specified account
        if (req.user.id !== req.params.id) {
            return next(errorHandler(403, 'You can only update your own account'));
        }

        const updatePassword = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    avatar: req.body.avatar,
                },
            },
            { new: true }
        );

        const { password, ...rest } = updatePassword._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};
