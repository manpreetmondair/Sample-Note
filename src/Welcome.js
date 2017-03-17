import React from 'react';
import { browserHistory } from 'react-router'

class Welcome extends React.Component{
    render(){
           return (
         
          <div className="card">
         <div className="btn-group">
                <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/Addnote')}>Create your note</button><br/><br/>
                 <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/Existingnotes')}>Check your existing notes</button>
                 </div>


         </div>
       
        )
    }
}
export default Welcome;



//    <img className="card-img-top" src="..." alt="Card image cap" />
                
//                   <div className="card-block">
//     <h4 className="card-title">Card title</h4>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
//   <ul className="list-group list-group-flush">
//     <li className="list-group-item">Cras justo odio</li>
//     <li className="list-group-item">Dapibus ac facilisis in</li>
//     <li className="list-group-item">Vestibulum at eros</li>
//   </ul>
//   <div className="card-block">
//     <a href="#" className="card-link">Card link</a>
//     <a href="#" className="card-link">Another link</a>
//   </div>


