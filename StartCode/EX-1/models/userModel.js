// In-memory user store
let users = [
    { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com' },
    { id: 3, name: 'Charlie Lee', email: 'charlie.lee@example.com' },
    { id: 4, name: 'Diana Prince', email: 'diana.prince@example.com' },
    { id: 5, name: 'Ethan Brown', email: 'ethan.brown@example.com' },
    { id: 6, name: 'Fiona Garcia', email: 'fiona.garcia@example.com' },
    { id: 7, name: 'George King', email: 'george.king@example.com' },
    { id: 8, name: 'Hannah White', email: 'hannah.white@example.com' },
    { id: 9, name: 'Ian Black', email: 'ian.black@example.com' },
    { id: 10, name: 'Jane Miller', email: 'jane.miller@example.com' },
    { id: 11, name: 'Kyle Green', email: 'kyle.green@example.com' },
    { id: 12, name: 'Laura Adams', email: 'laura.adams@example.com' },
    { id: 13, name: 'Mike Davis', email: 'mike.davis@example.com' },
    { id: 14, name: 'Nina Torres', email: 'nina.torres@example.com' },
    { id: 15, name: 'Oscar Young', email: 'oscar.young@example.com' },
    { id: 16, name: 'Paula Scott', email: 'paula.scott@example.com' },
    { id: 17, name: 'Quentin Wright', email: 'quentin.wright@example.com' },
    { id: 18, name: 'Rachel Hall', email: 'rachel.hall@example.com' },
    { id: 19, name: 'Steve Baker', email: 'steve.baker@example.com' },
    { id: 20, name: 'Tina Morgan', email: 'tina.morgan@example.com' }
];

// GET /users - List all users
export function getAllUsers() {
    return users;
}

// GET /users/:id - Get one user
export function getUserById(userId) {
    return users.find(user => user.id === userId);
}

// POST /users - Create new user
export function addUser(user) {
    user.id = users.length ? users[users.length - 1].id + 1 : 1;
    users.push(user);
    return user;
}

// PUT /users/:id - Update user
export function updateUser(userId,data){
    const user = users.find(u => u.id === userId);
    if (!user) return null;
    if(data.name) user.name = data.name;
    if(data.email) user.email = data.email;
    return user;
}

// DELETE /users/:id - Delete user
export function deleteUser(userId) {
    const index = users.find(u => u.id === userId);
    if (index === -1) return false;
    users.splice(index, 1);
    return true;
}