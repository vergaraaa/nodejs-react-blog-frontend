import React from 'react'

import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global';
import { Request } from '../../helpers/Request';
import { List } from '../layouts/List';
import { useParams } from 'react-router-dom';

export const Search = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    getArticles();
  }, [params]);


  const getArticles = async () => {
    const { query } = params;

    const url = Global.url + "/articles/search/" + query;
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
