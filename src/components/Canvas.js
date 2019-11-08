import React, { Component } from 'react'

function rect(props) {
    const { ctx, x, y, width, height } = props;
    ctx.fillRect(x, y, width, height);
}

export default class Canvas extends Component {
    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0, 0, 2000, 2000);
        // draw children “components”
        rect({ ctx, x: 0, y: 0, width: 100, height: 100 });
        rect({ ctx, x: 110, y: 110, width: 100, height: 100 });
    }
    render() {
        return (
            <canvas ref="canvas" width={300} height={300} />
        );
    }
}
