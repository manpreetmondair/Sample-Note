import React from 'react';
import { browserHistory } from 'react-router'

class Welcome extends React.Component{
    render(){
    return (
    <div className="card welcomepage">
        <header>
           <h2>NOTES  <i className="fa fa-pencil" aria-hidden="true"></i> </h2>
            </header>
    <main>
        <ul className="list-group list-group-flush">    
        <img className="card-img-top"          src="http://cdn.appstorm.net/iphone.appstorm.net/files/2011/04/100notes-2001.png" alt="noteapp" /><hr/>
        <div className="card-block">
            <h3 className="card-title">Sample Notes</h3><hr/>
            <p className="card-text">Keep Thoughts, Remainder and Lists in a fun, graphical format</p>
            </div>
        <hr/>
        <div className="card-block">
            <button type="button" className="btn btn-success" id="buttons" onClick={() => browserHistory.push('/Addnote')}>Create your note</button>
            <button type="button" className="btn btn-success" id="buttons" onClick={() => browserHistory.push('/Existingnotes')}>Check your existing notes</button>
            </div>
            </ul> 
    </main>      
</div>
       
        )
    }
}
export default Welcome;





