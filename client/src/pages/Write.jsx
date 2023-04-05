import { useState, useContext } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import {AuthContext} from '../context/authContext';

const Write = () => {
    const state = useLocation().state;
    const [title, setTitle] = useState(state?.title || '');
    const [content, setContent] = useState(state?.content || '');
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || undefined);
    
    const { currentUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            const res = await axios.post('/api/upload', formData);
            return res.data;

        } catch (err) {
            console.log(err);
        }
    }

    const handleClick = async (e) => {
        e.preventDefault();
        let imgUrl = '';
        if (file)
        {
            console.log('about to upload file');
            imgUrl = await upload();

            console.log(imgUrl);
        }
        try {
            state
              ? await axios.put(`/api/blogs/${state._id}`, {
                  title,
                  content,
                  cat,
                  img_url: imgUrl,
                })
              : await axios.post(`/api/blogs/`, {
                  title,
                  content,
                  cat,
                  img_url: imgUrl,
                  user_email: currentUser.user_email,
                  date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                });
            navigate("/");
          } catch (err) {
            console.log(err);
          }
    }
    
    return (
        <div className='add'>
            <div className='content'>
                <input type='text' placeholder='Title' value={title} onChange={e=> setTitle(e.target.value)}/>
                <div className='editorContainer'>
                    <ReactQuill
                        className='editor'
                        theme='snow'
                        value={content}
                        onChange={setContent}
                    />
                </div>
                <div className='ad'></div>
            </div>
            <div className='menu'>
                <div className="item">
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input
                        style={{ display: "none" }}
                        type="file"
                        id="file"
                        name=""
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <label className="file" htmlFor="file">
                        Upload Image
                    </label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button onClick={handleClick}>Publish</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                        <input
                            type="radio"
                            checked={cat===undefined || cat === 'recipe'}
                            name="cat"
                            value="recipe"
                            id="recipe"
                            onChange={e=>setCat(e.target.value)}
                        />
                        <label htmlFor="recipe">Recipe</label>
                    </div>
                    <div className="cat">
                        <input
                            type="radio"
                            checked={cat === 'food'}
                            name="cat"
                            value="food"
                            id="food"
                            onChange={e=>setCat(e.target.value)}
                        />
                        <label htmlFor="food">Food</label>
                    </div>
                    <div className="cat">
                        <input
                            type="radio"
                            checked={cat === 'nutrition'}
                            name="cat"
                            value="nutrition"
                            id="nutrition"
                            onChange={e=>setCat(e.target.value)}
                        />
                        <label htmlFor="nutrition">Nutrition</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write;