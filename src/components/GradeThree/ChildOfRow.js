import React, { Component } from 'react';
import './GradeThree.css';
import 'antd/dist/antd.css';

class ChildOfRow extends Component {
  render() {
    return (
        <div className='ehmld_box' style={{ maxHeight: this.props.maxHeight, transition: 'all 0.5s linear' }}>
            <div className='wrap_child_box'>
                <div className='ehmld_icon'></div>
                <div className='ehmld_arcontent'>
                    <div className='ehmld_tit'>
                        VOCABULARY - TỪ VỰNG
                    </div>
                    <div className='ehmld_name'>
                        <div className='ehmldn_icon'>

                        </div>
                        <div className='ehmldn_text'>
                            <a className="eh_link" href="https://www.tienganh123.com/tieng-anh-lop3-unit1-vocab/17356-chu-de-noi-loi-chao-va-tam-biet.html">
                                <div className="ehmldnt_up">Chủ đề nói lời chào và tạm biệt</div>
                            </a>
                            <div className="ehmldnt_down">(Từ vựng: hello, hi, nice to meet you, goodbye, bye, bye-bye)</div>
                        </div>
                    </div>
                    <div className='ehmld_name'>
                        <div className='ehmldn_icon'></div>
                        <div className='ehmldn_text'>
                            <a className="eh_link" href="https://www.tienganh123.com/tieng-anh-lop3-unit1-vocab/17357-chu-de-hoi-tham-suc-khoe.html">
                                <div className="ehmldnt_up">Chủ đề hỏi thăm sức khỏe</div>
                            </a>
                            <div className="ge ehmldnt_down">(Từ vựng: fine, thanks, thank you, how are you)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ehmld_area_lesson' style={{ paddingTop: 20, paddingBottom: 20 , textAlign: 'left', width: '100%' }}>
                <div className='ehmld_icon'></div>
                <div className='ehmld_arcontent'>
                    <div className='ehmld_tit'>
                        LECTURE - BÀI GIẢNG
                    </div>
                    <div className='ehmld_name'>
                        <div className='ehmldn_icon'>

                        </div>
                        <div className='ehmldn_text'>
                            <a className="eh_link" href="https://www.tienganh123.com/tieng-anh-lop3-unit1-vocab/17356-chu-de-noi-loi-chao-va-tam-biet.html">
                                <div className="ehmldnt_up">Nói lời chào khi lần đầu gặp mặt</div>
                            </a>
                        </div>
                    </div>
                    <div className='ehmld_name'>
                        <div className='ehmldn_icon'>

                        </div>
                        <div className='ehmldn_text'>
                        <a className="eh_link" href="https://www.tienganh123.com/tieng-anh-lop3-unit1-vocab/17357-chu-de-hoi-tham-suc-khoe.html">
                            <div className="ehmldnt_up">Hỏi thăm sức khoẻ</div>
                        </a>
                        </div>
                    </div>
                    <div className='ehmld_name'>
                        <div className='ehmldn_icon ehmldn_icon_pen'>

                        </div>
                        <div className='ehmldn_text'>
                        <a className="eh_link" href="https://www.tienganh123.com/tieng-anh-lop3-unit1-vocab/17357-chu-de-hoi-tham-suc-khoe.html">
                            <div className="ehmldnt_up">Luyện tập tổng hợp bài giảng 1 & 2</div>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ehmld_area_phonic' style={{ paddingTop: 20, textAlign: 'left', width: '100%', marginBottom: 25 }}>
                <div className='ehmld_icon'></div>
                <div className='ehmld_arcontent'>
                    <div className='ehmld_tit'>
                        PHONICS - HỌC VỀ ÂM
                    </div>
                    <div className='ehmld_name'>
                        <div className='ehmldn_icon'>

                        </div>
                        <div className='ehmldn_text'>
                            <a className="eh_link" href="https://www.tienganh123.com/tieng-anh-lop3-unit1-vocab/17356-chu-de-noi-loi-chao-va-tam-biet.html">
                                <div className="ehmldnt_up">Phát âm chữ "b"</div>
                            </a>
                            
                        </div>
                    </div>
                    <div className='ehmld_name'>
                        <div className='ehmldn_icon'>

                        </div>
                        <div className='ehmldn_text'>
                        <a className="eh_link" href="https://www.tienganh123.com/tieng-anh-lop3-unit1-vocab/17357-chu-de-hoi-tham-suc-khoe.html">
                            <div className="ehmldnt_up">Phát âm chữ "h"</div>
                        </a>
                        </div>
                    </div>
                    <div className='ehmld_name'>
                        <div className='ehmldn_icon ehmldn_icon_pen'>

                        </div>
                        <div className='ehmldn_text'>
                        <a className="eh_link" href="https://www.tienganh123.com/tieng-anh-lop3-unit1-vocab/17357-chu-de-hoi-tham-suc-khoe.html">
                            <div className="ehmldnt_up">Bài tập phát âm chữ "b" và chữ "h"</div>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ehml_verline' style={{ height: 369, left: 63, backgroundColor: '#8560a8', width: 2 , position: 'absolute', top: -1 }}></div>
        </div>
    );
  }
}

export default ChildOfRow;
