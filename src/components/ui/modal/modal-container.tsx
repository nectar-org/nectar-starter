import { Modal } from "@geist-ui/core";
import { Fragment, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  subTitle?: string;
}

export default function ModalContainer({ children, title, subTitle }: Props) {
  return (
    <Fragment>
      <Modal.Title>{title}</Modal.Title>
      {subTitle ? <Modal.Subtitle>{title}</Modal.Subtitle> : null}
      <Modal.Content>{children}</Modal.Content>
    </Fragment>
  );
}
