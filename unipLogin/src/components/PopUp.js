import styled from "./PopUp.module.css"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function PopUp({ info }) {

  const navigate = useNavigate()

  const [open, setOpen] = useState(true);

  useEffect(() => {
    info.id && setOpen(true)
  }, [info.id])

  const handleClose = () => {
    setOpen(false)
    info.success === true && navigate("/")
  };

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <p id="parent-modal-description" className={styled.p}>
            {info.message}
          </p>
        </Box>
      </Modal>
    </div>
  );
}