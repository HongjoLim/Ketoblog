import Sidebar from '../../components/Sidebar/Sidebar';
import './Account.css';

const Account = () => {
    const currentUser = { fistname: "Hongjo" }
    return (
        <div className="account">
            <div className='accountWrapper'>
                <h1>Your Account</h1>
                <span>Welcome back, <b>{currentUser.fistname}</b></span>
                <br/>
                <br/>
                <p>Here you can manage your account info</p>
                <form className="accountForm">
                    <div className="accountImg">
                        <img
                            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="accountIcon far fa-user-circle"></i>{" "}
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            style={{ display: "none" }}
                            className="accountIconInput"
                        />
                    </div>
                    <div className='username'>
                        <label>Username: </label>
                        <span>Hongjo Lim</span>
                    </div>
                    <div className='email'>
                        <label>Email: </label>
                        <span>hongjolim@geotab.com</span>
                    </div>
                    <div className='accountButtons'>
                        <button className="accountChangePassword" type="submit">
                            Update Password
                        </button>
                        <button className="accountDeleteAccount" type="submit">
                            Delete Account
                        </button>
                    </div>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}

export default Account;