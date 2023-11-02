const express = require("express");
const path = require("path");
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");


dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: false }));

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});



const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

app.get("/register", (req, res) => {
    res.render("register");
});

app.post('/register', async (req, res) => {
    try {
        const { name, username, email, password, repeatpassword } = req.body;
        
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please provide all required fields.' });
        }

        if (password !== repeatpassword) {
            return res.status(401).json({ message: 'Please make sure the passwords introduced match.' });
        }

        const connection = await pool.getConnection();

        const [existingUsers] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

        if (existingUsers.length > 0) {
            return res.status(402).json({ message: 'Username already in use' });
        }

        const [existingEmails] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

        if (existingEmails.length > 0) {
            return res.status(403).json({ message: 'Email already in use' });
        }

        try {
            const [results, fields] = await connection.execute('INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)', [name, username, email, password]);
            let defaultPoints = 0;
            const [resultsPoints, fieldsPoints] = await connection.execute('INSERT INTO points (username, points) VALUES (?, ?)', [username, defaultPoints]);
            connection.release();
            console.log('Insert successful.');
            res.status(200).json({ message: 'Registration successful' });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Registration failed' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Registration failed' });
    }
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const [rows] = await pool.query('SELECT * FROM users WHERE username = ? and password = ?', [username, password]);

    if (rows.length === 0) {
        return res.status(401).json({ message: 'Invalid username or password' });
    } else {
        res.render("cart");
    }
});

app.get("/cart", (req, res) => {
    res.render("cart");
});

app.post('/cart', async (req, res) => {
    const { quantityinput1, quantityinput2, quantityinput3 } = req.body;

    try {
        const [results, fields] = await connection.execute('INSERT INTO cart (username, lapte, oua, unt) VALUES (?, ?, ?, ?)', ["denis", quantityinput1, quantityinput2, quantityinput3]);
        connection.release();
        console.log('Insert successful.');
        res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Registration failed' });
    }
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});