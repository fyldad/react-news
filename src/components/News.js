import React from "react";
import PropTypes from "prop-types";
import {Article} from "./Article";

class News extends React.Component {

    renderNews = () => {
        const {data} = this.props;
        return data.length
            ? data.map(function (item) {
                return <Article key={item.id} data={item}/>
            })
            : <strong>Новостей нет</strong>
    }

    renderCounter = () => {
        const {data} = this.props;
        return data.length ? "Количество новостей: " + data.length : null;
    }

    render() {
        return (
            <div className="News">
                {this.renderNews()}
                {this.renderCounter()}
            </div>
        )
    }
}

News.propTypes = {
    data: PropTypes.array.isRequired
}

export {News};
