import React from 'react';
import Square from './square'
import { View, Button, Text, StyleSheet } from "react-native";

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onPress={() => this.props.onPress(i)}
            />
        );
    }

    render() {
        return (
            <View>
                <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </View>
            </View>
        );
    }
}

export default Board;