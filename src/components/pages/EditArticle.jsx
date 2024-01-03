import React, { useEffect, useState } from 'react'
import { useForm } from "../../hooks/useForm"
import { Request } from '../../helpers/Request';
import { Global } from '../../helpers/Global';
import { useParams } from 'react-router-dom';

export const EditArticle = () => {
  const { form, submit, change } = useForm({});

  const [result, setResult] = useState("not_sent");

  const params = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    const url = Global.url + "/articles/one/" + params.id;

    const { data } = await Request(url, "GET");

    setArticle(data);
  }

  const editArticle = async (e) => {
    e.preventDefault();

    const { data } = await Request(Global.url + "/articles/one/" + params.id, "PUT", form);

    const fileInput = document.querySelector("#file");

    if (data.status === "success" && fileInput.files[0]) {

      const formData = new FormData();

      formData.append("file", fileInput.files[0]);

      const image = await Request(Global.url + "/articles/upload-image/" + data.article._id, "POST", formData, true);

      if (image.data.status == "success") {
        setResult("saved");
      }
      else {
        setResult("error");
      }
    }
  }

  return (
    <div className='jumbo'>
      <h1>Edit article</h1>
      <p>Form to edit: {article.title}</p>

      <strong>{result === "saved" && ("Article edited successfully!")}</strong>
      <strong>{result === "error" && ("Incorrect data")}</strong>

      <form className="form" onSubmit={editArticle}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={change} defaultValue={article.title} />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea name="content" onChange={change} defaultValue={article.content}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="file">Image</label>

          <div className='mask'>
            {
              article.image === "default.png"
              && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
            }
            {
              article.image !== "default.png"
              && <img src={Global.url + "/articles/image/" + article.image} />
            }
          </div>

          <input type="file" name="file" id="file" />
        </div>

        <input type="submit" value="Save" className='btn btn-success' />
      </form>
    </div>
  )
}
