import React from 'react'

const Commits = () => {
  return (
    <form>
      <h3>Username :</h3> <input type="text" />
      <h3>Title :</h3> <input type="text" />
      <h3>Description :</h3> <input type="text" />
      <h3>Commit :</h3> <textarea></textarea>
      <h3>Link :</h3> <textarea></textarea>
      <button type="submit">Push Commit</button>
    </form>
  )
}

export default Commits