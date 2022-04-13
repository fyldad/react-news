import React from "react";
import './App.css';
import {AddNews} from "./components/AddNews";
import {News} from "./components/News";

class App extends React.Component {
    state = {
        news: null,
        isLoading: false,
    }

    handleAddNews = (data) => {
        const nextNews = [data, ...this.state.news];
        this.setState({news: nextNews})
    }

    static getDerivedStateFromProps(props, state) {
        if (Array.isArray(state.news)) {
            let nextPropsFiltered = [...state.news]

            nextPropsFiltered.forEach((item) => {
                if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
                    item.bigText = "СПАМ";
                }
            });
            return {filteredNews: nextPropsFiltered}
        }
        return null;
    }

    componentDidMount() {
        this.setState({isLoading: true})
        fetch("http://localhost:3000/data/data.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setTimeout(() => {
                    this.setState({ news: data, isLoading: false });
                }, 3000)
            })
    }

    render() {
        const {news, isLoading} = this.state;
        return <React.Fragment>
            <AddNews onAddNews={this.handleAddNews}/>
            <h3>News</h3>
            {isLoading && <p>Loading...</p>}
            {Array.isArray(news) && <News data={news}/>}
        </React.Fragment>
    }
}

export default App;
