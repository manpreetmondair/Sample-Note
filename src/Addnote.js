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

    componentWillMount() {
        if (this.props.params.index) {
            let note = this.props.sharedNotes[this.props.params.index]
            this.setState(note)
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
            
            // Edit
            if (this.props.params.index) {
                notes[this.props.params.index] = newNote;
            }

            // Add
            else {
                notes.push(newNote);
            }

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
    <div className="container">
     
           <header>
           <h2>ADD YOUR INFORMATION </h2>
            </header>
            <hr/>
            
            <textarea  className="form-control" id="textarea1" placeholder="add title" rows="2" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>
            <hr/>
           
            <textarea className="form-control"  id="textarea1" placeholder="body" rows="5" value={this.state.body} onChange={(e) => this.setState({body: e.target.value})} />
            <hr/>
            <textarea className="form-control"   id="textarea1" placeholder="URL"
            value={this.state.url} onChange={(e) => this.setState({url: e.target.value})}/>
            <hr/>
            <textarea className="form-control"   id="textarea1" placeholder="tags"
            value={this.state.tags} onChange={(e) => this.setState({tags: e.target.value})}/>
            <hr/>
      
    <div className="text-center">
        <div className="btn-group">
        <button className="btn btn-success" type="button" id="buttons" onClick={this.onClick}>Save</button>
        <button className="btn btn-success" type="button" id="buttons" onClick={() => browserHistory.goBack()}>Go Back</button>
            </div>
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
