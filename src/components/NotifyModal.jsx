import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 7,
};

export default function NotifyModal({open,handleClose,handleOpen}) {
 

  return (
    <div>
      <Button sx={{backgroundColor:'purple',color:'white',fontWeight:'700'}} onClick={handleOpen}>See Hints to Use</Button>
      <Modal
        open={open}
        onClose={handleClose}
      
      >
        <Box sx={style}>
            <Typography marginBottom="1rem" color="purple" variant='h4' fontWeight="800">Welcome</Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            To check multiple filters -
            <Typography lineHeight="2">Use <b>Nebraska</b> as Location <br/> and <b>Sept 2022</b> as Move In Date</Typography>
            <br/>
            <Typography>As <b>Nebraska</b>  has</Typography>
            <ul>
                <li>Mulitple Houses</li>
                <li>Mulitple Apartments</li>
                <li>Mulitple Prices</li>
            </ul>
          </Typography>
          
          <Typography  sx={{ mt: 2 }}>
            To check source code  <a className='modal-link' href="https://github.com/biasedzeus/realestatery-mui" target="_blank">Source Code</a>
          </Typography>
          <br/>
          <Typography
          component="a"
          sx={{ mt: 2 }}>
            <a className='modal-link' href="https://bhanusingh.website" target="_blank">Check Portfolio & Resume  </a>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
