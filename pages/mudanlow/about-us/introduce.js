import Footer from '@/components/layout/mudanlow-layout/footer'
import Navbar from '@/components/layout/mudanlow-layout/navbar'
import React from 'react'

export default function Introduce() {
  return (
    <>
      <div className="container mt-5 pt-4">
        <div className="row align-items-center text-center g-2 mt-5">
          <div className="col-6 col-sm-12 col-lg-6">
            <img className="content-img" src="/about-us/DSC00576.jpg" />
          </div>
          <div className="col-6 col-sm-12 col-lg-6 border content">
            <p>適合家庭、公司、親友聚餐。盡情享受大家相聚歡樂的用餐時光。</p>
            <p>
              提供半開放式包廂、12人圓桌。不管您是小家庭、大家庭或者多人聚餐，我們都會提供最適合的用餐環境。
            </p>
          </div>
        </div>
        <h3 className="text-center my-4 border title">空間區域</h3>
        <div className="row align-items-center text-center g-2 mt-5">
          <div className="col-6 col-sm-12 col-lg-6 border content">
            <p className="text-start">半開放式包廂</p>
            <p className="text-start">可容納人數：12人</p>
            <p className="text-start">
              適合小型文定、親友小聚、家庭聚會等，多功能聚餐使用。
            </p>
          </div>
          <div className="col-6 col-sm-12 col-lg-6">
            <img className="content-img" src="/about-us/DSC00584.jpg" />
          </div>
        </div>
        <div className="row align-items-center text-center g-2 mt-5">
          <div className="col-6 col-sm-12 col-lg-6">
            <img className="content-img" src="/about-us/DSC00580.jpg" />
          </div>
          <div className="col-6 col-sm-12 col-lg-6 border content">
            <p className="text-start">前場</p>
            <p className="text-start">數量：2桌</p>
            <p className="text-start">可容納人數：8-12人</p>
            <p className="text-start">
              適合親友小聚、家庭聚會等，多功能聚餐使用。
            </p>
          </div>
        </div>
        <div className="row align-items-center text-center g-2 mt-5">
          <div className="col-6 col-sm-12 col-lg-6 border content">
            <p className="text-start">後場</p>
            <p className="text-start">數量：1-6桌</p>
            <p className="text-start">可容納人數：至多24人</p>
            <p className="text-start">
              適合多人公司聚餐、三五好友小聚，多功能聚餐使用。
            </p>
          </div>
          <div className="col-6 col-sm-12 col-lg-6">
            <img className="content-img" src="/about-us/DSC00664.jpg" />
          </div>
        </div>
        <h3 className="text-center my-4 border title">室內全景</h3>
        <div className="text-center">
          <iframe
            title="panorama"
            src="https://www.koala360.com/tour?id=7833&preview=true"
            // style="border:none;"
            class="my360Tour"
            name="my360Tour"
            scrolling="no"
            allow="vr; xr; accelerometer; magnetometer; gyroscope; webvr; webxr;"
            frameborder="0"
            height="400px"
            width="600px"
            allowfullscreen
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
        </div>
        <h3 className="text-center my-4 border title">地圖</h3>
        <div className="text-center ">
          <img src="/pics/map.png" className="map" />
        </div>
        <h3 className="text-center my-4 border title">鄰近景點介紹</h3>
        <div className="row mb-5">
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card" style={{ width: '18rem' }}>
              <img
                src="/about-us/赤崁樓.jfif"
                className="card-img-top tourist-spots"
                alt="赤崁樓"
              />
              <div className="card-body">
                <h5 className="card-title">赤崁樓</h5>
                <p className="card-text">
                  前身為荷治時期的「普羅民遮城」，在地人稱為「番仔樓」，曾為全台灣島的商業中心，至清代已傾圮，今列為國定古蹟。
                </p>
                <a
                  href="https://maps.app.goo.gl/oX6eyMMP4kTJagG36"
                  className="btn btn-success"
                  target="_blank"
                >
                  步行五分鐘
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card" style={{ width: '18rem' }}>
              <img
                src="/about-us/祀典武廟.jfif"
                className="card-img-top tourist-spots"
                alt="祀典武廟"
              />
              <div className="card-body">
                <h5 className="card-title">祀典武廟</h5>
                <p className="card-text">
                  祀典武廟，又稱臺南大關帝廟，主要奉祀關聖帝君。為臺灣早期建造的關帝廟。今日之祀典武廟，在赤崁樓之南，由關帝廳擴建而成。
                </p>
                <a
                  href="https://maps.app.goo.gl/kkbTEi8AazKRkzHu8"
                  className="btn btn-success"
                  target="_blank"
                >
                  步行三分鐘
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card" style={{ width: '18rem' }}>
              <img
                src="/about-us/全美戲院.jfif"
                className="card-img-top tourist-spots"
                alt="全美戲院"
              />
              <div className="card-body">
                <h5 className="card-title">全美戲院</h5>
                <p className="card-text">
                  二輪戲院，前身是第一全成戲院。臺灣知名電影導演李安高中時，最常到此觀賞電影。戲院至今仍然使用手繪電影看板，為其特色之一。
                </p>
                <a
                  href="https://maps.app.goo.gl/G6cacTAuzBtgsJxM8"
                  className="btn btn-success"
                  target="_blank"
                >
                  步行一分鐘
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="card" style={{ width: '18rem' }}>
              <img
                src="/about-us/吳園.jfif"
                className="card-img-top tourist-spots"
                alt="吳園"
              />
              <div className="card-body">
                <h5 className="card-title">吳園</h5>
                <p className="card-text">
                  原臺南公會堂，日治時期臺南第一座具公共集會功能的現代建築物，現為臺南市市定古蹟，所在地原是清朝道光年間士紳吳尚新的吳園。
                </p>
                <a
                  href="https://maps.app.goo.gl/HAHzWBj6i6DJorD68"
                  className="btn btn-success"
                  target="_blank"
                >
                  步行七分鐘
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .tourist-spots {
          max-height: 190px;
        }
        .title {
          background-color: #366e53;
          color: white;
        }
        .content {
          background-color: #fefef6;
          color: black;
          border-radius: 10px;
        }
        .content-img {
          width: 480px;
          height: 360px;
          border-radius: 10px;
        }
        .map {
          width: 100%;
        }
      `}</style>
    </>
  )
}
