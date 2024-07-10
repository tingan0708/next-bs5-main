import React from 'react'

export default function MudanlowIndex() {
  return (
    <>
      {/* <!-- 關於我們 --> */}
      <section id="about-us">
        <div className="container-fluid p-5">
          <div className="row align-items-center justify-content-center g-5">
            <div className="col-lg-5">
              <div className="image-holder mb-4">
                <img
                  src="mudanlow-小圖檔/DSC00576.jpg"
                  alt="single"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="detail p-5">
                <div className="display-header">
                  <h2 className="display-4 text-dark pb-2 lxgw-wenkai-mono-tc-bold">
                    起源/宗旨
                  </h2>
                  <p className="pb-3 lxgw-wenkai-mono-tc-regular">
                    2016年春天，一家名為「牡丹樓中式料理」的小店開始了它的故事。
                    在店主邱小姐心中，家始終是最溫暖的地方，而食物是家的象徵。於是，他決定開設一家以家為靈感的中國傳統料理餐廳，希望能將家的溫馨帶給每一位客人。
                    <br />
                    從開店至今，我們相信，每一位客人都是家人，應該被以真誠和溫暖來對待。無論是簡單的問候還是精心的服務，他都希望能讓顧客在牡丹樓感受到家的溫馨，便將「顧客至上」作為店家的宗旨。
                    <br />
                    每一道餐點都蘊含著我們對家的深情，每一位客人都被真誠和溫暖所包圍。
                    牡丹樓的故事將繼續延續下去，帶給更多人家的溫馨與美味。
                  </p>
                  <a
                    href="about-us.html"
                    className="btn btn-medium btn-arrow outline-dark mt-3 btn-color d-flex align-items-center justify-content-center"
                  >
                    <span className="text-uppercase lxgw-wenkai-mono-tc-regular">
                      關於我們
                    </span>
                    {/* <svg className="arrow-right" width="18" height="20">
                      <use xlink:href="#arrow-right"></use>
                    </svg> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- 餐點預覽 --> */}
      <section
        id="trending-products"
        className="section-secondary-color background1"
      >
        <div className="row d-flex justify-content-center ">
          <div className="col-4 text-center">
            <h2 className="display-4 lxgw-wenkai-mono-tc-bold title">
              餐點介紹
            </h2>
            <div className="text-center">1234</div>
          </div>
          <div className="col-8">
            <div className="container-fluid d-flex justify-content-center position-relative">
              <div className="container lxgw-wenkai-mono-tc-regular">
                <div className="card-carousel">
                  <div className="card" id="1">
                    <div className="image-container"></div>
                    <button className="carousel-btn">查看菜單</button>
                  </div>
                  <div className="card" id="2">
                    <div className="image-container"></div>
                    <button className="carousel-btn">查看菜單</button>
                  </div>
                  <div className="card" id="3">
                    <div className="image-container"></div>
                    <button className="carousel-btn">查看菜單</button>
                  </div>
                  <div className="card" id="4">
                    <div className="image-container"></div>
                    <button className="carousel-btn">查看菜單</button>
                  </div>
                  <div className="card" id="5">
                    <div className="image-container"></div>
                    <button className="carousel-btn">查看菜單</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- 最新消息 --> */}
      <section id="trending-products" className="news-section background2">
        <div className="container-fluid">
          <div className="row overflow-hidden">
            <div className="display-header pb-3 col-md-12">
              <h2 className="display-4 lxgw-wenkai-mono-tc-bold title">
                最新消息
              </h2>
              {/* <!--put your content inside--> */}
            </div>
            <div className="container-fluid d-flex justify-content-center my-3 news-section">
              <div className="news p-4 bg-light m-3">
                <div className="border-bottom border-dark">
                  <h1 className="lxgw-wenkai-mono-tc-regular">最新消息</h1>
                </div>
                <div className="bg-light">
                  <ul className="list-unstyled">
                    <li className="news-list">
                      <div className="border-bottom border-dark row align-items-center py-3 list">
                        <div className="col-4 ">
                          <div className="text-secondary ">123</div>
                          <div className="fw-bolder ">456</div>
                        </div>
                        <div className="col-7 ">1234</div>
                        <div className="col-1 ">
                          <a href="" title="arrows icons">
                            <div>
                              <i
                                className="fa-solid fa-chevron-right fa-xl"
                                style="color: black"
                              ></i>
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="position-relative p-2">
                  <nav className="buttons position-absolute bottom-0 end-0">
                    <a
                      className="more-btn"
                      href="./news-list.php"
                      data-button="more"
                    >
                      MORE...
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- 照片分割 --> */}
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-lg-3 col-md-6 p-0">
            <img
              className="front-page-img"
              src="mudanlow-小圖檔/DSC00587.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <img
              className="front-page-img"
              src="mudanlow-小圖檔/DSC00694.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <img
              className="front-page-img"
              src="mudanlow-小圖檔/DSC00583.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <img
              className="front-page-img"
              src="mudanlow-小圖檔/DSC00699.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <!-- 留言板 --> */}
      <section id="message-board" className="section-secondary-color ">
        <div className="container-fluid">
          <div className="row">
            <div className="display-header pb-3 col-md-12">
              <h2 className="display-4 lxgw-wenkai-mono-tc-bold title">
                留言板
              </h2>
            </div>
            <div className="d-flex justify-content-center align-items-center text-center message">
              <div className="container-fluid ">
                <div className="row">
                  <div className="display-header pb-3 col-md-12 d-flex justify-content-center align-items-center text-center">
                    {/* <!--put your content inside--> */}
                    <div className="row gx-4 gx-lg-5 m-3 justify-content-center message-board flex-column align-items-center">
                      <div className="text-center mb-3">
                        <h2 className="lxgw-wenkai-mono-tc-bold">
                          寫下你想說的話吧~
                        </h2>
                      </div>
                      <div className="text-center mb-3">
                        <label htmlFor="" className="lxgw-wenkai-mono-tc-bold">
                          請給我們評分:
                        </label>
                        <htmlForm id="message" onsubmit="sendData(event)">
                          <div className="score">
                            <input
                              type="radio"
                              name="value"
                              id="score5"
                              value="5"
                            />
                            <label className="star" htmlFor="score5"></label>

                            <input
                              type="radio"
                              name="value"
                              id="score4"
                              value="4"
                            />
                            <label className="star" htmlFor="score4"></label>

                            <input
                              type="radio"
                              name="value"
                              id="score3"
                              value="3"
                            />
                            <label className="star" htmlFor="score3"></label>

                            <input
                              type="radio"
                              name="value"
                              id="score2"
                              value="2"
                            />
                            <label className="star" htmlFor="score2"></label>

                            <input
                              type="radio"
                              name="value"
                              id="score1"
                              value="1"
                            />
                            <label className="star" htmlFor="score1"></label>
                          </div>
                          <div className="mb-3">
                            <label className="htmlForm-label lxgw-wenkai-mono-tc-bold">
                              輸入內容:
                            </label>
                            <textarea
                              className="htmlForm-control"
                              id="textContent"
                              name="content"
                              rows="5"
                            ></textarea>
                          </div>
                          <button
                            className="btn btn-light lxgw-wenkai-mono-tc-bold btn-color"
                            type="submit"
                          >
                            送出
                          </button>
                        </htmlForm>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="display-header pb-3 col-md-12">
                    {/* <!--put your content inside--> */}
                    <div className="d-flex justify-content-center align-items-center text-center mb-3 comment-board m-3">
                      <div className="row align-items-center">
                        <ul className="list-unstyled" id="comment-list">
                          {/* <!-- 迭代顯示留言 --> */}
                          <li className="comments">
                            <h2 className="text-center lxgw-wenkai-mono-tc-bold">
                              留言板
                            </h2>
                            {/* <!-- 顯示留言的內容和評分 --> */}
                            <div className="lxgw-wenkai-mono-tc-regular">
                              編號:
                            </div>
                            <label className="lxgw-wenkai-mono-tc-regular">
                              評分:
                            </label>
                            <div className="comment-star text-center"></div>
                            <label className="lxgw-wenkai-mono-tc-regular">
                              內容:
                            </label>
                            <div className="comment-content"></div>
                            <div className="lxgw-wenkai-mono-tc-regular">
                              留言時間:
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- 地圖 --> */}
      <section id="collections" className="position-relative background1">
        <h2 className="display-4 lxgw-wenkai-mono-tc-bold title2">地圖</h2>
        <div className="container-fluid d-flex justify-content-center">
          <img
            src="./mudanlow-小圖檔/messageImage_1718801833774.jpg"
            alt=""
            style="width: 800px "
          />
        </div>
        <div className="swiper-pagination position-absolute text-center"></div>
      </section>
      {/* <!-- 關於我們&徵才資訊 --> */}
      <section className=" section-secondary-color background2">
        <div className="container">
          <div className="row d-flex justify-content-evenly align-items-center">
            <div className="col-4">
              <div className="about-hire">
                <img
                  className="about-hire-img"
                  src="/mudanlow-小圖檔/DSC00567.jpg"
                  alt=""
                />
                <button className="mt-5 lxgw-wenkai-mono-tc-light">
                  場地介紹
                </button>
              </div>
            </div>
            <div className="col-4">
              <div className="about-hire">
                <img
                  className="about-hire-img"
                  src="/mudanlow-小圖檔/DSC00691.jpg"
                  alt=""
                />
                <button className="mt-5 lxgw-wenkai-mono-tc-light">
                  人才招募
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
