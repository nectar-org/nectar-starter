import  Menu  from "./menu";
import { Page } from "@geist-ui/core";

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <Page
      padding={0}
      dotBackdrop={true}
      dotSize="3rem"
      dotSpace={2}
      width="100%"
    >
      <Page.Header width="100%">
        <Menu />
      </Page.Header>
      <Page.Content>{children}</Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

export default DefaultLayout;
