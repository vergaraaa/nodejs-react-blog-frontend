import React from 'react'

export const Sidebar = () => {
  return (
      <aside className="aside">
            <div className="search">
                <h3 className="title">Searcher</h3>
                <form>
                    <input type="text" />
                    <button>Search</button>
                </form>
            </div>

            {/* <div className="add">
                <h3 className="title">Add movies</h3>
                <form>
                    <input type="text" placeholder="Title" />
                    <textarea placeholder="Description"></textarea>
                    <input type="submit" value="Save" />
                </form>
            </div> */}
        </aside>

  )
}
