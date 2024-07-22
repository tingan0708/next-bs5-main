import React, { useState, useRef, useEffect } from 'react'
import { LuckyWheel } from '@lucky-canvas/react'
import Swal from 'sweetalert2'

export default function Lottery() {
  const [blocks] = useState([{ padding: '10px', background: '#465952' }])
  const [prizes] = useState([
    {
      background: '#C3F6E3',
      fonts: [
        { text: '再', top: '10%' },
        { text: '加', top: '40%' },
        { text: '油', top: '70%' },
      ],
      imgs: [
        {
          src: '/qrcode/lottery/b60da0f790950f2f1de622e46220497a-scaled.png',
          width: '0%',
          rotate: true,
          alt: '銘謝惠顧',
        },
      ],
    },
    {
      background: '#8AAFA1',
      fonts: [{ text: '' }],
      imgs: [
        {
          src: '/qrcode/lottery/452074646_975471984587702_8084564207493751396_n.jpg',
          width: '0%',
          rotate: true,
          alt: '芳草啤酒',
        },
      ],
    },
    {
      background: '#8AAFA1',
      fonts: [{ text: '' }],
      imgs: [
        {
          src: '/qrcode/lottery/452074646_975471984587702_8084564207493751396_n.jpg',
          width: '90%',
          rotate: true,
          alt: '芳草啤酒',
        },
      ],
    },
    {
      background: '#8AAFA1',
      fonts: [{ text: '' }],
      imgs: [
        {
          src: '/qrcode/lottery/452074646_975471984587702_8084564207493751396_n.jpg',
          width: '0%',
          rotate: true,
          alt: '芳草啤酒',
        },
      ],
    },
    {
      background: '#C3F6E3',
      fonts: [{ text: '' }],
      imgs: [
        {
          src: '/qrcode/lottery/9e28c8aefb688e9f4876754f24898b7f.png',
          width: '0%',
          rotate: true,
          alt: '熱豆花',
        },
      ],
    },
    {
      background: '#C3F6E3',
      fonts: [{ text: '' }],
      imgs: [
        {
          src: '/qrcode/lottery/9e28c8aefb688e9f4876754f24898b7f.png',
          width: '100%',
          rotate: true,
          alt: '熱豆花',
        },
      ],
    },
    {
      background: '#C3F6E3',
      fonts: [{ text: '' }],
      imgs: [
        {
          src: '/qrcode/lottery/9e28c8aefb688e9f4876754f24898b7f.png',
          width: '0%',
          rotate: true,
          alt: '熱豆花',
        },
      ],
    },
    {
      background: '#8AAFA1',
      fonts: [
        { text: '再', top: '10%' },
        { text: '加', top: '40%' },
        { text: '油', top: '70%' },
      ],
      imgs: [
        {
          src: '/qrcode/lottery/b60da0f790950f2f1de622e46220497a-scaled.png',
          width: '0%',
          rotate: true,
          alt: '銘謝惠顧',
        },
      ],
    },
    {
      background: '#C3F6E3',
      fonts: [{ text: '' }],
      imgs: [
        {
          src: '/qrcode/lottery/b60da0f790950f2f1de622e46220497a-scaled.png',
          width: '100%',
          rotate: true,
          alt: '分解茶',
        },
      ],
    },
    {
      background: '#8AAFA1',
      fonts: [{ text: '' }],
      imgs: [
        {
          src: '/qrcode/lottery/9a0da310672d5ac0697fac9246104056.png',
          width: '0%',
          rotate: true,
          alt: '杏仁豆腐',
        },
      ],
    },
    {
      background: '#8AAFA1',
      fonts: [{ text: '' }],
      imgs: [
        {
          src: '/qrcode/lottery/9a0da310672d5ac0697fac9246104056.png',
          width: '0%',
          rotate: true,
          alt: '杏仁豆腐',
        },
      ],
    },
    {
      background: '#8AAFA1',
      fonts: [{ text: '' }],
      imgs: [
        {
          src: '/qrcode/lottery/9a0da310672d5ac0697fac9246104056.png',
          width: '90%',
          rotate: true,
          alt: '杏仁豆腐',
        },
      ],
    },
    {
      background: '#8AAFA1',
      fonts: [{ text: '' }],
      imgs: [
        {
          src: '/qrcode/lottery/9a0da310672d5ac0697fac9246104056.png',
          width: '0%',
          rotate: true,
          alt: '杏仁豆腐',
        },
      ],
    },
    {
      background: '#8AAFA1',
      fonts: [{ text: '' }],
      imgs: [
        {
          src: '/qrcode/lottery/9a0da310672d5ac0697fac9246104056.png',
          width: '0%',
          rotate: true,
          alt: '杏仁豆腐',
        },
      ],
    },
  ])
  const [buttons, setButtons] = useState([
    { radius: '40%', background: '#465952' },
    { radius: '35%', background: '#8AAFA1' },
    {
      radius: '30%',
      background: '#465952',
      pointer: true,
      fonts: [{ text: '開始抽獎', top: '-10px', fontColor: 'white' }],
      enabled: false,
    },
  ])
  const myLucky = useRef()
  const [lotteryCount, setLotteryCount] = useState(0)
  const [tradeAmt, setTradeAmt] = useState(0)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const tradeAmtValue = parseInt(urlParams.get('TradeAmt')) || 0
    setTradeAmt(tradeAmtValue)

    const newLotteryCount = Math.floor(tradeAmtValue / 1000)
    setLotteryCount(newLotteryCount)

    const updatedButtons = [...buttons]
    updatedButtons[2].enabled = newLotteryCount > 0
    setButtons(updatedButtons)
  }, [])

  const handleStart = () => {
    if (buttons[2].enabled) {
      myLucky.current.play()
      setTimeout(() => {
        const index = (Math.random() * 6) >> 0
        myLucky.current.stop(index)
        setLotteryCount((prevCount) => prevCount - 1)
        const updatedButtons = [...buttons]
        updatedButtons[2].enabled = lotteryCount > 1
        setButtons(updatedButtons)
      }, 2500)
    } else {
      alert('抽獎次數已用完，請增加消費金額來獲得更多抽獎機會！')
    }
  }

  function generateCouponCode(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' // 包含大寫字母和數字
    let couponCode = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      couponCode += characters[randomIndex]
    }
    return couponCode
  }
  return (
    <div
      style={{
        backgroundImage: `url(/qrcode/山水畫.jpg)`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100mvw',
        display: 'flex',
        justifyContent: 'center',
        padding: '0',
        margin: '0',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          // margin: 'auto',
          textAlign: 'center',
        }}
      >
        <img
          src="/qrcode/logo-gold.png"
          alt=""
          height="50px"
          id="logo"
          style={{ marginBottom: '50px' }}
        />
        <h2 style={{ color: 'white' }}>本次消費金額: {tradeAmt}</h2>
        <h3 style={{ color: 'white' }}>剩餘抽獎次數: {lotteryCount}</h3>

        <LuckyWheel
          ref={myLucky}
          width="400px"
          height="400px"
          blocks={blocks}
          prizes={prizes}
          buttons={buttons}
          onStart={handleStart}
          onEnd={(prize) => {
            if (prize.imgs[0].alt === '銘謝惠顧') {
              Swal.fire({
                text: '差一點就中獎了!',
                imageUrl: prize.imgs[0].src,
                imageHeight: 0,
                imageAlt: '沒中',
              })
              // console.log(generateCouponCode())
            } else {
              Swal.fire({
                title: '中獎序號' + generateCouponCode(),
                text:
                  '恭喜你抽到 ' +
                  prize.imgs[0].alt +
                  '，請於當次消費出示給現場人員兌換',
                imageUrl: prize.imgs[0].src,
                imageHeight: 500,
                imageAlt: '中獎',
              })
            }
          }}
        />
      </div>
    </div>
  )
}

Lottery.getLayout = (page) => page
