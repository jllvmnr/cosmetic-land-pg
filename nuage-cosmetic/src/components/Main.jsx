import './Main.css'
import headerImg from '../assets/treatment-room.jpg'

export default function Main(){
    return(
        <>
        <main>
          <div className='container'>
            <div className='headerText'>
            <h1>About Image</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eum soluta nostrum quae est doloremque reiciendis accusamus in labore consequuntur exercitationem, cumque quia maiores excepturi nulla vero iste debitis sed.</p>
            <button className='headerBtn'>Learn More</button>
            </div>
           <button className='headerBtnPlay'><ion-icon name="caret-forward"></ion-icon></button>
            <div>
            <img src={headerImg} alt="headerImg" className='headerImg'/>
            </div>
          </div>
        </main>
        </>
    )
}