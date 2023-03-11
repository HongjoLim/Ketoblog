import { useState } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
    const [value, setValue] = useState('');

    const [file, setFile] = useState({});

    const handleClick = (e) => {

    }

    return (
        <div className='add'>
            <div className='content'>
                <input type='text' placeholder='Title' />
                <div className='editorContainer'>
                    <ReactQuill
                        className='editor'
                        theme='snow'
                        value={value}
                        onChange={setValue}
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
                            name="cat"
                            value="blog"
                            id="blog"
                        />
                        <label htmlFor="Blog">Blog</label>
                    </div>
                    <div className="cat">
                        <input
                            type="radio"
                            name="cat"
                            value="recipe"
                            id="recipe"
                        />
                        <label htmlFor="recipe">Recipe</label>
                    </div>
                    <div className="cat">
                        <input
                            type="radio"
                            name="cat"
                            value="food"
                            id="food"
                        />
                        <label htmlFor="food">Food</label>
                    </div>
                    <div className="cat">
                        <input
                            type="radio"
                            name="cat"
                            value="nutrition"
                            id="nutrition"
                        />
                        <label htmlFor="nutrition">Nutrition</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write;