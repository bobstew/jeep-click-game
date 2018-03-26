import React, { Component } from 'react';
import './App.css';
import jeep from './jeep.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import Card from './components/Card'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        jeep: jeep,
        unselectedjeep: jeep
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectJeep = number => {
        const findJeep = this.state.unselectedjeep.find(item => item.number === number);

        if(findJeep === undefined) {
            // failure to select a new dog
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                jeep: jeep,
                unselectedjeep: jeep
            });
        }
        else {
            // success to select a new dog
            const newjeep = this.state.unselectedjeep.filter(item => item.number !== number);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                jeep: jeep,
                unselectedjeep: newjeep
            });
        }

        this.shuffleArray(jeep);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.jeep.map(jeep => (
                        <Card
                            number={jeep.number}
                            image={jeep.image}
                            selectJeep={this.selectJeep} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;

