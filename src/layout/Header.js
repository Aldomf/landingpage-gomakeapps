import React from 'react'

function Header() {
  return (
    <header>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  <h1>Logo</h1>
  <form>
    <input type="text" placeholder="Search..."/>
    <button type="submit">Search</button>
  </form>
</header>

  )
}

export default Header