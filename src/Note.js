import React from 'react';
import { browserHistory } from 'react-router'

class Note extends React.Component{
    render(){
        return <div>
      <div className="col-sm-4"> 
        <div className="card">
            <div className="notepage">
            {this.props.title}
              </div>
            <hr/>
            <div className="notepage">
            {this.props.body}
              </div>
            <hr/>
            <div className="notepage">
            <img src={this.props.url} alt="Smiley" height="120" />
              </div>
            <hr/>
            <div className="notepage">
            {this.props.tags}
              </div>
              <hr/>
            <div className="notepage">
              <button type="button" className="btn btn-success" onClick={() => browserHistory.push('/notes/' + this.props.index + '/edit')}>Edit Note</button>
                </div>
                 <div className="notepage">
                <button type="button" className="btn btn-success" onClick={() => this.props.deleteNote(this.props.index)}>Delete</button>
                </div>
            </div>
          </div>
    
      </div>
    }
}

export default Note;
// {todo.completed === 'yes' ? 'checked' : ''}