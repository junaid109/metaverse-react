import xw from 'xwind'
import ButtonReact from '../components/ButtonReact'
import ButtonStyled from '../components/ButtonStyled'
import Login from '../components/Login'

function Index() {

  const isAuthenticated = false;

  if(isAuthenticated) 
  {
    return <Login></Login>
  }
  <div className='h-screen' css={xw`grid justify-center items-center h-screen space-y-20`}>
    <div css={xw`space-y-20`}>
    <h1>Metaverse React</h1>
      <ButtonReact>@emotion/react</ButtonReact>
      <ButtonStyled>@emotion/styled</ButtonStyled>
    </div>
  </div>  
}

export default Index
