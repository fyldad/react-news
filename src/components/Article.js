import React from "react";
import PropTypes from "prop-types";

class Article extends React.Component {
    state = {
        visible: false,
    }
    readMoreClick = () => {
        this.setState({visible: !this.state.visible});
    }

    render() {
        const {author, text, bigText} = this.props.data;
        const {visible} = this.state;
        return (
            <table border="1">
                <tbody>
                <tr>
                    <td width="100" className="author">{author}:</td>
                    <td width="500" className="text">{text} {visible && bigText}
                        <br/>
                        <a onClick={this.readMoreClick} href="#readmore"
                           className="read_more">{visible ? "меньше" : "больше"}</a>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}

Article.propTypes = {
    data: PropTypes.shape({
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired
    })
}

export {Article};