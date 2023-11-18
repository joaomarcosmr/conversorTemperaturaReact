import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <main className='principal'>
        <h2>404!</h2>
        <div className="card">
            <p>Página não encontrada ou removida. <Link to='/'>Ir para Home Page</Link></p>
        </div>
    </main>
  )
}

export default NotFound