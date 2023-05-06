import { useState } from "react";
import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import {Avatar} from "@mui/material"

export const Upload = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);
    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }
    console.log(image);
    const handleSubmit = () => {
        const imageRef = ref(storage, "image") // name is going to be image we click on submit
        uploadBytes(imageRef, image).then(() => {
            getDownloadURL(imageRef).then((url) => {
                setUrl(url);
            }).catch(error => {
                console.log(error.message, "error getting the image url");
            });
        }).catch((error) => {
            console.log(error.message);
        });
    };
    return (
        <div>
            <Avatar
                alt="Remy Sharp"
                src={url}
                sx={{width: 150,height:150}}
            />
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleSubmit}>upload</button>
            <h1>HI</h1>
        </div>
    )
}