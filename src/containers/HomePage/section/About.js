
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';






class About extends Component {


    render() {


        return (
            <div className=' section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói về BookingCare

                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/c6gE5cJVNv4" title="CÀ PHÊ KHỞI NGHIỆP VTV1 - TRUE JUICE - MAMG NƯỚC ÉP NGUYÊN CHẤT ĐẾN MỌI NGƯỜI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='content-right'>
                        <p>BookingCare là một ứng dụng, trang web cần thiết cho người dùng hiện nay . Dùng để đặt lịch khám bệnh , theo dõi các phương pháp trị bệnh của các bác sĩ. Lựa chon được bác sĩ trị liệu tốt nhất cho bản thân.</p>
                    </div>
                </div>


            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
