import './App.css';
import './index.css'
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  // palette:{
  //   primary: {
  //      main:'#fefe'
  //   },
  // },

  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <TodoList/>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
