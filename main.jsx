import 'bootstrap/dist/css/bootstrap.min.css'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DbmsContext from './Context/DbmsContext.jsx'
import Proj from './Context/Proj.jsx'
// import TaskMan from './Context/TaskMan.jsx'
// import CounterContext from './Context/CounterContext.jsx'
// import LoginContext from './Context/LoginContext.jsx'
// import Context from './components/first/Class/Sample/Context.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <CounterContext><App /></CounterContext>
  // <Context> <App /> </Context>
  // <LoginContext><App /></LoginContext>
  // <TaskMan><App /></TaskMan>
  // <App />
  // <Proj><App/></Proj>
  <DbmsContext><App/></DbmsContext>

  // {/* </StrictMode>, */}
)
