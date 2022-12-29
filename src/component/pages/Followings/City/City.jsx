import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './Navbarsp';
import './city.css';

export default function City() {
    return (
        <div>
            <Navbar />
            <img className="img" src="../assets/city/section-1-bg.png" alt="banner" />

            <Carousel id="thongdiep">
                <Carousel.Item >
                    <div className="card text-bg-dark">
                        <img src="../assets/city/section-2-bg.png" className="card-city" alt="..." />
                        <div className="card-img-overlay">
                            <div className="text">
                                <h3 className="card-title">THÔNG ĐIỆP</h3>
                                <h2 className="text-card">
                                    MẠNH MẼ TRẢI LỐI
                                    <br />
                                    THÀNH CÔNG
                                </h2>

                                <p className="card-text">
                                    Cuộc sống luôn chuyển động không dừng. <br />
                                    Khát khao, nỗ lực không ngừng nghỉ để đạt được <br />
                                    những thành tựu mơ ước. Hãy cùng Honda City <br />
                                    chinh phục những đỉnh cao thành công mới.
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card text-bg-dark">
                        <img src="../assets/city/section-3-bg.png" className="card-city" alt="..." />
                        <div className="card-img-overlay">
                            <div className="text-img">
                                <h3 className="card-title">THÔNG ĐIỆP</h3>
                                <h2 className="text-card">
                                    VỮNG VÀNG
                                    <br />
                                    VƯỢT MỌI THỬ THÁCH
                                </h2>
                                <p className="card-text">
                                    Với khả năng vận hành mạnh mẽ hàng đầu <br /> phân khúc, Honda City mang tới cảm
                                    giác
                                    <br /> lái thể thao, mạnh mẽ, để bạn tự tin, sẵn sàng tăng tốc.
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
