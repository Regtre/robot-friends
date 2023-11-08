import React from "react";
import '../styles/App.css';
import CardList from "../components/CardList";
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry"
import SearchBox from "../features/searchRobots/SearchBox";
import {useSelector} from "react-redux";
import {useGetPostsQuery} from '../features/api/apiRobot'

const App = () => {

    const searchR = useSelector((state) => state.searchRobot.value)

    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery()
    let content

    if (isLoading) {
        content = <h1 className={'f1 tc'}>Loading</h1>
    } else if (isSuccess) {
        const filteredRobots = posts.filter(robot =>
            robot.name.toLowerCase().includes(searchR.toLowerCase()))
        content = (
            <div className={'tc'}>
                <h1 className={'f1'}>Mes amis robots</h1>
                <SearchBox></SearchBox>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )

    } else if (isError) {
        content = <div>{error.toString()}</div>
    }

    return(
        <div>
            {content}
        </div>
    )



}

export default App;