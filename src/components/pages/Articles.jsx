import React from 'react'

import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global';
import { Request } from '../../helpers/Request';
import { List } from '../layouts/List';

export const Articles = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles();
  }, [])

  const getArticles = async () => {
    const url = Global.url + "/articles";
    const { data } = await Request(url, "GET");

    setArticles(data);
    setLoading(false);
  }

  return (
    <>
      {
        loading
          ? "Loading..." :
          articles.length >= 1
            ? <List
              articles={articles}
              setArticles={setArticles}
            />
            : <h1>No articles</h1>
      }
    </>
  )
}
