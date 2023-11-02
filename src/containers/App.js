import React, {useState, useEffect} from "react";
import '../styles/App.css';
import CardList from "../components/CardList";
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry"
import SearchBox from "../components/SearchBox";

function App() {

    const [robots, setRobots] = useState([]);
    const [filter, setFilter] = useState('');


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    }, [])

    const handleSearchChange = (e) => {
        setFilter(e.target.value);
    }

    const filteredRobots = robots.filter(robot =>
        robot.name.toLowerCase().includes(filter.toLowerCase()))

    return !robots.length ?
        <h1 className={'f1 tc'}>Loading</h1> :
        (
            <div className={'tc'}>
                <h1 className={'f1'}>Robot friends</h1>
                <SearchBox searchChange={handleSearchChange}></SearchBox>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )


}

export default App;