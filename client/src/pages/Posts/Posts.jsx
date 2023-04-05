import './Posts.css';

const Posts = () => {
    return (
        <div className='posts'>
            <Post post={"post1"}/>
            <Post post={"post2"}/>
            <Post post={"post3"}/>          
            <Post post={"post4"}/>
            <Post post={"post5"}/>
        </div>
    );
}

export default Posts;