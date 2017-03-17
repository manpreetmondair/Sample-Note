import React from 'react';

class Note extends React.Component{
    render(){
        return <div className="card">
            {this.props.title}
            {this.props.body}
            {this.props.url}
            {this.props.tags}
        </div>
    }
}

export default Note;