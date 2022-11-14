
import React from 'react';  
import PropTypes from 'prop-types';
const href_bookmark_url = window.location.href;

class BookmarkForm extends React.Component {
    constructor() {
        super();
        this.state = {
            websiteAddress: '',
            errorMessage: false
        };
    }
    
    handleSubmit = event => {
        event.preventDefault();
        let userInput = href_bookmark_url;
        console.log(this.props)
        if (userInput) {
            
            // this.props.addWebsite(userInput);
            this.setState({
                websiteAddress: '',
                errorMessage: false
            });
        } else {
            this.setState({ errorMessage: true });
        }
    };
    updateInputState = event => {
        this.setState({ websiteAddress: event.target.value });
    };
    render() {
        return (
            <div className="bookmark-form-container">
                <form onSubmit={this.handleSubmit} className="bookmark-form">
                    <input
                        type="hidden"
                        value={href_bookmark_url}
                        onChange={this.updateInputState}
                        placeholder="Add website address"
                        autoFocus
                        required
                    />
                    <input type="submit" value="Submit" />
                </form>
                {this.state.errorMessage && (
                    <div id="error-message">Not a valid website url</div>
                )}
            </div>
        );
    }
}
// BookmarkForm.propTypes = {
//     addWebsite: PropTypes.func
// };
BookmarkForm.propTypes = {   addWebsite: React.PropTypes.func };
export default BookmarkForm;