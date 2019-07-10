import React from 'react'

class ImageList extends React.Component { 
render() {
  return (
     <div className="container section">
          <p className="subtitle">Languages & Frameworks</p>
          <div className="columns">
            <div className="column">
              <img className="img-logo" src="node.png" alt="node.js logo" width="100px"></img>
            </div>
            <div className="column">
              <img className="img-logo" src="es6.svg" alt="es6 logo" width="65px"></img>
            </div>
            <div className="column">
              <img className="img-logo" src="html.png" alt="html logo" width="65px"></img>
            </div>
            <div className="column">
              <img className="img-logo" src="angular.svg" alt="angular logo" width="75px"></img>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <img className="img-logo" src="java.png" alt="node.js logo" width="65px"></img>
            </div>
            <div className="column">
              <img className="img-logo" src="webpack.png" alt="es6 logo" width="65px"></img>
            </div>
            <div className="column">
              <img className="img-logo" src="react.png" alt="html logo" width="95px"></img>
            </div>
            <div className="column">
              <img className="img-logo" src="cplusplus.png" alt="angular logo" width="65px"></img>
            </div>
          </div>
        </div>
  )

}
}
export default ImageList