import React from 'react'

import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global';
import { Request } from '../../helpers/Request';

export const Articles = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, [])

  const getArticles = async () => {
    const url = Global.url + "/articles";
    const { data, loading } = await Request(url, "GET");

    setArticles(data);
  }

  return (
    <>
      {
        articles.length >= 1
          ? (articles.map((article) => {
            return (
              <article key={article._id} className='article-item'>
                <div className='mask'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
                </div>

                <div className="data">
                  <h3 className="title">{article.title}</h3>
                  <p className="description">{article.content}</p>

                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </div>
              </article>
            )
          }))
          : <h1>No articles</h1>
      }
    </>
  )
}
