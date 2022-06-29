import {
    Flex,
    Heading,
    Text,
    Link,
    Icon
} from "@chakra-ui/react";
import { FiUsers, FiGitlab, FiBox, FiHome } from "react-icons/fi";
import { useRouter } from "next/router";


export default function Sidebar() {

    const router = useRouter();

    function NavigateHome() {
        router.push("/");
    }

    function NavigatePeople() {
        router.push("/people");
    }

    function NavigatePet() {
        router.push("/pet");
    }

    function NavigateDocs() {
        router.push("/docs");
    }



    return (
        <>
            {" "}
            <Flex
                w={["100%", "100%", "100%", "100%", "20%"]}
                flexDir="column"
                alignItems="center"
                backgroundColor="#252122"
                color="#fff"
            >
                <Flex
                    flexDir="column"
                    justifyContent="space-between"
                    h={[null, null, null, null, "100vh"]}
                >
                    <Flex flexDir="column" as="nav">

                        <Heading
                            mt={50}
                            mb={[100, 100, 100, 100, 10, 100]}
                            ml={[4, 4, 4, 4, 0]}
                            fontSize="4xl"
                            alignSelf="center"
                            letterSpacing="tight"
                        >
                            Pet & People

                        </Heading>


                        <Flex
                            flexDir={["row", "row", "row", "row", "column"]}
                            mt={[-20, -20, -20, -20, 0]}
                            align={["center", "center", "center", "center", "flex-start"]}
                            wrap={["wrap", "wrap", "wrap", "wrap", "wrap"]}
                            justifyContent="content"
                        >

                            {/* Home */}

                            <Flex className="sidebar-items" ml={[4, 4, 4, 4, 0]}>
                                <Link
                                    onClick={NavigateHome}
                                    display={["flex", "flex", "flex", "flex", "flex"]}
                                >
                                    <Icon
                                        as={FiHome}
                                        className={router.pathname == "/" ? "active-icon" : ""}
                                        fontSize={["3xl", "3xl", "3xl", "3xl", "2xl", "3xl"]}
                                    ></Icon>
                                </Link>
                                <Link
                                    _hover={{ textDecor: "none" }}
                                    onClick={NavigateHome}
                                    display={["none", "none", "none", "none", "flex"]}
                                >
                                    <Text
                                        className={router.pathname == "/" ? "active" : ""}
                                        fontSize={["3xl", "3xl", "3xl", "3xl", "lg", "xl"]}
                                        ml={10}
                                    >
                                        Home
                                    </Text>
                                </Link>
                            </Flex>

                            {/* People */}

                            <Flex className="sidebar-items" pl={[7, 7, 7, 7, 0]}
                                mt={[0, 0, 0, 0, 0, 5]}>
                                <Link
                                    onClick={NavigatePeople}
                                    display={["flex", "flex", "flex", "flex", "flex"]}
                                >
                                    <Icon
                                        as={FiUsers}
                                        className={router.pathname == "/people" ? "active-icon" : ""}
                                        fontSize={["3xl", "3xl", "3xl", "3xl", "2xl", "3xl"]}
                                    ></Icon>
                                </Link>
                                <Link
                                    _hover={{ textDecor: "none" }}
                                    onClick={NavigatePeople}
                                    display={["none", "none", "none", "none", "flex"]}
                                >
                                    <Text
                                        className={router.pathname == "/people" ? "active" : ""}
                                        fontSize={["3xl", "3xl", "3xl", "3xl", "lg", "xl"]}
                                        ml={10}
                                    >
                                        People
                                    </Text>
                                </Link>
                            </Flex>


                            {/* Pet*/}

                            <Flex className="sidebar-items" pl={[7, 7, 7, 7, 0]}
                                mt={[0, 0, 0, 0, 0, 5]}>
                                <Link
                                    onClick={NavigatePet}
                                    display={["flex", "flex", "flex", "flex", "flex"]}
                                >
                                    <Icon
                                        as={FiGitlab}
                                        className={router.pathname == "/pet" ? "active-icon" : ""}
                                        fontSize={["3xl", "3xl", "3xl", "3xl", "2xl", "3xl"]}
                                    ></Icon>
                                </Link>
                                <Link
                                    _hover={{ textDecor: "none" }}
                                    onClick={NavigatePet}
                                    display={["none", "none", "none", "none", "flex"]}
                                >
                                    <Text
                                        className={router.pathname == "/pet" ? "active" : ""}
                                        fontSize={["3xl", "3xl", "3xl", "3xl", "lg", "xl"]}
                                        ml={10}
                                    >
                                        Pet
                                    </Text>
                                </Link>
                            </Flex>

                            {/* API */}

                            <Flex className="sidebar-items" pl={[7, 7, 7, 7, 0]}
                                mt={[0, 0, 0, 0, 0, 5]}>
                                <Link
                                    onClick={NavigateDocs}
                                    display={["flex", "flex", "flex", "flex", "flex"]}
                                >
                                    <Icon
                                        as={FiBox}
                                        className={router.pathname == "/docs" ? "active-icon" : ""}
                                        fontSize={["3xl", "3xl", "3xl", "3xl", "2xl", "3xl"]}
                                    ></Icon>
                                </Link>
                                <Link
                                    _hover={{ textDecor: "none" }}
                                    onClick={NavigateDocs}
                                    display={["none", "none", "none", "none", "flex"]}
                                >
                                    <Text
                                        className={router.pathname == "/docs" ? "active" : ""}
                                        fontSize={["3xl", "3xl", "3xl", "3xl", "lg", "xl"]}
                                        ml={10}
                                    >
                                        Docs
                                    </Text>
                                </Link>
                            </Flex>





                        </Flex>
                    </Flex>
                </Flex>

                <Flex flexDir="row" alignItems="center" mb={10} mt={10}>



                </Flex>
            </Flex>
        </>
    );
}
