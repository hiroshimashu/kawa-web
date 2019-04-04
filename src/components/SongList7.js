import React, { Component } from 'react';
import Play from '../static/play.png';
import Stop from '../static/halt.png';
import ReactHowler from 'react-howler';
import song7 from '../static/media/sonosaki.mp3';




class SongList7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            src: song7
        }
        this.playSound = this.playSound.bind(this);
        this.stopSound = this.stopSound.bind(this);
    }

    componentWillMount() {
        this.setState(()=> {
            return ({src1:this.props.src1});
        })
        console.log()
    }


    playSound() {
        this.setState((prevState) => {
            return {play: !prevState.play}
        })
    }

    stopSound() {
        this.setState((prevState) => {
            return {play: !prevState.play}
        })

        this.howler.seek(0);
    }


    render() {
        return (
            <tr style={{
                height: '200px',
                fontSize: ' 14px',
                margin: 0,
                padding: 0,
                border: '0',
                outline: 0,
                verticalAlign: 'baseline',
                fontFamily: "ヒラギノ角ゴ ProN W3,Hiragino Kaku Gothic ProN,メイリオ,Meiryo,ＭＳ Ｐゴシック,MS PGothic,sans-serif"
            }}>
                <td style={{verticalAlign: 'middle', borderBottom: '1px #000 solid', position: 'relative'}}>
                    <div style = {{marginBottom: '20px',fontSize: '18px', }}>{this.props.name}</div>
                    <div style = {{fontSize: '13px'}}>{this.props.children}</div>
                </td>
                <td style={{width: 2, verticalAlign: 'middle', borderBottom: '1px #000 solid', textAlign: 'right', position: 'relative'}}>
                    {!this.state.play &&<img
                        src = {Play}
                        alt = 'coming'
                        style={{
                            display: 'block',
                            width: '36px',
                            height: '36px',
                            textIndent: ' 100%',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textDecoration: 'none',
                            marginLeft: '125px',
                            position: 'absolute'
                        }}
                        onClick={this.playSound}
                    />}
                    {this.state.play &&<img
                        src = {Stop}
                        alt = 'coming'
                        style={{
                            display: 'block',
                            width: '36px',
                            height: '36px',
                            textIndent: ' 100%',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textDecoration: 'none',
                            marginLeft: '130px',
                            position: 'absolute'
                        }}
                        onClick={this.stopSound}
                    />}

                    <ReactHowler ref = {(howler) => this.howler = howler} playing = {this.state.play} src = {this.state.src}/>
                </td>
                <td style = {{verticalAlign: 'middle', borderBottom: '1px #000 solid', width: '2px'}}>
                </td>
            </tr>
        );
    }
}

export default SongList7;