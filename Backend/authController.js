import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ContactModel from './ContactModel.js';

const commonPassword = '1234';  // Setze das gewünschte gemeinsame Passwort

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Überprüfe, ob der Benutzer ein Lernender ist
    const isLearner = await ContactModel.find({ Username: username, Password: commonPassword });

    if (!isLearner) {
      return res.status(401).json({ success: false, message: 'Authentication failed. User not found or not a learner.' });
    }

    const user = await ContactModel.findOne({ Username: username });

    /*
    const isPasswordValid = await bcrypt.compare(password, commonPassword);
    console.log(password);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Authentication failed. Incorrect password.' });
    }
    */
    const token = jwt.sign({ username: user.Username }, 'your-secret-key', { expiresIn: '1h' });

    // Speichere das Token in der Datenbank
    await ContactModel.updateOne({ _id: user._id }, { Token: token });

    // Logge den Benutzer in der Konsole oder speichere ihn in einer Log-Datei
    console.log(`User ${user.Username} logged in at ${new Date()}`);

     // Setze den Content-Type-Header auf application/json
     res.setHeader('Content-Type', 'application/json');

    res.json({ success: true, token });
  } catch (error) {
    console.error('Error during login', error);
    res.status(500).json({ success: false, message: 'Authentication failed.' });
  }
};

export default {
  login,
};
