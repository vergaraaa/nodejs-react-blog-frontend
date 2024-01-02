import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {

    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();

        let query = e.target.search.value;


        navigate("search/" + query);
    }

    return (
        <aside className="aside">
            <div className="search">
                <h3 className="title">Searcher</h3>
                <form onSubmit={search}>
                    <input type="text" name='search' />
                    <input type="submit" value="Search" />
                </form>
            </div>
        </aside>

    )
}
