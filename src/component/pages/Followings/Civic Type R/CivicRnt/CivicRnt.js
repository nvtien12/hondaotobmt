import React from 'react';
import './civicrnt.css';
import Images from './Slider';

export default function CivicRvnt() {
    return (
        <div className="box_pro_ngoai_that" id="ngoaithat">
            <div className="card text-bg-dark">
                <img src="../assets/civic typer/banner-5a.jpg" alt="" />

                <div className="card-img-overlay">
                    <div className="card-civicrnt">
                        <img src="..asstes/civic typer/logo-type-r-full-black.png" alt="" />
                        <h2 className="text-card">DẤU ẤN ĐẬM CHẤT THỂ THAO</h2>

                        <p className="card-text">
                            Là tuyên ngôn đầy cá tính và mạnh mẽ <br /> của nhà vô địch đường đua, Honda Civic <br />{' '}
                            Type R sở hữu diện mạo thể thao đầy
                            <br /> mãn nhãn và cuốn hút.
                        </p>
                        <p className="civicrnt-p">*Hình ảnh xe có thể có sự khác biệt so với thực tế</p>
                    </div>
                </div>
            </div>
            <div className="box_content_pro">
                <figure className="table">
                    <figure className="table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <figure
                                            className="imagecivicr"
                                            data-fancybox="gallery_content"
                                            data-caption="Honda Civic Types R - "
                                            href="../assets/civic typer/section6a.jpg"
                                        >
                                            <img src="../assets/civic typer/section6a.jpg" className="" />
                                            <figcaption>
                                            La-zăng 18 inch đa chấu tạo sự mạnh mẽ và thời trang cho chiếc xe (RS)
                                            </figcaption>
                                        </figure>
                                    </td>
                                    <td>
                                        <figure
                                            className="imagecivictype"
                                            data-fancybox="gallery_content"
                                            data-caption="Honda Civic Types R - "
                                            href="../assets/civic typer/section6b.jpg"
                                        >
                                            <img src="../assets/civic typer/section6b.jpg" className='' />
                                            <figcaption>
                                            La-zăng 19 inch phối màu đỏ-đen cùng hệ thống phanh Brembo nổi tiếng, thu hút mọi ánh nhìn dù là trên đường đua hay nơi thành thị.
                                            </figcaption>
                                        </figure>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </figure>
                </figure>
            </div>
            <Images />
        </div>
    );
}
