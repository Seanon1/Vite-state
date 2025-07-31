import Auth from "./components/Auth"
import Counter from "./components/Counter"
import Profile from "./components/Profile"
import TodoList from "./components/ToDoList"

function App() {

  return (
    <>
      <Counter />
      <Profile/> 
      <TodoList />
      <Auth />
    </>
  )
}

export default App
