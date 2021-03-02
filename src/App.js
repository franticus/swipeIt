import React from 'react';
import './index.css'
import Item from './Components/item/item'
import Score from './Components/scoreboard/score'
import Modal from './Components/modal/modal'
import Footer from './Components/footer/footer'
import GameMenu from "./Components/game-menu/menu";
import GameInfo from './Components/game-menu/game-info/game-info'
import Scores from './Components/game-menu/scores/scores'
import Settings from './Components/game-menu/settings/settings'

import propel from './Assets/img/33.gif'
import propel2 from './Assets/img/22.gif'
import swipe from './Assets/sounds/swipe.mp3'
import wrong from './Assets/sounds/wrong.mp3'
import rock from './Assets/sounds/rockit.mp3'

let count = 20;
let score = 0;
let topQueue = -9550;
let heightQueue = 10000;
let swipeSound = new Audio(swipe)
let wrongSound = new Audio(wrong)

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posX: 130,
            posY: -150,
            showItem: false,
            showModal: false,
            showPress: true,
            showInfo: false,
            showScores: false,
            showSettings: false,
            showMenu: true,
            arrCircle: this.arrCircleMethod()
        }
    }


    arrCircleMethod = () => {
        const arr = [];
        for (let i = 0; i < 100; i++) {
            arr.push(Math.round(Math.random()))
        }
        return arr
    }

    componentDidMount = () => {
        document.addEventListener("keydown", this.actionFunction, false);
        document.addEventListener("click", this.actionClick, false);
    }

    componentWillUnmount = () => {
        document.removeEventListener("keydown", this.actionFunction, false);
        document.addEventListener("click", this.actionClick, false);
    }

    timer = () => {
        document.querySelector('#timer').innerHTML = `Time: ${count}`
        if (count > 0) {
            count--
        } else {
            document.querySelector('#timer').innerHTML = `Finished!`
            count = ''
            this.setState({
                showModal: true,
            })
            document.querySelector('#score').innerHTML = ""

        }
    }

    actionClick = (event) => {
        console.log(event.target.alt)
        if (event.target.innerHTML === "New Game") {
            // console.log('Вы кликнули мышкой')
            count = 20
            setInterval(() => this.timer(), 1000)

            this.setState({
                showItem: true,
                showPress: false
            })
        }
        if (event.target.innerHTML === "Settings") {
            this.setState({
                showSettings: true,
                showPress: false,
            })
        }
        if (event.target.innerHTML === "Scores") {
            this.setState({
                showScores: true,
                showPress: false,
            })
        }
        if (event.target.innerHTML === "Game Info") {
            this.setState({
                showInfo: true,
                showPress: false,
            })
        }
        if (event.target.innerHTML === "Exit") {
            window.close()
        }
        if (event.target.innerHTML === "Back") {
            this.setState({
                showSettings: false,
                showScores: false,
                showInfo: false,
                showPress: true,
            })
        }

        if (event.target.alt === "00") {
            if (document.querySelector('#timer').innerHTML !== `Finished!` &&
                this.state.showPress === false) {
                let child = document.querySelector(".Queue").childNodes
                let child2 = child[child.length - 1]
                topQueue += 100;
                heightQueue -= 100;
                child2.style = `left: -70px; top: ${heightQueue}px;`

                document.querySelector(".Queue").style = `top: ${topQueue}px; height: ${heightQueue}px`
                if (+child2.alt === 0) {
                    swipeSound.play()
                    score += 1
                } else if (score > 0) {
                    wrongSound.play()
                    score -= 1
                }
                setTimeout(() => child2.remove(), 100);
                document.querySelector('#score').innerHTML = `Score: ${score}`
            }
        }
        if (event.target.alt === "11") {
            if (document.querySelector('#timer').innerHTML !== `Finished!` &&
                this.state.showPress === false) {
                let child = document.querySelector(".Queue").childNodes
                let child2 = child[child.length - 1]
                topQueue += 100;
                heightQueue -= 100;
                child2.style = `left: 370px; top: ${heightQueue}px;`
                document.querySelector(".Queue").style = `top: ${topQueue}px; height: ${heightQueue}px`
                if (+child2.alt === 1) {
                    swipeSound.play()
                    score += 1
                } else if (score > 0) {
                    wrongSound.play()
                    score -= 1
                }
                setTimeout(() => child2.remove(), 100);
                document.querySelector('#score').innerHTML = `Score: ${score}`
            }
        }
    }

    actionFunction = (event) => {
        // if (event.type === "click") {
        //     console.log(event)
        //     console.log('Вы нажали клавишу вверх')
        //     count = 20
        //     setInterval(() => this.timer(), 1000)
        //
        //     this.setState({
        //         showItem: true,
        //         showPress: false
        //     })
        // setTimeout(() => clearInterval(this.timer), 7000);

        if (event.keyCode === 13) {
            count = 20
            setInterval(() => this.timer(), 1000)

            this.setState({
                showItem: true,
                showPress: false
            })
        }

        if (event.keyCode === 40) {
            // console.log('Вы нажали клавишу вниз')
            document.location.reload(true)
            // this.setState({
            //     posX: 130,
            //     posY: -150,
            //     showItem: false,
            //     showModal: false,
            //     showPress: true,
            //     arrCircle: this.arrCircleMethod()
            // })
            // topQueue = -9550;
            // heightQueue = 10000;
            // score = 0;
            // count = 20;
        }

        if (event.keyCode === 37) {
            // console.log('Вы нажали клавишу влево')

            if (document.querySelector('#timer').innerHTML !== `Finished!` &&
                this.state.showPress === false) {
                let child = document.querySelector(".Queue").childNodes
                let child2 = child[child.length - 1]
                topQueue += 100;
                heightQueue -= 100;
                child2.style = `left: -70px; top: ${heightQueue}px;`

                document.querySelector(".Queue").style = `top: ${topQueue}px; height: ${heightQueue}px`
                if (+child2.alt === 0) {
                    swipeSound.play()
                    score += 1
                } else if (score > 0) {
                    wrongSound.play()
                    score -= 1
                }
                setTimeout(() => child2.remove(), 100);
                document.querySelector('#score').innerHTML = `Score: ${score}`
            }
        }
        if (event.keyCode === 39) {
            // console.log('Вы нажали клавишу вправо')

            if (document.querySelector('#timer').innerHTML !== `Finished!` &&
                this.state.showPress === false) {
                let child = document.querySelector(".Queue").childNodes
                let child2 = child[child.length - 1]
                topQueue += 100;
                heightQueue -= 100;
                child2.style = `left: 370px; top: ${heightQueue}px;`
                document.querySelector(".Queue").style = `top: ${topQueue}px; height: ${heightQueue}px`
                if (+child2.alt === 1) {
                    swipeSound.play()
                    score += 1
                } else if (score > 0) {
                    wrongSound.play()
                    score -= 1
                }
                setTimeout(() => child2.remove(), 100);
                document.querySelector('#score').innerHTML = `Score: ${score}`
            }
        }
    }

    render() {
        console.log("render")
        return (
            <div>
                <audio controls hidden={true}>
                    <source src={rock}/>
                </audio>
                <h1 className="Title">Swipe It!</h1>
                <div className="App">

                    {this.state.showModal && <Modal result={score}/>}


                    {this.state.showPress &&
                    <GameMenu onClick={this.actionClick}/>
                    }
                    {this.state.showSettings &&
                    <Settings />
                    }
                    {this.state.showScores &&
                    <Scores />
                    }
                    {this.state.showInfo &&
                    <GameInfo />
                    }


                    {this.state.showItem && <div className="Queue">
                        {this.state.arrCircle.map((e, i) => (
                            <Item alt={e} src={e === 1 ? propel2 : propel} key={i} style={{
                                left: this.state.posX + 'px',
                                top: this.state.posY + i * 100 + 'px',
                            }}/>
                        ))}
                    </div>}

                    <Item alt="00" src={propel} onClick={this.actionClick}
                          style={{
                              left: 10 + 'px',
                              top: 340 + 'px',
                              height: 140 + "px",
                              width: 200 + 'px',
                          }}/>
                    <Item alt="11" src={propel2} onClick={this.actionClick}

                          style={{
                              left: 290 + 'px',
                              top: 340 + 'px',
                              height: 140 + "px",
                              width: 200 + 'px',
                          }}/>


                </div>
                <Score score={`Score: ${score}`}/>
                <Footer/>
            </div>
        );
    }

}

export default App;
