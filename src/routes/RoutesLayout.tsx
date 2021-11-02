import React from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'

interface PropsAttrs extends RouteProps{
  component: React.ComponentType<any>
  path: string
  authRequired? :boolean
}

const RoutesLayout = (props: PropsAttrs) => {
  const { path, component: Component, authRequired, ...restProps }: PropsAttrs = props
  
  const token: string | null = localStorage.getItem('token')

  if (authRequired) {
    if (!token) {
      return <Redirect to ="/"/>
    }
  }

  return (<div>
    <Route {...restProps} path={path} render={innerProps => <Component {...innerProps}/>}/>
  </div>)
}

export default RoutesLayout