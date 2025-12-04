
import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import Maincontainer from './components/Maincontainer';
import WatchPage from './components/WatchPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchResultsPage from './components/SearchResultsPage';

const appRouter = createBrowserRouter([
{
  path:'/',
  element:<Body/>,
  children:[
    {
      path:'/',
      element:<Maincontainer/>
    },
    {
      path:'/watch',
      element:<WatchPage/>
    },
    {
      path:"/results",
     element:<SearchResultsPage />
    }
  ] }
]);
function App() {
  return (
    <Provider store={store}>
    <div>    
    
    <RouterProvider router={appRouter}/>
    
    </div>
    </Provider>

  )
}

export default App;
