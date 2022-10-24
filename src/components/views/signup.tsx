import { Modal, Spacer, Text, useModal } from "@geist-ui/core";
import { Section } from "@primitives";
import { Fragment } from "react";
import ModalStore from "@modal";
import ModalContainer from "../ui/modal/modal-container";

const SignUp: React.FC = () => {
  const { visible, setVisible } = useModal();
  const handleClose = () => {
    ModalStore.close();
    setVisible(false);
  };
  return (
    <Fragment>
      <ModalContainer title={"SignUp"}>
        <Section css={{ textAlign: "center" }}>
          <Text p>Insert Get Started form here</Text>
        </Section>
      </ModalContainer>
      <Modal.Action onClick={handleClose}>Cancel</Modal.Action>
      <Modal.Action>Submit</Modal.Action>
    </Fragment>
  );
};

export default SignUp;
