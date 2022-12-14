import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import Logo from '../../../assets/logo.png'

const Header = () => {
    const { user, singOut } = useContext(AuthContext);
    const handleSingOut = () => {
        singOut()
            .then(result => { })
            .catch(error => console.log(error))
    }

    return (
        <div className=' '>

            <div className="navbar max-w-screen-xl mx-auto  " >
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className='mr-3' to={'/home'}>Home</Link>
                            <Link className='mr-3' to={'/services'}>Services</Link>
                            <Link className='mr-3' to={'/about'}>About</Link>
                            <Link className='mr-3' to={'/blog'}>Blog</Link>
                            {user?.uid ? <><Link className='mr-3' to={'/dashboard'}>DashBoard</Link></> : <></>}
                        </ul>
                    </div>
                    <a href='/#' className="btn btn-ghost normal-case text-xl">
                        <img src={Logo} className="w-40" alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <Link className='mr-3' to={'/home'}>Home</Link>
                        <Link className='mr-3' to={'/services'}>Services</Link>
                        <Link className='mr-3' to={'/about'}>About</Link>
                        <Link className='mr-3' to={'/blog'}>Blog</Link>
                        {user?.uid ? <><Link className='mr-3' to={'/dashboard'}>DashBoard</Link></> : <></>}
                    </ul>
                </div >
                <div className="navbar-end">
                    {user?.uid ?
                        <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {user?.photoURL ?
                                            <>
                                                <img src={user?.photoURL} alt='' />
                                            </>
                                            :
                                            <>
                                                <FaUser></FaUser>
                                            </>}

                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a href='/' className="justify-between" >
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <Link to={'/user-services'}>My Services</Link>
                                    </li>
                                    <li><a href='/'>Review</a></li>
                                    <li><button onClick={handleSingOut} className="btn btn-outline btn-warning"> Logout</button></li>
                                </ul>
                            </div>
                        </>
                        :
                        <>
                            <Link to={'/login'}>
                                <button className="btn btn-outline  rounded-lg hover:bg-black"> Login</button>
                            </Link>
                            <Link to={'/register'}>
                                <button className="btn btn-outline  rounded-lg hover:bg-black"> Register</button>
                            </Link>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;