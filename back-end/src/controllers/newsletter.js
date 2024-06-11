import { db } from "../db.js";

const sendNewsletter = (req, res) => {
    const { email, username, subscriptionDate } = req.body;

    // Controlla se l'email è già iscritta
    db.query('SELECT * FROM newsletters WHERE email = ?', [email], (err, results) => {
        if (err) {
            console.error('Error querying the database:', err);
            return res.status(500).json({ message: 'An error occurred', error: err });
        }

        if (results.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Subscription failed.',
                error: 'Email already subscribed'
            });
        }

        // Inserisce il nuovo iscritto nel database
        const query = 'INSERT INTO newsletters (email, username, subscription_date) VALUES (?, ?, ?)';
        db.query(query, [email, username, subscriptionDate], (err, result) => {
            if (err) {
                console.error('Error inserting into the database:', err);
                return res.status(500).json({ message: 'An error occurred', error: err });
            }

            res.status(200).json({
                success: true,
                message: 'You have successfully subscribed to the newsletter.',
                subscriptionDate: new Date().toISOString()
            });
        });
    });
};


export { sendNewsletter }