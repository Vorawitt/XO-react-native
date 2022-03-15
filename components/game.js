import React from 'react';
import Board from './board'
import CalculateWinner from './CalculateWinner';
import { View, Button, Text, StyleSheet, SafeAreaView, Pressable, Image } from "react-native";

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        history: [{
            squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (CalculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
            squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }
    
    goback(step){
        if(step === 0){
            return
        }else{
            this.jumpTo(step-1)
        }
    }

    gonext(step){
        if(step+1 === this.state.history.length){
            return
        }else{
            this.jumpTo(step+1)
        }
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = CalculateWinner(current.squares);

        let status;
        if(winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player is: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (   
            <SafeAreaView style = { {flex: 1, justifyContent: 'space-evenly'} }>

                <View style={styles.playerInfo}>
                    <Text style={styles.playerTxt}>{status}</Text>
                </View>
                <View style = {styles.mainContainer}>
                    <Board 
                        squares={current.squares}
                        onPress={(i) => this.handleClick(i)}    
                    />
                </View>
            
                <View>
                <Pressable style={styles.cancleBTN} onPress={() => this.jumpTo(0)}>
                    <Image source={require('../replay.png')} style={styles.cancelIcon}/>
                </Pressable>
                </View>

                <View>
                <Pressable style={styles.undoBTN} onPress={() => this.goback(this.state.stepNumber)}>
                    <Image source={require('../undo.png')} style={styles.undoIcon}/>
                </Pressable>
                </View>

                <View>
                <Pressable style={styles.redoBTN} onPress={() => this.gonext(this.state.stepNumber)}>
                    <Image source={require('../redo.png')} style={styles.redoIcon}/>
                </Pressable>
                </View>
            </SafeAreaView>

            
            

        );
    }
}

export default Game;

const styles = StyleSheet.create({
    playerInfo: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            paddingVertical: 20,
            marginTop: 30
    },
    playerTxt:{
            fontSize: 30,
            fontWeight: 'bold'
    },
    mainContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginTop: 10
    },
    cancleBTN: {
            position: 'absolute',
            bottom: -50,
            right: 170
    },
    undoBTN:{
            position: 'absolute',
            bottom: -20,
            left: 30
    },
    redoBTN:{
        position: 'absolute',
        bottom: 10,
        right: 30
    },
    cancelIcon: {
            height: 70,
            width: 70
    },
    undoIcon: {
        height: 70,
        width: 70
    },  
    redoIcon: {
        height: 70,
        width: 70
    }  
})

