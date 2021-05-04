import { Helmet } from 'react-helmet'
import './style.css'

export default function Home(){
   return(
      <div>
         <Helmet>
            <title>Blanja - Home</title>
         </Helmet>
         <h1 className="displayRow inDevelopment">Home</h1>
      </div>
   )
}