import express from 'express';
import AnnouncementMessage from "../models/announcementMessage.js";
import mongoose from 'mongoose';

const router = express.Router();

export const getAnnouncements = async (req, res) => {
    try{
        const announcementMessages = await AnnouncementMessage.find();
        res.status(200).json({ data: announcementMessages})
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAnnouncement = async (req, res) => {
    const announcement = req.body;
    const newAnnouncementMessage = new AnnouncementMessage({...announcement, createdAt: new Date().toISOString()});
    try {
        await newAnnouncementMessage.save();
        res.status(201).json(newAnnouncementMessage)
    } catch (error){
        res.status(409).json({ message: error.message })
    }
}

export const deleteAnnouncement = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No announcement with id: ${id}`);

    await AnnouncementMessage.findByIdAndRemove(id);

    res.json({ message: "Announcement deleted successfully." });
}

export default router;