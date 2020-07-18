import React, { Component } from "react";
import Search from "../Search/Search";
import Card from "../Card/Card";
import characters from '../../characters.json';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            results: [],
            original: []
        }
    };

    componentDidMount(){
        this.setState({results: characters, original: characters})
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
        console.log(value);
        const houseFilter = this.state.original.filter(character =>{
            return(character.house.toLowerCase().includes(value.toLowerCase()))
        });
        this.setState({results: houseFilter})
    };

    render() {
        return (
            <>
                <Search search={this.state.search}
                        handleInputChange={this.handleInputChange}
                />

                <Card results={this.state.results}/>
            </>
        )
    }
}
export default Main;
