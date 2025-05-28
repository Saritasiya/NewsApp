import React from 'react'

function Newsapp() {
  return (
    <div>
          <nav>
              <div>
                  <h1>Trendy News</h1>
              </div>
              <ul>
                  <a> All News</a>
                  <a> Trending</a>
              </ul>
              <div>
                  <div className="searchBar">
                      <input type='text' placeholder='Search New' />
                      <button> Search</button>
                  </div>
              </div>
      </nav>
    </div>
  )
}

export default Newsapp
