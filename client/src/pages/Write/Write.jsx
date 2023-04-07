import './Write.css';

import WriteContent from '../../components/WriteContent/WriteContent';
import Sidebar from '../../components/Sidebar/Sidebar';

const Write = () => {
    return (
        <div className="write">
            <WriteContent />
            <Sidebar />
        </div>
    );
}

export default Write;