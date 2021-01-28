import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import 'upkit/dist/style.min.css'
import { Provider } from 'react-redux'

import Home from './pages/Home'
import store from './app/store'

// import fungsi listen
import { listen } from './app/listener'

function App() {

  // panggil fungsi listen() sekali saja saat komponen selesai render pertama kali
  React.useEffect(() => {
    listen()
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;