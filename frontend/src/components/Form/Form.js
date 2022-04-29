import React, { useState } from 'react';
import FileBase from 'react-file-base64'
import { useDispatch} from 'react-redux'
import { createAnnouncement } from '../../actions/announcements';

const Form = () => {
    const [formData, setFormData] = useState({
        author: '', title: '', description: '', selectedFile: '', tags: '', authorContact:''
    });
    
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newAnnouncement = {
            author: formData.author,
            title: formData.title,
            description: formData.description,
            tags: formData.tags,
            selectedFile: formData.selectedFile
          }
        dispatch(createAnnouncement(newAnnouncement));
    }

    return(
        <>
            <h1>FORM</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={formData.author}
                name="author"
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                placeholder="Imię..."
                />

                <input
                type="text"
                value={formData.title}
                name="title"
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Tytuł..."
                />

                <input
                type="text"
                value={formData.description}
                name="description"
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Opis..."
                />

                <input
                type="text"
                value={formData.tags}
                name="tags"
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="Tagi..."
                />

                <FileBase
                type="file"
                multiple={false}
                onDone={({base64}) => setFormData({ ...formData, selectedFile: base64 })}
                />
                
                <button
                type="submit"
                >
                    Dodaj ogłoszenie
                </button>
            </form>
        </>
    )
}

export default Form;