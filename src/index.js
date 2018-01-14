import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import Routes from './components/utility/Routes';
import MainNav from './components/common/MainNav';
import Footer from './components/common/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/style.scss';
import 'fontawesome';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
      error: ''
    };
    this.handleClick =  this.handleClick.bind(this);
  }
  // state = {
  //   condition: false
  // };


  handleClick() {
    this.setState({
      condition: !this.state.condition
      // error: console.log(err)
    });
  }

  render(){
    // console.log(this.state);
    return (
      <BrowserRouter>
        <main>
          {this.state && <MainNav
            handleClick={this.handleClick}
            condition= {this.state.condition}
          />}
          <Routes />
          <Footer />
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
