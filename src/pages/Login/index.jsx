import { Helmet } from 'react-helmet'
import './style.css'

export default function Login(){
   return(
      <div>
         <Helmet>
            <title>Blanja - Login</title>
         </Helmet>
         <h1 className="displayRow inDevelopment">Login</h1>
      </div>
   )
}