import Footer from '@/components/layout/mudanlow-layout/footer'
import Navbar from '@/components/layout/mudanlow-layout/navbar'
import React from 'react'

export default function NewsContent() {
  return (
    <>
      <Navbar />
      {/* 關鍵字大標&回上頁按鈕 */}
      <div className="container-fluid">
        <div className="position-relative">
          <button className="btn btn-success back-btn">
            <a href="./news-list.php">回上頁</a>
          </button>
          <div className="container-fluid d-flex justify-content-center">
            <div className="w-50 border-bottom border-dark keyword">
              <div className="row justify-content-center text-center">
                <div className="news-title">
                  <h1>最新消息</h1>
                </div>
              </div>
              <div className="row justify-content-center text-center">
                <h4>The News</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 內文 */}
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="container-fluid content position-relative">
          <div className="date">
            <h4>date</h4>
          </div>
          <div className="article-title">
            <h3 className="fw-bolder">title</h3>
          </div>
          <div className="container text-center news-photo d-flex justify-content-center">
            <img
              className="img-fluid rounded content-img mr-2 mb-2"
              src=""
              alt=""
            />
          </div>
          <div className="news-content">1234</div>
        </div>
      </div>
      {/* 頁碼 */}
      <div className="container-fluid d-flex justify-content-evenly">
        <button
          className="page-btn btn btn-success"
          onclick="location.href='news-content.php?a_id=<?= $previousId ?>'"
        >
          上一頁
        </button>
        <button
          className="page-btn btn btn-success"
          onclick="location.href='news-content.php?a_id=<?= $nextId ?>'"
        >
          下一頁
        </button>
      </div>
      {/* 回頂部按鈕 */}
      <div>
        <button id="scrollToTopBtn" onclick="scrollToTop()">
          回到頂部
        </button>
      </div>
      <Footer />
      <style jsx>{`
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
        .keyword {
          margin-top: 5rem;
        }

        /* 內文css */
        .content {
          width: 1200px;
          height: 100vh;
          border: 1px solid #366e53;
          margin-bottom: 50px;
          margin-top: 50px;
          background-color: #366e53;
          border-radius: 20px;
        }

        .date {
          position: absolute;
          top: -35px;
          color: #999;
        }

        .article-title {
          position: absolute;
          top: 25px;
          left: 60px;
          flex-wrap: nowrap;
        }

        .news-photo {
          width: 720px;
          height: 405px;
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .news-content {
          width: 90%;
          height: 300px;
          max-width: 800px;
          border-radius: 10px;
          position: absolute;
          top: 70%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 20px;
          padding: 10px;
          background-color: #fff;
          outline: 5px dashed black;
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
        }

        .page-btn {
          background: #999;
          color: #fff;
          height: 50px;
          width: 120px;
          border-radius: 20px;
          margin-bottom: 50px;
          border: 1px solid #666;
          font-size: 20px;
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
          opacity: 0.8;
        }

        .content-img {
          height: 300px;
          object-fit: contain;
        }

        /* 调整内容布局和样式 */
        @media (max-width: 800px) {
          .news-content {
            width: 90%;
            /* 改变内容宽度 */
            font-size: 16px;
            /* 调整字体大小 */
          }

          .article-title {
            top: 10px;
            /* 调整标题位置 */
            left: 10px;
          }

          .news-photo {
            width: 90%;
          }
        }

        @media (max-width: 540px) {
          .news-photo {
            width: 100%;
            /* 适应屏幕宽度 */
          }

          .news-content {
            width: 90%;
            /* 改变内容宽度 */
            font-size: 14px;
            /* 调整字体大小 */
          }

          .article-title {
            top: 10px;
            /* 调整标题位置 */
            left: 10px;
          }
        }
      `}</style>
    </>
  )
}
