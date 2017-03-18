import React from 'react';
import moment from 'moment';
import store from 'store';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

let now = moment().format('YYYY-MM-DD HH:mm:ss')

class Addnote extends React.Component{
    constructor(props) {
        super(props)
        
        this.onClick = this.onClick.bind(this)

        this.state = {
            title: '',
            body: '',
            url: '',
            tags: '',
            created_at: now,
            updated_at: now,
        }
    }

    addNote(title, body, url, tags) {
        if (title !== '' && body !== '' && url !== '' && tags !== '')
        {
            let notes = store.get('notes');

            if ( ! notes) {
                notes = [];
            }

            let newNote = {
                title: title,
                body: body,
                url: url,
                tags: tags
            };
            
            notes.push(newNote);

            store.set('notes', notes);
            
            this.props.dispatch({type: 'NOTES', body: notes})
        }
    }

    onClick(){                    
     
        // Call paren addNote method that was passed through as a prop in render()
        this.addNote(this.state.title, this.state.body, this.state.url, this.state.tags)

        // Reset form
        this.setState({
            title: '',
            body: '',
            url: '',
            tags: '',
            created_at: now,
            updated_at: now,
        })

        browserHistory.push('/Existingnotes')
   }
   
    render(){
        
           return (
<div>
  
    <div className="container">
        <div className="form-group">
            <div className="input-group">

             <input type="text" className="form-control" id="textarea1" placeholder="add title" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>

            <input type="text" className="form-control" id="textarea" placeholder="body" value={this.state.body} onChange={(e) => this.setState({body: e.target.value})} />

            <input type="text" className="form-control" id="textarea" placeholder="URL"
            value={this.state.url} onChange={(e) => this.setState({url: e.target.value})}/>
                   
             <input type="text" className="form-control" id="textarea" placeholder="tags"
            value={this.state.tags} onChange={(e) => this.setState({tags: e.target.value})}/>
            </div>
        </div>
     </div>
            
        <div className="text-center">
                <div className="btn-group">
                <button className="btn btn-default" type="button" onClick={this.onClick}>Save</button>
                </div>
                <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/Welcome')}>Go Back</button>
        </div>
      
</div>  
    )
    }
}
 // Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedNotes: redux.state.notes
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Addnote)
