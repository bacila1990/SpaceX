import React, { useState, useEffect} from 'react';
import HomePage from './homePage/homePage';
import ProjectImages from './projectImages/projectImages';

function App() {
  const [data, setData] = useState([]);
  const [project, setProject] = useState([]);

  function moreInformation(event) {
    data.map((item) => {
      if (event.target.parentNode.id === item.mission_name) {
        setProject(item);
      }
    })
  }

  function goHome() {
    setProject([]);
  }

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/launches?order=desc&limit=10`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  return (
    <div>
      <header className="header">Последние запуски SpaceX</header>
      <div className="main">
        {
          project.length === 0
          ? <HomePage moreInformation={moreInformation} data={data}/>
          : <ProjectImages goHome={goHome} project={project}/>
        }
      </div>
      <footer className="footer">© 2021 SpaseX, Inc.</footer>
    </div>
  );
}

export default App;
