import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  color: "#60f4d4",
  loading: false,
  error: null,
};

export const GeneralContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "Change-color":
      return {
        color: action.payload,
      };
    default:
      return state;
  }
};

export const GeneralContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    // axiosGetRequset
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        color: state.color,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
