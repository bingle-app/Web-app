import { Button } from "@mui/material";
import { CustomButton } from "./components/login/atoms/CustomButton";
import { styled } from '@mui/material/styles';


function App() {
  return (
    <>
      <Button>Binglee</Button>
      <WideButton>
        Bingle
      </WideButton>
      <CustomButton>
        Bingle
      </CustomButton>
    </>
  );
}

export default App;

const WideButton = styled(CustomButton)({
  width: '250px', // Set the desired width
  margin: '10px'
});
