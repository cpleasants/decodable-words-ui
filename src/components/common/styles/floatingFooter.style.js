import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const FloatingFooter = styled(Box)(({
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    background: "white",
    gap: "0.5rem"
}))

export default FloatingFooter