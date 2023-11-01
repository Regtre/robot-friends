import React, {Component} from "react";
import '../styles/App.css';
import CardList from "../components/CardList";
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry"
import SearchBox from "../components/SearchBox";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot =>
            robot.name.toLowerCase().includes(searchField.toLowerCase()))

        return !robots.length ?
            <h1 className={'f1 tc'}>Loading</h1> :
            (
                <div className={'tc'}>
                    <h1 className={'f1'}>Robot friends</h1>
                    <SearchBox searchChange={this.onSearchChange}></SearchBox>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }
}

export default App;