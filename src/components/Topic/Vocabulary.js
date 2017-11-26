import React, { Component } from 'react';
import 'video-react/dist/video-react.css';
import { Icon } from 'antd';
import { Player, BigPlayButton } from 'video-react';
import './styles.css';
import Exam from './Exam';


class Vocaburaly extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            openSectionIndex: -1,
        }
    }

    getColor(seconds) {
        const openStatus = (seconds === this.state.openSectionIndex);
        if(openStatus)
            return '#dd2685';
        else
            return '#00b9db';
    }

    getIcon(seconds) {
        const openStatus = (seconds === this.state.openSectionIndex);
        if(openStatus)
            return <Icon type="pause-circle-o" />;
        else
            return <Icon type="play-circle-o" />;
    }

    seek(seconds) {
        this.refs.player.play();
        this.refs.player.seek(seconds);
        if(this.state.openSectionIndex !== seconds){
            this.setState({openSectionIndex: seconds});
        }
        // this.setState({
        //     check: true,
        // })
    }

    render() {
        return (
            <div>
                <div style={{ position: 'relative' }}>
                    <div className='ev_tit'>
                        Vocabulary - Từ vựng
                    </div>
                    <div className='ev_name'>
                        Unit 1 - Hello
                    </div>
                    <div className='ev_arvideo'>
                        <div className='evv_artask'>
                            <div className='evvt_bg' style={{ backgroundColor: this.getColor(58) }} onClick={this.seek.bind(this, 58)}>
                                <div className='evvt_icon'>
                                    {this.getIcon(58)}
                                </div>
                                <div className='evvt_text'>
                                    Hello
                                </div>
                            </div>
                            <div className='evvt_bg' style={{ backgroundColor: this.getColor(121) }} onClick={this.seek.bind(this, 121)}>
                                <div className='evvt_icon'>
                                    {this.getIcon(121)}
                                </div>
                                <div className='evvt_text'>
                                    Hi
                                </div>
                            </div>
                            <div className='evvt_bg' style={{ backgroundColor: this.getColor(153) }} onClick={this.seek.bind(this, 153)}>
                                <div className='evvt_icon'>
                                    {this.getIcon(153)}
                                </div>
                                <div className='evvt_text'>
                                    Nice to meet you!
                                </div>
                            </div>
                            <div className='evvt_bg' style={{ backgroundColor: this.getColor(196) }} onClick={this.seek.bind(this, 196)}>
                                <div className='evvt_icon'>
                                    {this.getIcon(196)}
                                </div>
                                <div className='evvt_text'>
                                    Goodbye
                                </div>
                            </div>
                            <div className='evvt_bg' style={{ backgroundColor: this.getColor(245) }} onClick={this.seek.bind(this, 245)}>
                                <div className='evvt_icon'>
                                    {this.getIcon(245)}
                                </div>
                                <div className='evvt_text'>
                                    Bye
                                </div>
                            </div>
                            <div className='evvt_bg' style={{ backgroundColor: this.getColor(276) }} onClick={this.seek.bind(this, 276)}>
                                <div className='evvt_icon'>
                                    {this.getIcon(276)}
                                </div>
                                <div className='evvt_text'>
                                    Bye-Bye
                                </div>
                            </div>
                        </div>
                        <div className='evv_video'>
                            <Player
                            src='https://goldenkids-data.tienganh123.com/file/learn/child/ta345_new/data/video/grade3/unit1/vocab1/vocab1.mp4'
                            playsInline
                            fluid={false}
                            height={window.innerWidth / 3.1}
                            poster='https://goldenkids-data.tienganh123.com/file/learn/child/ta345_new/data/video/grade3/unit1/vocab1/vocab1.jpg'
                            ref='player'>
                            <BigPlayButton position="center" />
                            </Player>
                        </div>
                    </div>
                </div>
                <Exam />
            </div>
        );
  }
}

export default Vocaburaly;
