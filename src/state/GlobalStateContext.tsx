import { createContext } from "react";
import { Action, InitialStateTypes } from "../types/Types";

export const InitialState: InitialStateTypes = {
  favouriteBooks: [],
  readBooks: [],
  favouriteAuthors: [],
  bookToReview: null,
};

export const GlobalContext = createContext<{
  state: InitialStateTypes;
  dispatch: React.Dispatch<Action>;
}>({
  state: InitialState,
  dispatch: () => null,
});
