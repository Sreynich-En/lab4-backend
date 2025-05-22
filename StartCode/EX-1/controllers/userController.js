import{
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
} from '../models/userModel.js';

export function listUsers(req, res){
    res.json(getAllUsers());
}

export function getUser(req, res){
    const userId = parseInt(req.params.id);
    const user = getUserById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
}

export function createUser(req, res){
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    const newUser = addUser({ name, email });
    res.status(201).json(newUser);
}

export function updateUserController(req, res){
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;

    const user = updateUser(userId, { name, email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json(user);
}

export function deleteUserController(req, res){
    const userId = parseInt(req.params.id);
    const deleted = deleteUser(userId);
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
}