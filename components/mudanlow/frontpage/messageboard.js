import React, { useState, useEffect } from 'react'
import styles from './messageboard.module.scss'

export default function MessageBoard() {
  const [formData, setFormData] = useState({ value: '', content: '' })
  const [comments, setComments] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const sendData = (e) => {
    e.preventDefault()

    const fd = new FormData()
    fd.append('value', formData.value)
    fd.append('content', formData.content)

    fetch('http://localhost:3005/api/message-board/add', {
      method: 'POST',
      body: fd,
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          alert('成功送出！')
          fetchComments() // 重新加載評論
        } else {
          console.log('資料新增失敗')
        }
      })
      .catch((ex) => {
        console.log('fetch() 發生錯誤, 回傳的 JSON 格式是錯的')
        console.log(ex)
      })
  }

  const fetchComments = () => {
    fetch('http://localhost:3005/api/message-board/api')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setComments(data.comments)
        } else {
          console.log('獲取評論失敗')
        }
      })
      .catch((ex) => {
        console.log('fetch() 發生錯誤, 回傳的 JSON 格式是錯的')
        console.log(ex)
      })
  }

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <>
      <div
        className={`container-fluid d-flex justify-content-center align-items-center py-5 ${styles.messageSection}`}
      >
        <div
          className={`row gx-4 gx-lg-5 m-3 justify-content-center ${styles.messageBoard} flex-column align-items-center`}
        >
          <div className="col-lg-8 col-xl-6 text-center mb-3">
            <h2>寫下你想說的話吧~</h2>
          </div>
          <div className="col-lg-8 col-xl-6 text-center mb-3">
            <label htmlFor="score5">請給我們評分:</label>
            <form id="message" onSubmit={sendData}>
              <div className={styles.score}>
                <input
                  type="radio"
                  name="value"
                  id="score5"
                  value="5"
                  onChange={handleChange}
                />
                <label className={styles.star} htmlFor="score5"></label>

                <input
                  type="radio"
                  name="value"
                  id="score4"
                  value="4"
                  onChange={handleChange}
                />
                <label className={styles.star} htmlFor="score4"></label>

                <input
                  type="radio"
                  name="value"
                  id="score3"
                  value="3"
                  onChange={handleChange}
                />
                <label className={styles.star} htmlFor="score3"></label>

                <input
                  type="radio"
                  name="value"
                  id="score2"
                  value="2"
                  onChange={handleChange}
                />
                <label className={styles.star} htmlFor="score2"></label>

                <input
                  type="radio"
                  name="value"
                  id="score1"
                  value="1"
                  onChange={handleChange}
                />
                <label className={styles.star} htmlFor="score1"></label>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="textContent">
                  輸入內容:
                </label>
                <textarea
                  className="form-control"
                  id="textContent"
                  name="content"
                  rows="5"
                  value={formData.content}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="btn btn-light" type="submit">
                送出
              </button>
            </form>
          </div>
        </div>
      </div>
      <section
        className={`container-fluid d-flex justify-content-center align-items-center py-5 ${styles.commentSection}`}
      >
        <div
          className={`col-lg-8 col-xl-6 text-center mb-3 ${styles.commentBoard} m-3`}
        >
          <div className="row align-items-center">
            <ul className="list-unstyled" id="comment-list">
              {comments.map((comment) => (
                <li className={styles.comments} key={comment.c_id}>
                  <h2 className="text-center text-light">留言板</h2>
                  <div className="text-light">編號: {comment.c_id}</div>
                  <label className="text-light">評分:</label>
                  <div className={`${styles.commentStar} text-center`}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <label className={styles.star} key={i}>
                        {i <= comment.value ? '★' : '☆'}
                      </label>
                    ))}
                  </div>
                  <label className="text-light">內容:</label>
                  <div className={styles.commentContent}>{comment.content}</div>
                  <div className="text-light">
                    留言時間: {comment.created_at}
                  </div>
                </li>
              ))}
              <div className="d-flex justify-content-between">
                <div className="col-auto">
                  <button className={`prev ${styles.commentBtn}`}>
                    <i className="bi bi-caret-left-fill"></i>
                  </button>
                </div>
                <div className="col-auto">
                  <button className={`next ${styles.commentBtn}`}>
                    <i className="bi bi-caret-right-fill"></i>
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
