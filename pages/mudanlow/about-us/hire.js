import Footer from '@/components/layout/mudanlow-layout/footer'
import Navbar from '@/components/layout/mudanlow-layout/navbar'
import React from 'react'

export default function Hire() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container-fluid">
        <div className="picture d-flex align-items-center">
          <div className="row justify-content-center align-items-center g-2 card">
            <h2 className="boxsize text-center m-auto mt-5 mb-5 text-light p-3">
              人 才 招 募
            </h2>
            <div className="boxsize2 fs-5 text-center text-light">
              牡丹樓招募對於餐飲業有熱情的夥伴們
              <br />
              不分年齡一起加入這個大家庭!
              <br />
              共同創造歡樂用餐環境
              <br />
              快上104人力銀行投下您的履歷!
            </div>
            <a
              className="button fw-bolder fs-4 p-3 mt-5 mb-5 hire"
              href="https://www.104.com.tw/company/1a2x6bmrma?jobsource=analysis_jobsame_b"
            >
              立即應徵
            </a>
          </div>
        </div>
        <div className="overlay" />
      </div>
      {/* <Footer /> */}
      <style jsx>
        {`
          .container-fluid {
            margin: 0;
            padding: 0;
            position: relative;
          }

          .picture {
            height: 40rem;
            background-image: url(/images/mudanlow-小圖檔/DSC00567.jpg);
            background-position: 0px -380px;
            padding: 10px 10px 10px 25%;
          }
          @media (max-width: 768px) {
            .picture {
              padding: 10px 20px;
            }
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            /* 使用 RGBA 設置遮罩顏色和透明度 */
            pointer-events: none;
            /* 讓遮罩不影響鼠標事件 */
            z-index: 1;
          }

          @media (min-width: 1200px) {
            .height {
              height: 25rem;
            }
          }

          .card {
            background-color: #336e56;
            border-radius: 10px;
            width: 400px;
            box-shadow: 10px 10px 10px black;
            z-index: 2;
          }

          .boxsize {
            width: 15rem;
            border: 5px solid goldenrod;
            border-radius: 10px;
          }

          .boxsiz2 {
            width: 25rem;
          }

          .button {
            width: 200px;
            border: 2px;
            text-decoration-line: none;
          }

          .hire {
            display: block;
            text-align: center;
            background-color: goldenrod;
            color: #fff;
          }

          .hire:hover {
            color: #2a483a;
          }
        `}
      </style>
    </>
  )
}
