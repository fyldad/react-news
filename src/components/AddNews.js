import React from "react";
import PropTypes from "prop-types";

class AddNews extends React.Component {
    state = {
        name: "",
        text: "",
        bigText: "",
        agree: false
    }

    changeField = (e) => {
        const {id} = e.currentTarget;
        this.setState({[id]: e.currentTarget.value})
    }

    changeAgree = (e) => {
        this.setState({agree: e.currentTarget.checked})
    }

    enableButton = () => {
        const {name, text, agree} = this.state;
        return agree && name.trim() && text.trim();
    }

    clickButton = (e) => {
        e.preventDefault();
        const {name, text, bigText} = this.state;
        this.props.onAddNews({id: +new Date(), author: name, text, bigText});
    }


    render() {
        return <form className="add">
            <input id="name"
                   className="add_author"
                   type="text"
                   value={this.state.name}
                   onChange={this.changeField}
                   placeholder="news author"/>
            <textarea id="text"
                      className="add_text"
                      value={this.state.text}
                      onChange={this.changeField}
                      placeholder="news text"/>
            <textarea id="bigText"
                      className="add_text"
                      value={this.state.bigText}
                      onChange={this.changeField}
                      placeholder="full text"/>
            <label className="add_check">
                <input onChange={this.changeAgree}
                       type="checkbox"/> agree with rules
            </label>
            <button className="add_button"
                    disabled={!this.enableButton()}
                    onClick={this.clickButton}>add
            </button>
        </form>
    }
}

AddNews.propTypes = {
    onAddNews: PropTypes.func.isRequired
}

export {AddNews};