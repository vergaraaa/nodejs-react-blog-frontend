import React from 'react'

export const List = ({ articles, setArticles }) => {
    return (
        <div>
            {
                articles.map((article) => {
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
                })
            }
        </div>
    )
}
