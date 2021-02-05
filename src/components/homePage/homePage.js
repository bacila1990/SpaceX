import React from 'react';
import PropTypes from 'prop-types';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import * as momemt from 'moment';
import './homePage.sass';

function HomePage(props){
  const { data, moreInformation } = props

    return (
      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 500: 2, 750: 3, 900: 4, 1150: 5}}>
        <Masonry>
          {
            data.map((item, index) => (
            <div key={index} onClick={moreInformation} id={item.mission_name} className="description_mission">
              {
                item.links.flickr_images.length > 0
                ? (<>
                    <div className="description_mission__sum-images">{item.links.flickr_images.length} картинок</div>
                    <img className="description_mission__image" src={item.links.flickr_images[0]}></img>
                  </>)
                : null
              }
              <p className="description_mission__date">{momemt(item.launch_date_utc).locale('ru').format('D MMMM YYYY')}</p>
              <p className="description_mission__name_ship">{item.mission_name}</p>
              <p className="description_mission__name_rocket">Ракета: {item.rocket.rocket_name}</p>
              <p className="description_mission__result">Результат: {item.launch_success ? 'Успех' : 'Нет данных' }</p>
            </div>
          ))
        }
        </Masonry>
      </ResponsiveMasonry>
    )
}

HomePage.propTypes = {
  data: PropTypes.array,
  moreInformation: PropTypes.func,
}

export default HomePage;
