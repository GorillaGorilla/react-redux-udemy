import React from 'react';
import { connection } from 'react-redux';


class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = { term = 'Hello' }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputChange(event) {

    }

    onSubmitForm(event){

    }

    render() {
        return (
            <div>
                <form>
                    <input value={this.state.term} type='submit' />
                </form>
            </div>
        )
    }
}

function mapPropsToState(state) {

    return {}
}

function mapPropsToDispatch() {

}


export default connection(mapPropsToState, mapPropsToDispatch)(SearchBar)