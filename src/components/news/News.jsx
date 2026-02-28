import './News.css'
import se6 from '../../assets/gallery/senet6meting.jpg'
import gate from '../../assets/FATAgate.jpg'

function News() {
  return (
    <section id="newsSection">
      <div className="container">
        <div className="newsHeroTxt">
          <h3>Latest News & Announcements</h3>
          <div className="newsWraper">
          <div className="newsCardContainer">
            <div className="newsCard">
              <img src={se6} loading='lazy' />
              <h6>Heading of news</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloribus mollitia repudiandae vel quaerat ipsa architecto dolorum sapiente esse labore ea alias unde possimus veniam, ratione a aut obcaecati. Exercitationem...</p>
              {/* <button>Read More &rarr;</button> */}
              <button>Read More &nbsp;›</button>
            </div>
            <div className="newsCard">
              <img src={gate} loading='lazy' />
              <h6>Heading of news</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloribus mollitia repudiandae vel quaerat ipsa architecto dolorum sapiente esse labore ea alias unde possimus veniam, ratione a aut obcaecati. Exercitationem...</p>
              <button>Read More &nbsp;›</button>
            </div>
            {/* <div className="newsCard">
              <img src={bioLab} loading='lazy' />
              <h6>Heading of news</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloribus mollitia repudiandae vel quaerat ipsa architecto dolorum sapiente esse labore ea alias unde possimus veniam, ratione a aut obcaecati. Exercitationem...</p>
              <button>Read More &rarr;</button>
            </div>
            <div className="newsCard">
              <img src={bioLab} loading='lazy' />
              <h6>Heading of news</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloribus mollitia repudiandae vel quaerat ipsa architecto dolorum sapiente esse labore ea alias unde possimus veniam, ratione a aut obcaecati. Exercitationem...</p>
              <button>Read More &rarr;</button>
            </div>
            <div className="newsCard">
              <img src={bioLab} loading='lazy' />
              <h6>Heading of news</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloribus mollitia repudiandae vel quaerat ipsa architecto dolorum sapiente esse labore ea alias unde possimus veniam, ratione a aut obcaecati. Exercitationem...</p>
              <button>Read More &rarr;</button>
            </div>
            <div className="newsCard">
              <img src={bioLab} loading='lazy' />
              <h6>Heading of news</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloribus mollitia repudiandae vel quaerat ipsa architecto dolorum sapiente esse labore ea alias unde possimus veniam, ratione a aut obcaecati. Exercitationem...</p>
              <button>Read More &rarr;</button>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
