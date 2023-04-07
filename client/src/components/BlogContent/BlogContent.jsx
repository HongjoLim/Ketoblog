import './BlogContent.css';
import sampleImg from '../../images/sample.jpg';

const BlogContent = () => {
    return (
        <div className="blogContent">
            <div className='blogContentWrapper'>
                <img className='blogContentImg' src={sampleImg} alt='' />
                <h1 className='blogContentTitle'>
                    Title
                    <div className='blogContentIcons'>
                        <i className="blogContentIcon far fa-edit"></i>
                        <i className="blogContentIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className='blogContentInfo'>
                    <span className='blogContentUser'>User: <b>username</b></span>
                    <span className='blogContentDate'>1 day ago</span>
                </div>
                <p className='blogContentContent'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    );
}

export default BlogContent;