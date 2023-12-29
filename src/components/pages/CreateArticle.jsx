import React, { useState } from 'react'
import { useForm } from "../../hooks/useForm"
import { Request } from '../../helpers/Request';
import { Global } from '../../helpers/Global';

export const CreateArticle = () => {

  const { form, submit, change } = useForm({});

  const [result, setResult] = useState("not_sent");

  const saveArticle = async (e) => {
    e.preventDefault();

    const { data } = await Request(Global.url + "/articles/create", "POST", form);

    if (data.status === "success") {

      const fileInput = document.querySelector("#file");

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
    else {
      setResult("error");
    }
  }

  return (
    <div className='jumbo'>
      <h1>Create article</h1>
      <p>Form to create an article</p>

      <strong>{result === "saved" && ("Article saved successfully!")}</strong>
      <strong>{result === "error" && ("Incorrect data")}</strong>

      <form className="form" onSubmit={saveArticle}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={change} />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea name="content" onChange={change}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="file">Image</label>
          <input type="file" name="file" id="file" />
        </div>

        <input type="submit" value="Save" className='btn btn-success' />
      </form>
    </div>
  )
}
