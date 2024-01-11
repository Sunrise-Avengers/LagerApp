import mongoose from "mongoose";
import ContactModel from "./ContactModel.js";

// Verbinde dich mit der MongoDB auf dem Standardport (27017)
mongoose.connect("mongodb://localhost:27017/lagerapp", { useUnifiedTopology: true, useNewUrlParser: true });
 
const dataToAdd = [
  "Luna Binder",
  "Lena Bruggmann",
  "Lorenzo Lettieri",
  "David Walt",
  "Luca Amrein",
  "Shqipron Preniqi",
  "David Kitanovski",
  "Jack Siemers",
  "Liam Gleeson",
  "Kian Ganz",
  "Bianka Zieba",
  "Joshua Biagini",
  "Ajan Tairi",
  "Halil Yener",
  "Jonny Shaba",
  "Kevin Vo",
  "Alexandros Delis",
  "Yanik Wisler",
  "Hanisten Thivakaran",
  "Markus Menge",
  "Jan Bösch",
  "Nam Thai Nguyen",
  "Blerian Bakolli",
  "David Dakoli"
 
];
 
// Daten für den gleichen Benutzernamen und das gleiche Passwort
const commonPassword = "1234";
 
let counter = 1; // Starte bei 1
 
const inputData = dataToAdd.map((name) => {
  const [firstName, lastName] = name.split(' ');
  const username = firstName; // Setze den Benutzernamen dem Vornamen gleich
  
  // Füge nur Lernende hinzu
  if (dataToAdd.includes(username)) {
    return {
      _id: counter++,
      Username: username,
      FirstName: firstName,
      LastName: lastName,
      Password: commonPassword
    };
  }
  return null; // Überspringe Nicht-Lernende
}).filter(user => user !== null); // Filtere null-Werte heraus
 
// Füge die Daten ein
async function insertData() {
  try {
    await ContactModel.insertMany(inputData, { ordered: false });
    console.log("Daten erfolgreich in 'Users' Collection der 'lagerapp' Datenbank eingefügt");
  } catch (error) {
    console.error("Fehler beim Einfügen der Daten", error);
  } finally {
    // Schließe die Verbindung zur Datenbank
    mongoose.connection.close();
  }
}
 
// Starte das Einfügen
insertData();
 