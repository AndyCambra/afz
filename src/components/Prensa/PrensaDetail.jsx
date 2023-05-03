import React from 'react'
import prensaData from '../utils/Texts/prensaData';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const PrensaDetail = () => {
    const {id} = useParams()
    const note=prensaData.find(p=> p.id=== parseInt(id))
  return (
    <div className='press-background'>
    <div className='product-content'>
      <div className='press-box-detail'>
          <div className='main-note-img'>
              <img src={note.img} alt={note.alt} />
              <div className='menu-note-detail'>
                    <Link to="/prensa"> <h5>ULTIMAS NOTICIAS</h5> </Link>
                </div>
                <div>
                    <Link to="/" className='press-menu-link'><h5>HOME</h5></Link>
                </div> 
          </div>
          <div className='press-note-box'>
              <div className='head-note'>
                  <h5>{note.media}</h5>
                  <h5 className='head-date'>{note.publicationDate}</h5>
              </div>
              <div className='main-note-content'>
                  <h2>{note.title}</h2>
                  <div className='box'>
                      <div className='box-text-detail'>{note.text}</div>
                      </div>
                      <div >
                            <Link to="/prensa" className="more">
                            <div className='see'>Volver</div>
                            </Link>
                    </div>
                </div>
                </div>
                <div>
              {/*   <div className='menu-note'>
                    <Link to="/prensa"> <h5>ULTIMAS NOTICIAS</h5> </Link>
                </div>
                <div>
                    <Link to="/" className='press-menu-link'><h5>HOME</h5></Link>
                </div> */}
                </div>
            </div>
          
        </div>
        <div class="push"></div>
    </div>
  )
}

export default PrensaDetail