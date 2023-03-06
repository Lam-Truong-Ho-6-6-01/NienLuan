import React, { Component } from 'react';

import { connect } from 'react-redux';
import Slider from "react-slick";

class OutStandingDoctoc extends Component {

    render() {
        return (
            <div className=' section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật tuần qua </span>
                        <button className='btn-section'>Tìm Kiếm</button>

                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-imge section-outstanding-doctor' />
                                </div>
                                <div className='position text-center'>
                                    <div>Khám Tại Trung Tâm Tiêu hóa </div>
                                    <div>Doctor Check  1</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-imge section-outstanding-doctor' />
                                </div>
                                <div className='position text-center'>
                                    <div>Khám Tại Trung Tâm Tiêu hóa </div>
                                    <div>Doctor Check  2</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-imge section-outstanding-doctor' />
                                </div>
                                <div className='position text-center'>
                                    <div>Khám Tại Trung Tâm Tiêu hóa </div>
                                    <div>Doctor Check  3</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-imge section-outstanding-doctor' />
                                </div>
                                <div className='position text-center'>
                                    <div>Khám Tại Trung Tâm Tiêu hóa </div>
                                    <div>Doctor Check  4</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-imge section-outstanding-doctor' />
                                </div>
                                <div className='position text-center'>
                                    <div>Khám Tại Trung Tâm Tiêu hóa </div>
                                    <div>Doctor Check  5</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-imge section-outstanding-doctor' />
                                </div>
                                <div className='position text-center'>
                                    <div>Khám Tại Trung Tâm Tiêu hóa </div>
                                    <div>Doctor Check  6</div>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctoc);
