import Footer from '@/components/layout/mudanlow-layout/footer'
import Navbar from '@/components/layout/mudanlow-layout/navbar'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function newsList() {
  return (
    <>
      <Navbar />
      {/* 關鍵字大標&回上頁按鈕 */}
      <div className="container-fluid">
        <div className="position-relative">
          <button className="btn btn-success back-btn">
            <a href="/mudanlow">回上頁</a>
          </button>
          <div>
            <div className="row justify-content-center text-center keyword-title">
              <div className="col-4">
                <h1>關鍵字</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 關鍵字 */}
      <div className="container-fluid">
        <div className="d-flex flex-wrap justify-content-center text-center hashtag text-nowrap ">
          <div className="col-lg-2 col-3 fs-4 keyword" data-value={1}>
            #所有文件
          </div>
          <div className="col-lg-2 col-3 fs-4 keyword" data-value={2}>
            #新菜消息
          </div>
          <div className="col-lg-2 col-3 fs-4 keyword" data-value={3}>
            #節慶活動
          </div>
        </div>
        <div className="d-flex justify-content-center text-center hashtag text-nowrap ">
          <div className="col-lg-2 col-3 fs-4 keyword" data-value={4}>
            #公休時間
          </div>
          <div className="col-lg-2 col-3 fs-4 keyword" data-value={5}>
            #貓咪認養
          </div>
        </div>
      </div>
      {/* 內文 */}
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <ul className="list-unstyled" id="news-list">
          <li>
            <div className="content fade-in">
              <div className="w-25 my-2 text-secondary">date</div>
              <div className="w-50 fw-bolder my-2">title</div>
              <div className="d-flex justify-content-between position-relative">
                <div className="inside-content w-75 py-4">content</div>
                <div className="position-absolute end-0 bottom-0">
                  <a href="" className="">
                    <FontAwesomeIcon icon={faChevronRight} height={30} />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* 頁碼 */}
      <nav aria-label="Page navigation">
        <ul className="pagination" id="pagination">
          <li className="page-item ">
            <a className="page-link" href="">
              1
            </a>
          </li>
        </ul>
      </nav>
      {/* 回頂部按鈕 */}
      <div>
        <button id="scrollToTopBtn" onclick="scrollToTop()">
          回到頂部
        </button>
      </div>
      <Footer />
      <style jsx>
        {`
          .SlideMediaBox {
            background-color: cornflowerblue;
            text-align: center;
          }

          /* 回上頁按鈕css */
          .back-btn {
            top: 100px;
            left: 100px;
            position: relative;
          }

          /* 關鍵字大標 */
          .hashtag {
            margin-top: 30px;
          }

          /* 內文css */
          .content {
            width: 700px;
            height: 150px;
            border-bottom: 1px solid black;
            margin-bottom: 20px;
            margin-top: 20px;
            padding-left: 5px;
            border-radius: 10px 10px 0 0;
            transition: transform 0.3s ease;
          }

          .content:hover {
            box-shadow: 0 0 11px rgba(33, 33, 33, 0.3);
            transform: scale(1.05);
          }

          /* 網頁縮放 */
          @media (max-width: 800px) {
            .content {
              width: 450px;
            }

            .back-btn {
              top: 100px;
              left: 20px;
            }
          }

          /* 超連結 */
          a {
            color: inherit;
            text-decoration: inherit;
            cursor: inherit;
            cursor: pointer;
            /* 頁碼css */
          }

          .pagination {
            display: flex;
            justify-content: center;
            list-style-type: none;
            padding: 0;
          }

          .pagination li {
            margin: 0 5px;
          }

          .pagination li a {
            display: block;
            padding: 5px 10px;
            text-decoration: none;
            border: 1px solid #ccc;
            border-radius: 3px;
            color: black;
            background-color: #fff;
          }

          .page-link:hover {
            background-color: #336e53;
            color: #fff;
          }

          .page-item.active .page-link {
            background-color: #458068;
            border-color: #458068;
            color: #fff;
            /* 將文本顏色設置為白色 */
          }

          .page-link {
            color: #458068;
          }

          /* 回頂部按鈕 */
          #scrollToTopBtn {
            display: none;
            /* 預設隱藏按鈕 */
            position: fixed;
            /* 固定在畫面右下角 */
            bottom: 20px;
            right: 20px;
            background-color: #fefef6;
            color: #366e53;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            opacity: 0.5;
          }

          .keyword {
            cursor: pointer;
            text-shadow: 1px 1px gray;
            font-weight: 900;
          }

          .keyword-title {
            margin-top: 80px;
          }

          .fade-in {
            opacity: 0;
            transform: translateX(-40px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }

          .fade-in.show {
            opacity: 1;
            transform: translateX(0);
          }

          @media (max-width: 540px) {
            .content {
              width: 100%;
              font-size: 16px;
              text-wrap: nowrap;
            }

            .hashtag {
              flex-direction: column;
              margin: 0;
            }

            .hashtag .keyword {
              width: auto;
              /* 自动适应宽度 */
              flex: 1;
              /* 均分剩余空间 */
            }
          }

          @media (min-width: 541px) and (max-width: 720px) {
            .content {
              width: 500px;
              font-size: 18px;
            }
          }

          @media (min-width: 721px) and (max-width: 960px) {
            .content {
              width: 700px;
              font-size: 18px;
            }
          }

          @media (min-width: 961px) and (max-width: 1140px) {
            .content {
              width: 700px;
              font-size: 18px;
            }
          }
        `}
      </style>
    </>
  )
}
