import { Helmet } from 'react-helmet'
import './style.css'

export default function ResetPassword(){
   return(
      <div>
         <Helmet>
            <title>Blanja - Reset Password</title>
         </Helmet>
         <h1 className="displayRow inDevelopment">Reset Password</h1>
      </div>
   )
}