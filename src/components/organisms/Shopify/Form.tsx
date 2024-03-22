import React, { useState } from "react";
import { navigate } from "gatsby";
import { formDiv, label, abbr, input, selectItems, formContainer } from "./Form.css";
import { MainButton } from "../../../components/molecules/MainButton";

const Form = () => {
  const [contactKinds, setContactKinds] = useState("製品カタログに関するご質問");
  const [name, setName] = useState("");
  const [ruby, setRuby] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = { contactKinds, name, ruby, email, content };

    try {
      const response = await fetch("https://main--ageo-function.netlify.app/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        alert("送信が成功しました");
        navigate("/contact");
      } else {
        alert("問題が発生しました。お手数ですが再度お問い合わせを入力ください。");
        console.log(response);
      }
    } catch (error) {
      console.error("送信エラー", error);
      alert("送信中にエラーが発生しました。");
    }
  };

  return (
    <form className={formContainer} onSubmit={handleSubmit}>
      <div className={formDiv}>
        <label className={label}>
          <span className={abbr} title="required">
            必須
          </span>
          お問い合わせ内容
        </label>
        <select name="contactKinds" className={selectItems} value={contactKinds} onChange={e => setContactKinds(e.target.value)}>
          <option value="製品カタログに関するご質問">製品カタログに関するご質問</option>
          <option value="販売店に関するご質問">販売店に関するご質問</option>
          <option value="採用に関するご質問">採用に関するご質問</option>
          <option value="製品不具合に関するご質問">製品不具合に関するご質問</option>
          <option value="その他">その他</option>
        </select>
      </div>

      <div className={formDiv}>
        <label className={label}>
          <span className={abbr} title="required">
            必須
          </span>
          お名前（全角/余白なし）
        </label>
        <input
          type="text"
          className={input}
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="上尾太郎"
          maxLength={30}
          minLength={2}
          required
          autoComplete="name"
        />
      </div>

      <div className={formDiv}>
        <label className={label}>
          <span className={abbr} title="required">
            必須
          </span>
          お名前（フリガナ）
        </label>
        <input
          type="text"
          className={input}
          name="ruby"
          value={ruby}
          onChange={e => setRuby(e.target.value)}
          placeholder="アゲオタロウ"
          maxLength={30}
          minLength={2}
          required
          autoComplete="name"
        />
      </div>

      <div className={formDiv}>
        <label className={label}>
          <span className={abbr} title="required">
            必須
          </span>
          メールアドレス
        </label>
        <input
          type="email"
          className={input}
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
      </div>

      <div className={formDiv}>
        <label className={label}>
          <span className={abbr} title="required">
            必須
          </span>
          本文
        </label>
        <textarea
          className={input}
          name="content"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={8}
          required
        ></textarea>
      </div>
      <MainButton buttonText="送信する" />
    </form>
  );
};

export default Form;
