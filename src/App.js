// import "./App.css";
import { Home } from "./Pages/Home";
import { Addition } from "./Pages/Addition";
import { Navigation } from "./Pages/Navbar";
import { Registor } from "./Pages/Form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect, useContext, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import { Provider } from "react-redux";
import { store } from "./store";

// App component is the first component that is displayed
//when the application is loaded
export const Appcontext = createContext();
function App() {
  const [userName, setName] = useState("Raju");
  const client = new QueryClient();

  return (
    <div className="name">
      <QueryClientProvider client={client}>
        <Appcontext.Provider value={{ userName, setName }}>
          <Provider store={store}>
          <Router>
            <Navigation />

            <Routes>
              <Route path="/registor" element={<Registor/>}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/addition" element={<Addition />} />
              <Route path="*" element={<h1>Page Not Found</h1>}></Route>
            </Routes>
          </Router>
          </Provider>
        </Appcontext.Provider>
      </QueryClientProvider>
    </div>
  );
}

// const User = (props) => {
//   const isGreen=true;
//   return (
//     <div>
//       <h1 style={{color: isGreen? "green": "red"}}>{props.name}</h1>
//       <h2>{props.age}</h2>
//     </div>
//   );
// };
export default App;
