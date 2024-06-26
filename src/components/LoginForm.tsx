import { useState, FormEvent } from "react";
import { typesOfAlert } from "./Alert";

interface LoginFormProps {
  onSignIn: (email: string, password: string) => void;
  onAlert: (alertType: typesOfAlert, alertContent: string) => void;
}

const LoginForm = ({ onSignIn, onAlert }: LoginFormProps) => {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  // Handle input change
  const handleEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmailInputValue(event.target.value);
  };
  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordInputValue(event.target.value);
  };

  // Handle button click
  const handleLoginButton = (event: FormEvent) => {
    event.preventDefault();
    if (emailInputValue.trim() && passwordInputValue.trim()) {
      console.log(`Email: ${emailInputValue}`);
      console.log(`Password: ${passwordInputValue}`);

      onSignIn(emailInputValue, passwordInputValue);

      setPasswordInputValue("");
    } else {
      onAlert(typesOfAlert.danger, "Email or Password cannot be empty");
    }
  };

  return (
    <>
      <form onSubmit={handleLoginButton}>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Your Email address"
              value={emailInputValue}
              onChange={handleEmailInputChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              placeholder="Your password"
              value={passwordInputValue}
              onChange={handlePasswordInputChange}
            />
          </div>
        </div>
        <div className="container text-center">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
