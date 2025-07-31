import Auth from "./components/Auth"
import Counter from "./components/Counter"
import EventManager from "./components/EventManager"
import FormHandler from "./components/FormHandler"
import Images from "./components/images"
import Profile from "./components/Profile"
import TodoList from "./components/ToDoList"
import Effects from "./components/Effects"

function App() {

  return (
    <>
      <Counter />
      <Profile/> 
      <TodoList />
      <Auth />
      <EventManager />
      <FormHandler />
      <Images />
      <Effects />
    </>
  )
}

export default App
