//DEPENDENCY
import {
    Box,
    Flex,
    chakra,
    Button,
    Modal,
    FormControl,
    FormLabel,
    FormHelperText,
    HStack,
    Text,
    Input,
    ModalCloseButton,
    ModalOverlay,
    Select,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    GridItem,
    useToast
} from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react'
import axios from "axios";
import { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";

//PEOPLE PAGE
export function PeopleItem(props) {

    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [mainArray, setMainArray] = useState(props.friend);
    const [arrayDelete, setarrayDelete] = useState("");
    const [arrayAdd, setarrayAdd] = useState("");

    //DELETE
    async function deletePeople() {

        axios.delete(`https://peoplepet-api.herokuapp.com/people/delete=${props.id}`, { "data": { ".id": props.id } },
        ).then((response) => {
            console.log(response)

            return toast({
                title: "Deleted!",
                description: "People's record deleted!",
                status: "error",
                duration: 9000,
                variant: "left-accent",
                isClosable: true,
            });


        }).catch((error) => {
            console.log(error)
        })

    }

    //FETCH API
    function fetchAPI() {

        window.open(`https://peoplepet-api.herokuapp.com/people/search=${props.id}`)

    }

    //REMOVE ARRAY ITEM
    function removeItem(arr, item) {
        return arr.filter(f => f._id !== item)
    }

    //REMOVE FRIEND
    function removeFriend() {

        const afterArray = removeItem(mainArray, arrayDelete);

        axios.patch(`https://peoplepet-api.herokuapp.com/people/update=${props.id}`, { "edited_field": "friend", "friend": afterArray },
        ).then((response) => {
            console.log(response)

            return toast({
                title: "Removed!",
                description: "Friend removed!",
                status: "error",
                duration: 9000,
                variant: "left-accent",
                isClosable: true,
            });

        }).catch((error) => {
            console.log(error)
        })

    }

    //ADD FRIEND
    function addFriend() {

        const afterArray = mainArray

        afterArray.push(arrayAdd)

        axios.patch(`https://peoplepet-api.herokuapp.com/people/update=${props.id}`, { "edited_field": "friend", "friend": afterArray },
        ).then((response) => {

            console.log(response)

            return toast({
                title: "Added!",
                description: "Friend Added!",
                status: "success",
                duration: 9000,
                variant: "left-accent",
                isClosable: true,
            });

        }).catch((error) => {
            console.log(error)
        })

    }

    //JSX
    return (
        <>
            <GridItem w="100%" h="auto">
                <Box>
                    <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        w='100%'
                        mx="auto"
                    >
                        <Box
                            bg="gray.300"
                            h={64}
                            w="full"
                            rounded="lg"
                            shadow="md"
                            bgSize="cover"
                            bgPos="center"
                            style={{
                                backgroundImage:
                                    "url(https://cdn.discordapp.com/attachments/947785554706198568/991795548371820635/standing-up-man-.png)",
                            }}
                        ></Box>

                        <Box
                            w={{ base: 56, md: 64 }}
                            bg="white"
                            _dark={{ bg: "gray.800" }}
                            mt={-10}
                            shadow="lg"
                            rounded="lg"
                            overflow="hidden"
                        >
                            <chakra.h3
                                py={2}
                                textAlign="center"
                                fontWeight="bold"
                                textTransform="uppercase"
                                color="gray.800"
                                _dark={{ color: "white" }}
                                letterSpacing={1}
                            >
                                {props.name}
                            </chakra.h3>

                            <Flex
                                alignItems="center"
                                justifyContent="space-between"
                                py={2}
                                px={3}
                                bg="gray.200"
                                _dark={{ bg: "gray.700" }}
                            >
                                <chakra.span
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    color="gray.800"
                                    _dark={{ color: "gray.200" }}
                                >
                                    {props.friend.length} Friends
                                </chakra.span>
                                <chakra.button
                                    bg="gray.800"
                                    fontSize="xs"
                                    fontWeight="bold"
                                    color="white"
                                    onClick={onOpen}
                                    px={5}
                                    py={2}
                                    rounded="lg"
                                    textTransform="uppercase"
                                    _hover={{
                                        bg: "gray.700",
                                        _dark: { bg: "gray.600" },
                                    }}
                                    _focus={{
                                        bg: "gray.700",
                                        _dark: { bg: "gray.600" },
                                        outline: "none",
                                    }}
                                >
                                    More
                                </chakra.button>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>

            </GridItem>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>People Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl mt={4} isRequired>
                            <FormLabel>Name</FormLabel>
                            <FormHelperText mb={2}><HStack><FiAlertCircle /><Text>This value cannot be change </Text></HStack></FormHelperText>
                            <Input name="cost" value={props.name} isDisabled />
                        </FormControl>
                        <FormControl mt={4} isRequired>
                            <FormLabel>Unique</FormLabel>
                            <FormHelperText mb={2}><HStack><FiAlertCircle /><Text>This value cannot be change </Text></HStack></FormHelperText>
                            <Input name="cost" value={props.id} isDisabled />
                        </FormControl>
                        <FormControl mt={4} isRequired>
                            <FormLabel>Friends Count</FormLabel>
                            <FormHelperText mb={2}><HStack><FiAlertCircle /><Text>This value cannot be change </Text></HStack></FormHelperText>
                            <Input name="cost" value={mainArray.length} isDisabled />
                        </FormControl>
                    </ModalBody>

                    <ModalBody>
                        <FormControl isRequired>
                            <FormLabel>Remove Friend</FormLabel>
                            <FormHelperText mb={2}><HStack><FiAlertCircle /><Text>Remove friend from your friendlist</Text></HStack></FormHelperText>
                        </FormControl>
                        <Select placeholder="Remove Friend"
                            onChange={(e) => {
                                const deleteFriend = e.target.value;
                                setarrayDelete(deleteFriend);
                            }}>
                            {mainArray.map((friends) => (
                                <option key={friends} value={friends._id}>
                                    {friends.name}
                                </option>
                            ))}
                        </Select>
                        <Button mt={4} variant='outline' onClick={removeFriend} colorScheme={'red'}>Remove</Button>
                    </ModalBody>

                    <ModalBody>
                        <FormControl isRequired>
                            <FormLabel>Add Friend</FormLabel>
                            <FormHelperText mb={2}><HStack><FiAlertCircle /><Text>Add friend from your friendlist</Text></HStack></FormHelperText>
                        </FormControl>
                        <Select placeholder="Add Friend"
                            onChange={(e) => {
                                const addFriend = e.target.value;
                                setarrayAdd(addFriend);
                            }}>
                            {props.people.map((friendsadd) => (
                                <option key={friendsadd} value={friendsadd._id}>
                                    {friendsadd.name}
                                </option>
                            ))}
                        </Select>
                        <Button mt={4} variant='outline' onClick={addFriend} colorScheme={'green'}>Add</Button>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='outline' mr={5} onClick={fetchAPI} colorScheme={'yellow'}>Fetch API</Button>
                        <Button variant='outline' onClick={deletePeople} colorScheme={'red'}>Delete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


        </>
    );
}