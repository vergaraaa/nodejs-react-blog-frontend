import React from 'react'

export const CreateArticle = () => {
  return (
    <div className='jumbo'>
      <h1>Create article</h1>
      <p>Form to create an article</p>

      <form className="form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea name="content"></textarea>
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
