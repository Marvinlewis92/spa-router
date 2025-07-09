import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Users from './components/Users';
import UserTodos from './components/UserTodos';
import NavBar from './components/NavBar';
/***** Added code starts here *******/
import NotFound from './components/NotFound';
/***** Added code stops here *******/


function App() {
  return (
    <>
			<NavBar />
			<Routes>
        <Route path="/" element={<HomePage />} />				
				<Route path="/users" element={<Users />} />
				<Route path="/user-todos/:userId" element={<UserTodos />} />
				{/******* Added code starts here *******/}
				<Route path="*" element={<NotFound />} />
				{/******* Added code stops here *******/}
			</Routes>
    </>
  );
}

export default App;