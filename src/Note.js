import React from 'react';

class Note extends React.Component{
    render(){
        return <div>
        <body>
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
            {this.props.tags}<hr/>
            </div>
            </div>
        </div>
        </body>
      </div>
    }
}

export default Note;
// {todo.completed === 'yes' ? 'checked' : ''}