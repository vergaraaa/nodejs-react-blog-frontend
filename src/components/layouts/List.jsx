import React from 'react'

import { Global } from '../../helpers/Global'
import { Request } from '../../helpers/Request'
import { Link } from 'react-router-dom'

export const List = ({ articles, setArticles }) => {

    const onDelete = async (id) => {
        let { data } = await Request(Global.url + "/articles/one/" + id, "DELETE");

        if (data.status === "success") {
            let newArticles = articles.filter((article) => article._id !== id);

            setArticles(newArticles);
        }
    }

    return (
        <div>
            {
                articles.map((article) => {
                    return (
                        <article key={article._id} className='article-item'>
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

                            <div className="data">
                                <Link to={"/article/" + article._id}>
                                    <h3 className="title">{article.title}</h3>
                                </Link>
                                <p className="description">{article.content}</p>

                                <button className="edit">Edit</button>
                                <button className="delete" onClick={() => onDelete(article._id)}>Delete</button>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}
