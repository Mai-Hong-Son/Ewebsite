import React, { Component } from 'react';
import './styles.css';

class Exam extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            openSectionIndex: -1,
        }
    }

    getColor(id) {
        const openStatus = (id === this.state.openSectionIndex);
        if(openStatus)
            return '#dd2685';
        else
            return '#00b9db';
    }

    playAudio(id) {
        if(this.state.openSectionIndex !== id){
            this.setState({openSectionIndex: id}, () => {
                switch(id)
                {
                    case 1: this.refs.audio1.play();
                    break;
                    case 2: this.refs.audio2.play();
                    break;
                    case 3: this.refs.audio3.play();
                    break;
                    case 4: this.refs.audio4.play();
                    break;
                    case 5: this.refs.audio5.play();
                    break;
                    case 6: this.refs.audio6.play();
                    break;
                    default: break;
                }
            });
        }
    }
  render() {
    return (
      <div style={{ position: 'realative' }}>
        <div className='evp_arheader'>
            <div className='evph_line'></div>
            <div className='evph_bgtext'> ôn tập từ vựng đã học </div>
            <div className='evph_line'></div>
            <div className='evph_ins'>
                <div className='evphi_icon'></div>
                <div className='evphi_text'> Các em hãy nhấp chuột vào ảnh để nghe âm thanh của từ/cụm từ </div>
            </div>
        </div>
        <div className='evp_arplay'>
            <div className='evpp_arword' onClick={this.playAudio.bind(this,1)}>
                <img className='evppw_pic' style={{ borderColor: this.getColor(1) }} alt='anh1' src='https://goldenkids-data.tienganh123.com/file/learn/child/ta345_new/data/img/grade3/unit1/vocab1/hello.png' />
                <div className='evppw_arbottom'>
                    <div className='evppw_ten'>Hello</div>
                    <div className='evppw_tvi'>Xin chào</div>
                </div>
                <audio ref='audio1'>
                    <source src="https://goldenkids-data.tienganh123.com/file/learn/child/ta345_new/data/audio/grade3/unit1/vocab1/hello.mp3" type="audio/mpeg" />
                </audio>
            </div>
            <div className='evpp_arword' onClick={this.playAudio.bind(this,2)}>
                <img className='evppw_pic' style={{ borderColor: this.getColor(2) }} alt='anh2' src='https://goldenkids-data.tienganh123.com/file/learn/child/ta345_new/data/img/grade3/unit1/vocab1/hi.png' />
                <div className='evppw_arbottom'>
                    <div className='evppw_ten'>Hi</div>
                    <div className='evppw_tvi'>Xin chào</div>
                </div>
                <audio ref='audio2'>
                    <source src="https://goldenkids-data.tienganh123.com/file/learn/child/ta345_new/data/audio/grade3/unit1/vocab1/hi.mp3" type="audio/mpeg" />
                </audio>
            </div>
            <div className='evpp_arword' onClick={this.playAudio.bind(this,3)}>
                <img className='evppw_pic' style={{ borderColor: this.getColor(3) }} alt='anh3' src='https://goldenkids-data.tienganh123.com/file/learn/child/ta345_new/data/img/grade3/unit1/vocab1/nicetomeetyou.png' />
                <div className='evppw_arbottom'>
                    <div className='evppw_ten'>Nice to meet you!</div>
                    <div className='evppw_tvi'>Hân hạnh được làm quen với bạn</div>
                </div>
                <audio ref='audio3'>
                    <source src="https://goldenkids-data.tienganh123.com/file/learn/child/ta345_new/data/audio/grade3/unit1/vocab1/nicetomeetyou.mp3" type="audio/mpeg" />
                </audio>
            </div>
            <div className='evpp_arword' onClick={this.playAudio.bind(this,4)}>
                <img className='evppw_pic' style={{ borderColor: this.getColor(4) }} alt='anh4' src='https://goldenkids-data.tienganh123.com/file/learn/child/ta345_new/data/img/grade3/unit1/vocab1/goodbye.png' />
                <div className='evppw_arbottom'>
                    <div className='evppw_ten'>Goodbye</div>
                    <div className='evppw_tvi'>Tạm biệt</div>
                </div>
                <audio ref='audio4'>
                    <source src="https://goldenkids-data.tienganh123.com/file/learn/child/ta345_new/data/audio/grade3/unit1/vocab1/goodbye.mp3" type="audio/mpeg" />
                </audio>
            </div>
            <div className='evpp_arword' onClick={this.playAudio.bind(this,5)}>
                <img className='evppw_pic' style={{ borderColor: this.getColor(5) }} alt='anh5' src='https://goldenkids-data.tienganh123.com/file/learn/child/ta345_new/data/img/grade3/unit1/vocab1/bye.png' />
                <div className='evppw_arbottom'>
                    <div className='evppw_ten'>Bye</div>
                    <div className='evppw_tvi'>Tạm biệt</div>
                </div>
                <audio ref='audio5'>
                    <source src="https://goldenkids-data.tienganh123.com/file/learn/child/ta345_new/data/audio/grade3/unit1/vocab1/bye.mp3" type="audio/mpeg" />
                </audio>
            </div>
            <div className='evpp_arword' onClick={this.playAudio.bind(this,6)}>
                <img className='evppw_pic' style={{ borderColor: this.getColor(6) }} alt='anh6' src='https://goldenkids-data.tienganh123.com/file/learn/child/ta345_new/data/img/grade3/unit1/vocab1/byebye.png' />
                <div className='evppw_arbottom'>
                    <div className='evppw_ten'>Bye-bye</div>
                    <div className='evppw_tvi'>Tạm biệt</div>
                </div>
                <audio ref='audio6'>
                    <source src="https://goldenkids-data.tienganh123.com/file/learn/child/ta345_new/data/audio/grade3/unit1/vocab1/byebye.mp3" type="audio/mpeg" />
                </audio>
            </div>
        </div>
      </div>
    );
  }
}

export default Exam;
