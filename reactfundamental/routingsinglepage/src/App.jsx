import React from 'react';
import { HomePage, AboutPage, ContactPage, Link } from './Page.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      halaman: '/', // Set the initial page to '/about'
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(target) {
    this.setState(() => {
      return {
        halaman: target,
      };
    });
  }

  render() {
    return (
      <>
      <header>
          <nav>
            <ul>
              <li>
                <Link target="/" navigate={this.navigate}>
                  Home
                </Link>
              </li>
              <li>
                <Link target="/about" navigate={this.navigate}>
                  About
                </Link>
              </li>
              <li>
                <Link target="/contact" navigate={this.navigate}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {this.state.halaman === '/' && <HomePage />}
          {this.state.halaman === '/about' && <AboutPage />}
          {this.state.halaman === '/contact' && <ContactPage />}
        </main>
      </>
    );
  }

}

export default App;