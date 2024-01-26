import { Dispatch, SetStateAction, useState } from 'react'
import { Link, Outlet, useNavigate, useOutletContext } from 'react-router-dom'
import Alert from '../Alert/Alert'

type ContextType = {
  jwtToken: string
  setJwtToken: Dispatch<SetStateAction<string>>
  setAlertMessage: Dispatch<SetStateAction<string>>
  setAlertClassName: Dispatch<SetStateAction<string>>
}

export const useJwtToken = () => useOutletContext<ContextType>()

const Layout: React.FC = () => {
  const [jwtToken, setJwtToken] = useState('')
  const [alertMessage, setAlertMessage] = useState('')
  const [alertClassName, setAlertClassName] = useState('d-none')

  const navigate = useNavigate()

  const handleLogout = () => {
    setJwtToken('')
    navigate("/login")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Go watch a movie</h1>
        </div>
        <div className="col text-end">
          {jwtToken === '' ? (
            <Link to="/login">
              <span className="badge bg-success">Login</span>
            </Link>
          ) : (
            <a href="#!" onClick={handleLogout}>
              <span className="badge bg-danger">Logout</span>
            </a>
          )}
        </div>
        <hr className="mb-3"></hr>
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">
                Home
              </Link>
              <Link
                to="/movies"
                className="list-group-item list-group-item-action"
              >
                Movies
              </Link>
              <Link
                to="/genres"
                className="list-group-item list-group-item-action"
              >
                Genres
              </Link>
              {jwtToken !== '' && (
                <>
                  <Link
                    to="/admin/movie/0"
                    className="list-group-item list-group-item-action"
                  >
                    Add movie
                  </Link>
                  <Link
                    to="/manage-catalogue"
                    className="list-group-item list-group-item-action"
                  >
                    Manage catalog
                  </Link>
                  <Link
                    to="/graphql"
                    className="list-group-item list-group-item-action"
                  >
                    Graphql
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Alert message={alertMessage} className={alertClassName} />
          <Outlet
            context={
              {
                jwtToken,
                setJwtToken,
                setAlertMessage,
                setAlertClassName,
              } satisfies ContextType
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Layout
