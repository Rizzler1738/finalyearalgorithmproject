import React, { Component } from 'react';
import { Stage, Layer, Rect, Line, Konva, Circle, Text } from 'react-konva';
import './PtronVisualizer.css';
export default class PtronVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            training: new Array(1000),
            rendering: false,
            min: -1,
            max: 1,
            width: 500,
            height: 500,
            count: 0,
            ptron: null,
            xOff: 50,
            yOff: 100,
            M: 0.4,
            B: 0.3
        }
        this.resetVisualizer = this.resetVisualizer.bind(this);
        this.startVisualizer = this.startVisualizer.bind(this);
        this.props.getFunctions(this.startVisualizer, this.resetVisualizer);
    }

    f(x) {
        return this.state.M * x + this.state.B;
    }

    map(n, as, ae, bs, be) {
        return ((n - as) / (ae - as)) * (be - bs) + bs;
    }

    initialize() {
        this.state.ptron = new Perceptron(3, 0.005);
        for (let i = 0; i < this.state.training.length; i++) {
            let x = random(this.state.min, this.state.max);
            let y = random(this.state.min, this.state.max);
            let answer = 1;
            if (y < this.f(x)) answer = -1;
            this.state.training[i] = {
                input: [x, y, 1],
                output: answer
            }
        }
    }

    resetVisualizer() {
        if (this.state.rendering) {
            return;
        }
        this.setState({ count: 0 });
        this.state.count = 0;
    }

    startVisualizer() {
        this.setState({ rendering: true });
        this.props.setVisualizerRendering(true);
        for (let i = 0; i < this.state.training.length - 1; i++) {
            setTimeout(
                () => {
                    this.setState({ count: i });
                    this.state.count = i;
                    //console.log(this.state.count)
                }
                , 25 * i);
        }
        setTimeout(() => {
            this.setState({ rendering: false });
            this.props.setVisualizerRendering(false);
        }, 25 * this.state.training.length)

    }

    render() {
        if (this.state.count === 0) {
            this.initialize();
        }
        let min = this.state.min;
        let max = this.state.max;
        let ptron = this.state.ptron;
        let x1 = this.map(min, min, max, 0, this.state.width);
        let y1 = this.map(this.f(min), min, max, this.state.height, 0);
        let x2 = this.map(max, min, max, 0, this.state.width);
        let y2 = this.map(this.f(max), min, max, this.state.height, 0);

        let weights = ptron.getWeights();
        let xx1 = min;
        let yy1 = (-weights[2] - weights[0] * xx1) / weights[1];
        let xx2 = max;
        let yy2 = (-weights[2] - weights[0] * xx2) / weights[1];

        xx1 = this.map(xx1, min, max, 0, this.state.width);
        yy1 = this.map(yy1, min, max, this.state.height, 0);
        xx2 = this.map(xx2, min, max, 0, this.state.width);
        yy2 = this.map(yy2, min, max, this.state.height, 0);
        //console.log(this.state.training[this.state.count]);
        ptron.train(this.state.training[this.state.count].input, this.state.training[this.state.count].output);
        // y = 0.3 x + 0.4
        // y = -w0x - w2 / w1 
        //console.log(weights[2], weights[1], weights[0]);
        let points = []

        for (let i = 0; i < this.state.count; i++) {
            let guess = ptron.feedforward(this.state.training[i].input);
            let x = this.map(this.state.training[i].input[0], min, max, 0, this.state.width);
            let y = this.map(this.state.training[i].input[1], min, max, this.state.height, 0);
            points.push({ x: x, y: y, fill: guess < 0 });
        }
        let xOff = this.state.xOff;
        let yOff = this.state.yOff;
        let aM = -weights[0] / weights[1];
        let aB = -weights[2] / weights[1];
        let eM = aM - this.state.M;
        let eB = aB - this.state.B;
        return (
            <>
                {/*
                <button
                    onClick={this.startVisualizer}
                    type="button" class="btn btn-outline-dark"
                    disabled={this.state.rendering}
                >
                    Apporximate
                </button >
                <button
                    onClick={this.resetVisualizer}
                    type="button" class="btn btn-outline-dark"
                    disabled={this.state.rendering}
                >
                    Reset
                </button>*/}

                <Stage
                    width={this.state.width * 2}
                    height={this.state.height + 1}
                    className='stage'
                    id='stage'
                >
                    <Layer>
                        <Line points={[0, 0, 500, 0]} stroke={'black'} ></Line>
                        <Line points={[0, 0, 0, 0 + 500]} stroke={'black'}></Line>
                        <Line points={[0, 0 + 500, 500 + 0, 0 + 500]} stroke={'black'} ></Line>
                        <Line points={[500 + 0, 0, 500 + 0, 0 + 500]} stroke={'black'} strokeWidth={1}></Line>
                        <Line
                            points={[x1 + 0, 0 + y1, x2 + 0, 0 + y2]}
                            stroke={'red'}
                            strokeWidth={1}>
                        </Line>
                        <Line
                            points={[xx1 + 0, 0 + yy1, xx2 + 0, 0 + yy2]}
                            stroke={'blue'}
                            strokeWidth={this.state.count > 0 ? 1 : 0}>
                        </Line>
                        {points.map((point, pointId) => {
                            return (
                                <Circle
                                    x={point.x + 0}
                                    y={point.y + 0}
                                    stroke={'black'}
                                    radius={3}
                                    opacity={0.7}
                                    fill={point.fill ? 'black' : 'white'}
                                ></Circle>)
                        })
                        }
                        <Text
                            x={550}
                            y={50}
                            text='Function Form: Y = M * X + B'
                            fontFamily='Calibri'
                            fill='black'
                            fontSize={25}
                        ></Text>
                        <Text
                            x={550}
                            y={80}
                            text={`Original Function: M = ${this.state.M} B = ${this.state.B}`}
                            fontFamily='Calibri'
                            fill='black'
                            fontSize={25}
                        ></Text>
                        <Text
                            x={550}
                            y={135}
                            text={`Approximation:\nM = ${aM}\nB = ${aB}`}
                            fontFamily='Calibri'
                            fill='black'
                            fontSize={25}
                        ></Text>
                        <Text
                            x={550}
                            y={240}
                            text={`Error:\nM: ${eM}\nB:${eB}`}
                            fontFamily='Calibri'
                            fill='red'
                            fontSize={25}
                        ></Text>
                    </Layer>

                </Stage >
            </>
        );

    }

}


function random(min, max) {
    return Math.random() * (max - min) + min;
}


class Perceptron {
    constructor(n, c) {
        // Array of weights for inputs
        this.weights = new Array(n);
        // Start with random weights
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = random(-1, 1);
        }
        this.c = c; // learning rate/constant
    }

    // Function to train the Perceptron
    // Weights are adjusted based on "desired" answer
    train(inputs, desired) {
        // Guess the result
        let guess = this.feedforward(inputs);
        // Compute the factor for changing the weight based on the error
        // Error = desired output - guessed output
        // Note this can only be 0, -2, or 2
        // Multiply by learning constant
        let error = desired - guess;
        // Adjust weights based on weightChange * input
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += this.c * error * inputs[i];
        }
    }

    // Guess -1 or 1 based on input values
    feedforward(inputs) {
        // Sum all values
        let sum = 0;
        for (let i = 0; i < this.weights.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
        // Result is sign of the sum, -1 or 1
        return this.activate(sum);
    }

    activate(sum) {
        if (sum > 0) return 1;
        else return -1;
    }

    // Return weights
    getWeights() {
        return this.weights;
    }
}