import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {CoinDetails, Navbar,Favcoin, Home,Trending, Tutorial,Footer, Transactions,News,Crytotracker,Crypto } from "./comp";

const router = createBrowserRouter([
  {

   
    
    path: "/",
    element: <Crytotracker />,
    children:[
      {
        path:"/",
        element: < Crypto/>,
        children:[
          {
            path:":coinId",
            element: < CoinDetails/>
          }, ]
      }, 
      {
        path:"/Trending",
        element: < Trending/>,
        children:[
          {
            path:":coinId",
            element: < CoinDetails/>
          }, ]
      },
      {
        path:"/Favcoin",
        element: < Favcoin/>,
        children:[
          {
            path:":coinId",
            element: < CoinDetails/>
          }, ]
        
      },
     
    ]


  },
]);



const App = () => {
  return (
    
      <div className="min-h-screen">
        <div className="background-image">
          <Navbar id="/Home"/>
          <Home/>
          
          <RouterProvider router={router}/>
          <Transactions/>
          <News/>
          <Tutorial/>
          <Footer/>
        </div>
      </div>
   
  )
}
export default App;
