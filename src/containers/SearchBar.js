import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions';


class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = { term : '' }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);

    }

    onInputChange(event) {
        console.log('event.target.value', event.target.value);
        this.setState({term: event.target.value})
    }

    onSubmitForm(event){
        event.preventDefault();
        console.log("this.props.term", this.state.term)
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm} >
                    <input placeholder='Hello' value={this.state.term} onChange={this.onInputChange} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}


function mapPropsToDispatch(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}


export default connect(null, mapPropsToDispatch)(SearchBar)