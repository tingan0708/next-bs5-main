import React, { useState, useRef, useEffect } from 'react'
import { LuckyWheel } from '@lucky-canvas/react'

export default function Lottery() {
  const [blocks] = useState([{ padding: '10px', background: '#869cfa' }])
  const [prizes] = useState([
    {
      background: '#e9e8fe',
      fonts: [
        { text: '再', top: '10%' },
        { text: '加', top: '40%' },
        { text: '油', top: '70%' },
      ],
      imgs: [
        {
          src: '/qrcode/lottery/b60da0f790950f2f1de622e46220497a-scaled.png',
          width: '50%',
          rotate: true,
          alt: '分解茶',
        },
      ],
    },
    {
      background: '#b8c5f2',
      fonts: [{ text: '1' }],
      imgs: [
        {
          src: '/qrcode/lottery/b60da0f790950f2f1de622e46220497a-scaled.png',
          width: '50%',
          rotate: true,
          alt: '分解茶',
        },
      ],
    },
    {
      background: '#e9e8fe',
      fonts: [{ text: '2' }],
      imgs: [
        {
          src: '/qrcode/lottery/b60da0f790950f2f1de622e46220497a-scaled.png',
          width: '50%',
          rotate: true,
          alt: '分解茶',
        },
      ],
    },
    {
      background: '#b8c5f2',
      fonts: [{ text: '3' }],
      imgs: [
        {
          src: '/qrcode/lottery/b60da0f790950f2f1de622e46220497a-scaled.png',
          width: '50%',
          rotate: true,
          alt: '分解茶',
        },
      ],
    },
    {
      background: '#e9e8fe',
      fonts: [{ text: '4' }],
      imgs: [
        {
          src: '/qrcode/lottery/b60da0f790950f2f1de622e46220497a-scaled.png',
          width: '50%',
          rotate: true,
          alt: '分解茶',
        },
      ],
    },
    {
      background: '#b8c5f2',
      fonts: [{ text: '' }],
      imgs: [
        {
          src: '/qrcode/lottery/b60da0f790950f2f1de622e46220497a-scaled.png',
          width: '50%',
          rotate: true,
          alt: '分解茶',
        },
      ],
    },
  ])
  const [buttons, setButtons] = useState([
    { radius: '40%', background: '#617df2' },
    { radius: '35%', background: '#afc8ff' },
    {
      radius: '30%',
      background: '#869cfa',
      pointer: true,
      fonts: [{ text: '開始抽獎', top: '-10px' }],
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

  return (
    <div
      style={{
        margin: 'auto',
        textAlign: 'center',
        backgroundImage: `url(/qrcode/山水畫.jpg)`,
      }}
    >
      {/* <img src="/qrcode/logo-gold.png" alt="" height="10%" id="logo" /> */}
      <h2>本次消費金額: {tradeAmt}</h2>
      <h3>剩餘抽獎次數: {lotteryCount}</h3>
      <LuckyWheel
        ref={myLucky}
        width="500px"
        height="500px"
        blocks={blocks}
        prizes={prizes}
        buttons={buttons}
        onStart={handleStart}
        onEnd={(prize) => {
          alert(
            '恭喜你抽到 ' +
              prize.imgs[0].alt +
              ' 號獎品，請於當次消費出示給現場人員使用'
          )
        }}
      />
    </div>
  )
}

Lottery.getLayout = (page) => page
