const Commande = require("../models/Commande");
const getAll = async (req, res) => {
  try {
    const commandes = await Commande.find();
    res.status(200).json(commandes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const commande = await Commande.findById(id);
    if (!commande) return res.status(404).json({ error: "Commande not found" });
    res.status(200).json(commande);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { prix_totale, nomber_de_produit, client, produits } = req.body;
    const newCommande = new Commande({
      prix_totale,
      nomber_de_produit,
      client,
      produits,
    });
    const savedCommande = await newCommande.save();
    res.status(201).json({commande:savedCommande,message:`created successfully`});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
   

    const updatedCommande = await Commande.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedCommande)
      return res.status(404).json({ error: "Commande not found" });

    res.status(200).json({commande:updatedCommande,message:`updated successfully`});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const removedCommande = await Commande.findByIdAndDelete(id);
    if (!removedCommande)
      return res.status(404).json({ error: "Commande not found" });
    res.status(200).json({message:`removed successfully`});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
