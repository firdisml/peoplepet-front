import { Flex } from "@chakra-ui/react";
import { Fragment } from "react";

import Sidebar from "./sidebar";


function Layout(props) {
  return (
    <Fragment>
      <Flex h={[null, null, null, null, '100vh']} flexDir={["column", "column", "column", "column", "row"]} overflow="hidden" maxW="2000px">

        <Sidebar />

        <Flex w={['100%', '100%', '100%', '100%', '80%']} p="3%" flexDir="column" overflow="auto" minH={[null, null, null, "100vh", "100vh"]}>
          {props.children}
        </Flex>


      </Flex>
    </Fragment>
  );
}

export default Layout;
