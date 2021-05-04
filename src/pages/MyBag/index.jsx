import { Helmet } from 'react-helmet'
import './style.css'

export default function MyBag(){
   return(
      <div>
         <Helmet>
            <title>Blanja - My Bag</title>
         </Helmet>
         <h1 className="displayRow inDevelopment">My Bag</h1>
      </div>
   )
}