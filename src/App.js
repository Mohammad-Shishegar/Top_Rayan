import React, { useContext } from "react"
import SideBar from "./components/sidebar/Sidebar"
import "./App.scss"
import { Switch, Route, Redirect } from "react-router-dom"
import Map from "./pages/map/Map"
import Sensors from "./pages/sensors/Sensors"
import Charts from "./pages/charts/Charts"
import Message from "./components/message/Message"
import Profile from "./pages/profile/Profile"
import { ThemeContext } from "./services/context/DarkTheme"

const App = () => {

  const Theme = useContext(ThemeContext)

  return (
    <Switch>
      <div className={Theme.dark === true ? "app app-dark" : "app"}>
        <div className="app_body">
          <Route path={'/map'} component={Map} />
          <Route path={'/sensors'} component={Sensors} />
          <Route path={'/profile'} component={Profile} />
          <Route path={'/charts'} exact component={Charts} />
          <Redirect from={"/"} to = {"/charts"}/>
        </div>
      <Message dark = {Theme.dark}/>
        <div className="app_sidebar">
          <SideBar />
        </div>
      </div>
    </Switch>

  )
}

export default App