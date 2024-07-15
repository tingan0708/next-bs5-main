import Footer from '@/components/layout/mudanlow-layout/footer'
import Navbar from '@/components/layout/mudanlow-layout/navbar'
import React from 'react'

export default function NewsContent() {
  return (
    <>
      <Navbar />
      <div className="container-fluid newsPage">
        <div className="newsNavbarPic bg-secondary position-relative">
          <div className="position-absolute newsNavbarPicText">最新消息</div>
          <div className="newsNavbarPicOverlay" />
          <div className="newsMain d-flex justify-content-evenly">
            <div className="newsContent">
              <div className="newsTitle">標題</div>
              <div className="d-flex justify-content-bewteen">
                <div className="newsContentPic">
                  <img src="/images/mudanlow-小圖檔/DSC00585.jpg" alt="" />
                  <div className="line1" />
                  <div className="line2" />
                  <div className="date">2024-09-09</div>
                  <div />
                </div>
                <div className="newsMainContent position-relative">
                  <div className="contentInside">123465</div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center other">
                <div className="share">分享至:</div>
                <div className="nextPage">
                  <button className="nextPageBtn">下一頁</button>
                </div>
              </div>
            </div>
            <div className="otherContent">
              <div className="newsTitle">其他消息</div>
              <div>
                <ul>
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <style jsx>{`
        .newsPage {
          padding: 0 200px;
          padding-bottom: 800px;
        }
        .newsNavbarPic {
          width: 100%;
          height: 380px;
          margin: 50px auto;
          background-image: url(/images/mudanlow-小圖檔/DSC00594.jpg);
          background-position: 90% 35%;
          background-repeat: no-repeat;
          z-index: 1;
        }
        .newsNavbarPicOverlay {
          width: 100%;
          height: 100%;
          background: #31313186;
          z-index: 2;
        }
        .newsNavbarPicText {
          font-size: 54px;
          font-weight: 900;
          top: 40%;
          left: 45%;
          z-index: 3;
          color: white;
        }
        .newsMain {
          width: 100%;
          margin-top: 50px;
        }
        .newsContent {
          width: 65%;
        }
        .otherContent {
          width: 30%;
        }
        .newsTitle {
          border-bottom: 2px dashed gray;
          font-size: 30px;
        }
        .newsContentPic {
          margin-top: 30px;
          width: 400px;
          height: 600px;
          position: relative;
        }
        .newsContentPic > img {
          width: 100%;
          object-fit: fill;
        }
        .line1 {
          height: 25%;
          border-left: 5px solid gray;
          position: absolute;
          top: 0;
          left: -7%;
        }
        .line2 {
          width: 50%;
          border-bottom: 5px solid gray;
          position: absolute;
          bottom: 6%;
          right: 0;
        }
        .date {
          bottom: 4%;
          left: 0px;
          position: absolute;
          color: rgb(177, 176, 176);
          font-size: 24px;
        }
        .newsMainContent {
          width: 400px;
          height: 100%;
          margin-bottom: 100px;
        }
        .other {
          width: 100%;
          margin-bottom: 50px;
          font-size: 18px;
        }
        .contentInside {
          margin-left: 50px;
          margin-top: 70px;
          height: 500px;
          font-size: 24px;
        }

        .nextPageBtn {
          background-color: #31313186;
          padding: 5px 15px;
          border-radius: 5px;
        }

        .share {
          color: #000;
        }
      `}</style>
    </>
  )
}
