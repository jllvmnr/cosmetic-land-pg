import './Navbar.css'
import logo from '../assets/pngwing.com.png'

export default function Nav(){
    return(
        <>
        <div className='container'> 
            <nav>
                <img src={logo} alt="logo" className='logo'/>
                <div className='navEnd'>
                <button><ion-icon name="search-outline"></ion-icon></button>
                <p>Menu</p>
                <ion-icon name="apps-outline"></ion-icon>
                </div>
            </nav>
        </div>
        </>
    )
}