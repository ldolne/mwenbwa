const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    y_lambert72: {type: Number, required: true},
    arbotag: {type: Number, required: true},
    date_donnees: {type: Date, required: true},
    x_lambda: {type: Number, required: true},
    geoloc: {
        lat: {type: Number, required: true},
        lon: {type: Number, required: true},
    },
    hauteur_totale: {type: Number, required: true},
    x_lambert72: {type: Number, required: true},
    y_phi: {type: Number, required: true},
    nom_complet: {type: String, required: true},
    diametre_cime: {type: Number, required: true},
    circonf: {type: Number, required: true},
});

module.exports = mongoose.model("Data", dataSchema);

// Paragraphe perso
// Paragraphe sur why cette société, qu'est-ce qui intéresse, pourquoi on veut aller chez eux (personnaliser en citant leurs projets) + anecdote intéressante
// Se vanter par rapport à compétences développées
// Nicolas m'a conseillé
// Je veux un rendez-vous, puis merci à bientôt
