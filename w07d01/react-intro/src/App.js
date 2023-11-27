import Header from './components/Header';

const App = () => {

  const myBool = false;

  const myPredefinedFunc = () => {};

  return (
    <div>
      <h2>App Component</h2>

      <Header message="does this work?" colour="yellow">
        <div>
          <img />
        </div>
      </Header>


      {/* <Button label="login" />
      <Button>Register</Button> */}
    </div>
  );
};

export default App;
