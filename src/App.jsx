import { useState } from "react";
import "./App.css";
// components
import MainPage from "./components/pages/MainPage";

function App() {
  const [registerAccount, setRegisterAccount] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    school: "",
  });
  const [contactInformation, setContactInformation] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    topic: "",
    content: "",
  });

  const handleChange = (input) => (e) => {
    setRegisterAccount((prevRegisterAccount) => ({
      ...prevRegisterAccount,
      [input]: e.target.value,
    }));
  };

  const handleChangeContact = (input) => (e) => {
    setContactInformation((prevContactInformation) => ({
      ...prevContactInformation,
      [input]: e.target.value,
    }));
  };

  return (
    <div className="App">
      <MainPage
        registerAccount={registerAccount}
        contactInformation={contactInformation}
        handleChange={handleChange}
        handleChangeContact={handleChangeContact}
        onSubmit={() => {}}
        onSubmitContactUs={() => {}}
        clicked={() => {}}
        closeToast={() => {}}
      />
    </div>
  );
}

export default App;
