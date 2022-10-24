import ModalStore from "@modal";
import { Modal as View } from "@geist-ui/core";
import { useSnapshot } from "valtio";
import { Confirmation, Contact, Login, SignUp } from "@components";

export default function Modal() {
  const { open, view } = useSnapshot(ModalStore.state);

  return (
    <View visible={open} onClose={() => ModalStore.close()}>
      {view === "Contact" && <Contact />}
      {view === "Confirmation" && <Confirmation />}
      {view === "Login" && <Login />}
      {view === "SignUp" && <SignUp />}
    </View>
  );
}
