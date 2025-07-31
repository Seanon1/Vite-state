import Auth from "./components/Auth"
import Counter from "./components/Counter"
import EventManager from "./components/EventManager"
import FormHandler from "./components/FormHandler"
import Profile from "./components/Profile"
import TodoList from "./components/ToDoList"

function App() {

  return (
    <>
      <Counter />
      <Profile/> 
      <TodoList />
      <Auth />
      <EventManager />
      <FormHandler />
    </>
  )
}

export default App
