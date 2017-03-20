import React from 'react';
import Note from './Note';
// import Addnote from './Addnote';
import store from 'store';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router' 

class Existingnotes extends React.Component{
    constructor(props){
        super(props)
        // initially call this.getNotes()
        this.getNotes=this.getNotes.bind(this) 
    } 
    //LifeCycles Methods                                             
    componentWillMount(){ 
    this.getNotes()          // put the data into it and change the state
    }

    getNotes() {
        // get the store.js notes
        // put them in Redux with dispatch
        let notes = store.get('notes');
        this.props.dispatch({type: 'NOTES', body: notes})
    }     
        

    render() {
        // map notes to Note component (need to make that component)
        let notes = this.props.sharedNotes.map((note, key) => <Note key={key} {...note}  />)

        return (
            <div>
            {notes}  
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
export default connect(mapStateToProps)(Existingnotes)



 