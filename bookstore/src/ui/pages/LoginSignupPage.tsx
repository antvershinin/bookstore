import LoginSignupLayout from '../containers/forms/LoginSignupLayout';

type Props = {};

const LoginPage: React.FC = props => {
  return (
    <>
      <LoginSignupLayout hasAccount={true} />
    </>
  );
};

export default LoginPage;
