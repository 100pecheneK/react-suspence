import React, {Suspense} from 'react'
import {useResource} from './resource'
import Posts from './Posts'
import Users from './Users'

const resource = useResource()

const App = () => {

  return (
    <div className="container">
      <h1>Suspense for Data Fetching</h1>

      <Suspense fallback={<p>Loading Posts...</p>}>
        <Posts resource={resource}/>
      </Suspense>
      <Suspense fallback={<p>Loading Users...</p>}>
        <Users resource={resource}/>
      </Suspense>
<hr/>
      <Suspense fallback={<p>Loading Users and Posts...</p>}>
        <Posts resource={resource}/>
        <Users resource={resource}/>
      </Suspense>
    </div>
  )
}

export default App
