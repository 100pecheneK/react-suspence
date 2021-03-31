import React from 'react'

const Users = ({resource}) => {
  const users = resource.users.read()

  return (
    <>
      <h3>Users</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Users
