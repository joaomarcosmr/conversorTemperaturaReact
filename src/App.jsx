import './App.css'
import { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Components
import Home from './components/Home'
import Logo from './components/Logo'
import Navegacao from './components/Navegacao'
import Principal from './components/Principal'
import Rodape from './components/Rodape'
import Topo from './components/Topo'
import Design from './components/Design'
import Catalogo from './components/Catalogo'
import Frontend from './components/Frontend'
import NotFound from './components/NotFound'
import Programacao from './components/Programacao'
import Livro from './components/Livro'

// axios
import axios from 'axios'

class App extends Component {
  state = {
    livros: []
  }

  async componentDidMount(){
    try{
      const { data: livros } = await axios.get('../src/api/todosOsLivros.json')
      this.setState({ livros })
    } catch(er){
      console.log(er)
    }
  }

  render(){
    return (
      <Router>
          <Topo/>
          <Routes>
            <Route exact path='/' element={<Home livros={this.state.livros}/>} />
            <Route exact path='/frontend' element={<Frontend livros={this.state.livros}/>} />
            <Route exact path='/programacao' element={<Programacao livros={this.state.livros}/>} />
            <Route exact path='/design' element={<Design livros={this.state.livros}/>} />
            <Route exact path='/catalogo' element={<Catalogo livros={this.state.livros}/>} />
            <Route
              path="/livro/:slug"
              element={<Livro livros={this.state.livros} />}
            />
            <Route Component={<NotFound/>} />
          </Routes>
          <Rodape/>
      </Router>
    )
  }
}

export default App
