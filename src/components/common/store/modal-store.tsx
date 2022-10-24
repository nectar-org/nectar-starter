import { proxy } from "valtio";

interface State {
  open: boolean;
  view?: "Contact" | "Confirmation" | "Login" | "SignUp";
}

const state = proxy<State>({
  open: false,
});

const ModalStore = {
  state,

  open(view: State["view"]) {
    state.view = view;
    state.open = true;
  },

  close() {
    state.open = false;
  },
};

export default ModalStore;
