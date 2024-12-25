import AuthContext from './AuthContext';

export const useAuth = () => {
  return React.useContext(AuthContext);
};