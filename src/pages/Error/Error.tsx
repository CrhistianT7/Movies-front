import { useRouteError } from 'react-router-dom'

const Error: React.FC = () => {
  const error = useRouteError()

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="mt-3"> Opps! </h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <em>
              {(error as { statusText?: string })?.statusText ||
                (error as Error)?.message}
            </em>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Error
