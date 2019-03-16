import React, { Component } from "react";
import ClassNames from "classnames";
import debounce from "debounce";

import "./style.css";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false };

    this._scrollHandler = debounce(() => this._onScroll(), true);
  }

  _onScroll() {
    const { scrollY, innerHeight } = window;
    const { offsetTop, offsetHeight } = this.element;

    this.setState({
      show:
        scrollY + innerHeight > offsetTop &&
        scrollY + 60 <= offsetTop + offsetHeight
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this._scrollHandler);
    this._scrollHandler();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._scrollHandler);
  }

  render() {
    const { show } = this.state;

    return (
      <div
        ref={r => (this.element = r)}
        id="contact"
        className={ClassNames({ show })}
      >
        <div id="contact-content">
          <div id="contact-title">聯絡</div>
          <div className="contact-item">
            <div className="contact-subtitle">香港總公司</div>
            <table className="contact-info">
              <tbody>
                <tr>
                  <td>地址：</td>
                  <td>九龍荔枝角道78-80號地下</td>
                </tr>
                <tr>
                  <td>電話：</td>
                  <td>
                    <span>+852</span> 2391 6768
                  </td>
                </tr>
                <tr>
                  <td>傳真：</td>
                  <td>
                    <span>+852</span> 2789 1538
                  </td>
                </tr>
                <tr>
                  <td>電郵：</td>
                  <td>
                    <a href="mailto://info@wongpowah.com.hk">
                      info@wongpowah.com.hk
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="contact-item">
            <div className="contact-subtitle">
              深圳代表處：華裔針車（深圳）有限公司
            </div>
            <table className="contact-info">
              <tbody>
                <tr>
                  <td>地址：</td>
                  <td>
                    廣東省深圳市福田區
                    <br />
                    華富街道濱河路與彩田路交匯處
                    <br />
                    聯合廣場 A棟塔樓 A2210
                  </td>
                </tr>
                <tr>
                  <td>電話：</td>
                  <td>
                    <span>+86 755</span> 2360 4173
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="contact-item">
            <div className="contact-subtitle">
              深圳代表處：Vietnam Unique Co., Ltd.
            </div>
            <table className="contact-info">
              <tbody>
                <tr>
                  <td>地址：</td>
                  <td>
                    Floor 10th, Thuy Loi 4 Building, 205A Nguyen Xi St.,
                    <br />
                    Ward 26, Binh Thanh Dist., Ho Chi Minh City, Vietnam
                  </td>
                </tr>
                <tr>
                  <td>電話：</td>
                  <td>
                    <span>+84</span> 08 35116388
                  </td>
                </tr>
                <tr>
                  <td>電郵：</td>
                  <td>
                    <a href="mailto://info@vn-unique.com">info@vn-unique.com</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
