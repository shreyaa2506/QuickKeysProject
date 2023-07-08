import AppWrapper from "./components/appWrapper";
import NavBar from "./components/navbar";
import Main from "./components/main";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Main />
      </main>
      
    </>
  );
};

const Wrapped = () => {
  return (
    <AppWrapper>
      <App />
    </AppWrapper>
  );
};

export default Wrapped;
