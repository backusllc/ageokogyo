import React, { useState } from 'react'
import { Link } from 'gatsby'
import { formDiv, label, abbr, input, selectItems, link, div, button } from './Form.css'

const Form = () => {
  const [selected, setSelected] = useState("製品カタログに関するご質問")

  const handleChange = (e: any) => {
    setSelected({ selectedValue: e.target.value })
  }

  return (
    <>
      <div className="inner" >
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div className={formDiv}>
            <label className={label}>お問い合わせ内容<span className={abbr} title="required">*</span>
            </label>
            <select name="title" id="title" className={selectItems}
              onChange={(e) => handleChange(e)}
            >
              <option value="製品カタログに関するご質問" selected={true}>製品カタログに関するご質問</option>
              <option value="販売店に関するご質問">販売店に関するご質問</option>
              <option value="採用に関するご質">採用に関するご質問</option>
              <option value="製品不具合に関するご質問">製品不具合に関するご質問</option>
              <option value="その他">その他</option>
            </select>
            {/* <input type="text" className={input} id="name" name="name" placeholder="" maxlength="30" minlength="2" required autocomplete="name" /> */}
          </div>
          <div className={formDiv}>
            <label className={label}>お名前（全角/余白なし）<span className={abbr} title="required">*</span>
            </label>
            <input type="text" className={input} id="name" name="name" placeholder="上尾太郎" maxlength="30" minlength="2" required autocomplete="name" />
          </div>
          <div className={formDiv}>
            <label className={label}>お名前（フリガナ）<span className={abbr} title="required">*</span>
            </label>
            <input type="text" className={input} id="name" name="name" placeholder="アゲオタロウ" maxlength="30" minlength="2" required autocomplete="name" />
          </div>
          <div className={formDiv}>
            <label className={label}>メールアドレス<span className={abbr} title="required">*</span>
            </label>
            <input type="email" className={input} id="email" name="email" placeholder="" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required autocomplete="email" />
          </div>
          <div className={formDiv}>
            <label className={label}>本文<span className={abbr} title="required">*</span>
            </label>
            <textarea className={input} id="contact" name="content" rows="8" required></textarea>
          </div>
          <div>
            <p><Link to="/privacy" className={link}>「個人情報保護方針」</Link>をお読みの上、送信をクリックしてください。</p>
          </div>

          <div className={div}>
            <button className={button} type="submit">送信する</button>
          </div>
        </form>
      </div >
    </>
  )
}

export default Form
