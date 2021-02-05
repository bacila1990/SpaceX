import React from 'react';
import PropTypes from 'prop-types';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import * as momemt from 'moment';
import './projectImages.sass';

function ProjectImages(props){
  const { project, goHome } = props

    return (
      <div>
        <div className="description-ship-images">
          <button className="button" onClick={goHome}>Назад к списку</button>
          <div className="description-ship-images__container">
            <p className="description-ship-images__name-ship">{project.mission_name}</p>
            <p className="description-ship-images__date">{momemt(project.launch_date_utc).locale('ru').format('D MMMM YYYY')}</p>
            <p className="description-ship-images__name-rocket">Ракета: {project.rocket.rocket_name}</p>
            <p className="description-ship-images__result">Результат: {project.launch_success ? 'Успех' : 'Нет данных' }</p>
          </div>
        </div>
        {
          project.links.flickr_images.length === 0
          ? (<p className="description-ship-images__not-image">Нет картинок</p>)
          : <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 500: 2, 750: 3, 900: 4, 1150: 5}}>
              <Masonry>
                {
                   project.links.flickr_images.map((item, index) => (
                  <div key={index} className="block-image">
                    <img className="block-image__elem" src={item}></img>
                  </div>
                ))
               }
              </Masonry>
            </ResponsiveMasonry>
        }
      </div>
    )
}

ProjectImages.propTypes = {
  project: PropTypes.object,
  goHome: PropTypes.func,
}

export default ProjectImages;
