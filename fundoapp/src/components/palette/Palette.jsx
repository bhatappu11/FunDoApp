import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import CircleIcon from '@mui/icons-material/Circle';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';

import IconButton from '@mui/material/IconButton';

export default function Palette() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box >
      <Popper open={open} anchorEl={anchorEl}  placement={placement} transition
      style={{zIndex: 2000}}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{width: '100%',zIndex: 1500 }}>
              <Box display="grid" gridTemplateColumns="repeat(4,1fr)">
                  <IconButton><CircleIcon fontSize="large" sx={{color:"#f3f3f3"}} /></IconButton>
                  <IconButton><CircleIcon fontSize="large"sx={{color:"#f28b82"}} /></IconButton>
                  <IconButton><CircleIcon fontSize="large"sx={{color:"#fbbc04"}} /></IconButton>
                  <IconButton><CircleIcon fontSize="large"sx={{color:"#fff475"}} /></IconButton>
                  <IconButton><CircleIcon fontSize="large"sx={{color:"#ccff90"}} /></IconButton>
                  <IconButton><CircleIcon fontSize="large"sx={{color:"#a7ffeb"}} /></IconButton>
                  <IconButton><CircleIcon fontSize="large"sx={{color:"#cbf0f8"}} /></IconButton>
                  <IconButton><CircleIcon fontSize="large"sx={{color:"#aecbfa"}} /></IconButton>
                  <IconButton><CircleIcon fontSize="large"sx={{color:"#d7aefb"}} /></IconButton>
                  <IconButton><CircleIcon fontSize="large"sx={{color:"#fdcfe8"}} /></IconButton>
                  <IconButton><CircleIcon fontSize="large"sx={{color:"#e6c9a8"}} /></IconButton>
                  <IconButton><CircleIcon fontSize="large"sx={{color:"#e8eaed"}} /></IconButton>
                </Box>
            </Paper>
          </Fade>
        )}
      </Popper>
          <IconButton onClick={handleClick('top-start')}><PaletteOutlinedIcon /></IconButton>
    </Box>
  );
}
