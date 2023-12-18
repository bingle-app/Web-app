import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

// Define your custom styled button
const StyledButton = styled(Button)({
  // Apply your custom styles here
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  '&:hover': {
    background: 'linear-gradient(45deg, #FE6B8B 90%, #FF8E53 30%)',
  },
});

// The CustomButton component accepts the same props as the MUI Button
export const CustomButton = (props :any) => {
  return <StyledButton {...props} />;
};
