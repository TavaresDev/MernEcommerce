import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@exemple.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'john User',
        email: 'john@exemple.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Bily User',
        email: 'bily@exemple.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
]

export default users