import React from 'react';
import Layout from "../src/components/Layout/Layout";
import BurgerBuilder from "./components/BurgerBuilder/BurgerBuilder";

function App() {

  return (
   <div>
     <Layout>
       <BurgerBuilder/>
     </Layout>
   </div>
  );
}

export default App;
