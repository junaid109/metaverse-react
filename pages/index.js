import ButtonReact from '../components/ButtonReact'
import ButtonStyled from '../components/ButtonStyled'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
import '../styles/globals.css'

function Index() {

  const {isAuthenticated, logout} = useMoralis();

  if(!isAuthenticated) return <Login />;

  return
  {
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
  <Head className='h-screen' css={xw`grid justify-center items-center h-screen space-y-20`}>
    <div css={xw`space-y-20`} >
    <h1>Metaverse React</h1>
      <ButtonReact>@emotion/react</ButtonReact>
      <ButtonStyled>@emotion/styled</ButtonStyled>
    </div>
  </Head>  

  <div className="h-screen overflow-y-scroll">
    <div className="max-w-screen-2xl">
    <Header></Header>

    </div>
  </div>
  <ButtonStyled onClick={logout}></ButtonStyled>
  </div>

  }
}

export default Index
