import React, { useEffect, useState } from 'react'
import { Global } from '../../helpers/Global';
import { Request } from '../../helpers/Request';
import { useParams } from 'react-router-dom';

export const Article = () => {

  const params = useParams();

  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    const url = Global.url + "/articles/one/" + params.id;

    const { data } = await Request(url, "GET");

    setArticle(data);
    setLoading(false);
  }

  return (
    <div className='jumbo'>
      {
        loading
          ? "Loading..."
          : (
            <>
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
              <h1>{article.title}</h1>
              <span>{article.date}</span>
              <p>{article.content}</p>
            </>
          )
      }
    </div>
  )
}
