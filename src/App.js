import React from 'react';
import './App.css';
import SearchScreen from './components/Screens/SearchScreen';
import Navigation from './components/Navigation';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Routers from './components/Routers';
import { Link } from 'react-router-dom';
import FooterContent from './components/FooterContent';

/**
 * @description - Layout for the navigation (for both mobile and webpage)
 * Links are the "buttons" on the page, "Drawer" is the hamburger navigation.
 * Content is where you call your other components for the application
 */


function App() {
  return (

    <div className="demo-big-content">
      <Layout>
          <Header title="Beast Kitchen!" scroll>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/search">Search</Link>
                  <Link to="/login">Login</Link>
              </Navigation>
          </Header>
          <Drawer title="Beast Kitchen!">
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/search">Search</Link>
                  <Link to="/login">Login</Link>
              </Navigation>
          </Drawer>
        
        {/* All the content is placed here */}
          <Content>
                <div className="page-content" />
                <Routers />
                <FooterContent />
          </Content>
      </Layout>
  </div>

  );
}

export default App;
