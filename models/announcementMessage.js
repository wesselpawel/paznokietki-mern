import mongoose from 'mongoose';

const announcementSchema = mongoose.Schema({
    title: String,
    description: String,
    author: String,
    tags: [String],
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

var AnnouncementMessage = mongoose.model('AnnouncementMessage', announcementSchema);

export default AnnouncementMessage;