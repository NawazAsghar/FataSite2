import './Gallery.css'
import senetMeating1 from '../../assets/gallery/senet6meting.jpg'
import teacherGP1 from '../../assets/gallery/teacherGroupPic.jpg'
import teacherGP2 from '../../assets/gallery/teacherRecentGrupPic.jpg'
import BSconvo3 from '../../assets/gallery/bs-convocation-3.jpg'
import antiNorcotics from '../../assets/gallery/anitNorcots.jpg'


function Gallery() {
    return (
        <section id='Gallery'>
            <div className="container">
                    <h6>Gallery</h6>
                    <div className='galleryImgsContainer'>
                        <div className='gallerImgCard'>
                            <img src={senetMeating1} loading='lazy' />
                        </div>
                        <div className='gallerImgCard'>
                            <img src={teacherGP1} loading='lazy' />
                        </div>
                        <div className='gallerImgCard'>
                            <img src={teacherGP2} loading='lazy' />
                        </div>
                        <div className='gallerImgCard'>
                            <img src={BSconvo3} loading='lazy' />
                        </div>
                        <div className='gallerImgCard'>
                            <img src={antiNorcotics} loading='lazy' />
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Gallery
