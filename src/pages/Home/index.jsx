import { Helmet } from 'react-helmet'
import './style.css'
// ATOMS

export default function Home(){
   return(
      <div>
         <Helmet>
            <title>Blanja - Home</title>
         </Helmet>
         <div className="displayColumn inDevelopment">
            <h1>Home - In Development</h1>
         </div>
      </div>
   )
}