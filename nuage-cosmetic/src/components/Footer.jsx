import '../index.css'

export default function Footer(){
    return(
        <>
        <footer>
            <div className='container'>
            <div className='links'>
                <ul>
                    <a href='#'><li>Home</li></a>
                    <a href='#'><li>About us</li></a>
                    <a href='#'><li>Our Services</li></a>
                    <a href='#'><li>Trends</li></a>
                    <a href='#'><li>Blog</li></a>
                    <a href='#'><li>Products</li></a>
                    <a href='#'><li>Contact</li></a>
                </ul>
            </div>
            <div className='anotherLinks'>
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-linkedin"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
            </div>
            </div>
        </footer>
        </>
    )
}