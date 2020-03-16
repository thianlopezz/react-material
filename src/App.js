import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Container } from '@material-ui/core';
import MediaPlayer from './components/MediaPlayer';

function App() {
  return (
    <div>
      <Container maxWidth="lg">
        <h1 style={{ textAlign: 'center', color: '#3FA9E0' }}>React Material-ui starter</h1>
        <div style={{ display: 'flex', height: '80vh' }}>
          <Box style={{ margin: 'auto' }} color="text.primary">
            <MediaPlayer
              onPlay={() => window.open('https://www.youtube.com/watch?v=9nZ6w9JvQl0', '_blank')}
            />
          </Box>
        </div>
      </Container>
    </div>
  );
}

export default App;
