import React, { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { getUserById } from '@/services/user'
import Swal from 'sweetalert2'

const initUserProfile = {
  name: '',
  sex: '',
  phone: '',
  birth_date: '',
  avatar: '',
  username: '',
  name1: '',
  phone1: '',
  zip1: '',
  county1: '',
  district1: '',
  address1: '',
  name2: '',
  phone2: '',
  zip2: '',
  county2: '',
  district2: '',
  address2: '',
  order_address1: '',
}

const MemberLevel = () => {
  const { auth } = useAuth()
  const [userProfile, setUserProfile] = useState(initUserProfile)
  const [totalAmount, setTotalAmount] = useState(0)
  const [membershipLevel, setMembershipLevel] = useState('普通會員')
  const [nextLevelAmount, setNextLevelAmount] = useState(2000)
  const [progressWidth, setProgressWidth] = useState('0%')

  const membershipTargets = [
    { level: 'VIP', amount: 2000 },
    { level: 'VIP999', amount: 7000 },
    { level: '魔關羽', amount: 12000 },
    { level: '尊貴會員', amount: 20000 },
  ]

  const getUserData = async (id) => {
    try {
      const res = await getUserById(id)

      if (res.data.status === 'success') {
        const dbUser = res.data.data.user
        const dbPurchaseOrders = res.data.data.purchaseOrders.filter(
          (order) => order.status === '已付款' || order.status === '完成訂單'
        )

        const accumulatedAmount = dbPurchaseOrders.reduce(
          (acc, order) => acc + order.amount,
          0
        )

        setTotalAmount(accumulatedAmount)
        updateMembershipLevel(accumulatedAmount)
        checkAndSendCoupon(accumulatedAmount, id)
      }
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }

  const checkAndSendCoupon = async (accumulatedAmount, userId) => {
    console.log('Sending coupon request:', accumulatedAmount, userId);
    try {
      const response = await fetch(`http://localhost:3005/api/coupons/add/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          accumulatedAmount, // 此資料不會被插入資料庫，只在後端邏輯中使用
        })
      });
  
      if (!response.ok) {
        console.error('Fetch error:', response.status, response.statusText);
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Coupon response:', data);
  
      if (data.success) {
        const couponValue = data.result.coupons_sample_price;
        Swal.fire({
          title: '恭喜！',
          text: `您已獲得一張價值 ${couponValue} 元的折價券！`,
          icon: 'success',
          confirmButtonText: '前往會員資料查看',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/profile';
          }
        });
      } else {
        console.error('Backend error:', data);
      }
    } catch (error) {
      console.error('Error sending coupon:', error);
    }
  };

  const updateMembershipLevel = (accumulatedAmount) => {
    let newMembershipLevel = '普通會員'
    let newNextLevelAmount = 2000

    for (let i = 0; i < membershipTargets.length; i++) {
      const target = membershipTargets[i]
      if (accumulatedAmount >= target.amount) {
        newMembershipLevel = target.level
        if (i < membershipTargets.length - 1) {
          newNextLevelAmount =
            membershipTargets[i + 1].amount - accumulatedAmount
        } else {
          newNextLevelAmount = 0
        }
      }
    }

    if (accumulatedAmount < membershipTargets[0].amount) {
      const percentage = (accumulatedAmount / membershipTargets[0].amount) * 100
      setProgressWidth(`${percentage}%`)
    } else {
      const currentTarget = membershipTargets.find(
        (target) => target.level === newMembershipLevel
      )
      const nextTarget = membershipTargets.find(
        (target) =>
          target.level !== newMembershipLevel &&
          accumulatedAmount < target.amount
      )
      const percentage =
        ((accumulatedAmount - currentTarget.amount) /
          (nextTarget.amount - currentTarget.amount)) *
        100
      setProgressWidth(`${percentage}%`)
    }

    setMembershipLevel(newMembershipLevel)
    setNextLevelAmount(newNextLevelAmount)
  }

  useEffect(() => {
    if (auth.isAuth) {
      getUserData(auth.userData.id)
    }
  }, [auth])

  useEffect(() => {
    if (userProfile.name) {
      // 在這裡處理當 userProfile 載入後的邏輯
    }
  }, [userProfile])

  useEffect(() => {
    const progressElement = document.querySelector('.progress-bar')
    if (progressElement) {
      progressElement.style.width = progressWidth
    }
  }, [totalAmount, progressWidth])

  return (
    <div className="">
      <div className="row">
        <div className="col">
          <span
            style={{
              marginRight: '5px',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            累積消費:
          </span>
          <span
            style={{
              display: 'inline-block',
              padding: '6px 8px',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#333',
              backgroundColor: '#ffffff',
              borderRadius: '3px',
              marginTop: '2px',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {totalAmount}
          </span>
          <span style={{ marginLeft: '5px' }}>
            會員等級:{' '}
            <span id="spanText" className="fs-4 text-warning">
              {membershipLevel}
            </span>
            <span id="spanText1" className="fs-6 px-2">
              再消費 {nextLevelAmount} 即可升級
            </span>
          </span>
        </div>
      </div>

      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax={membershipTargets[membershipTargets.length - 1].amount}
          aria-valuenow={totalAmount}
          style={{ width: progressWidth }}
        ></div>
      </div>
    </div>
  )
}

export default MemberLevel
