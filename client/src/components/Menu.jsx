import { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = ({cat}) => {
   
    const [blogs, setBlogs] = useState([]);
    console.log(cat);
    return (
        <div className='menu'>
            <h3>Other posts you may like</h3>  
            {/* {blogs?.map((b) => (
                <div className="blog" key={b?._id}>
                    <img src={`../upload/${b.img_url}`} alt=''/>
                    <h4>{b?.title}</h4>
                    <button>Read More</button>
                </div>
            ))} */}
        </div>
    );
}

export default Menu;