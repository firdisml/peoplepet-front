import {
    GridItem,
    Box,
    Flex,
    chakra,
    Button,
    Modal,
    ModalOverlay,
    FormControl,
    FormLabel,
    FormHelperText,
    HStack,
    Text,
    Input,
    Select,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useToast
} from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react'
import axios from "axios";
import { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";

export function PetItem(props) {

    const toast = useToast();

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [petOwner, setPetOwner] = useState(props.owner == "No Owner" ? "No Owner" : props.owner.name);

    async function updateOwner() {

        axios.patch(`https://peoplepet-api.herokuapp.com/pet/update=${props.id}`, { "edited_field": "owner", "owner": petOwner },
        ).then((response) => {

            console.log(response)


            return toast({
                title: "Updated!",
                description: "Pet's record updated!",
                status: "success",
                duration: 9000,
                variant: "left-accent",
                isClosable: true,
            });

        }).catch((error) => {
            console.log(error)
        })

    }

    async function deletePet() {

        axios.delete(`https://peoplepet-api.herokuapp.com/pet/delete=${props.id}`, { "data": { ".id": props.id } },
        ).then((response) => {
            console.log(response)

            return toast({
                title: "Deleted!",
                description: "Pet's record deleted!",
                status: "error",
                duration: 9000,
                variant: "left-accent",
                isClosable: true,
            });

        }).catch((error) => {
            console.log(error)
        })

    }

    function fetchAPI() {

        try {

            window.open(`https://peoplepet-api.herokuapp.com/pet/search=${props.id}`)

        } catch (error) {

            console.log(error)

        }



    }




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
                                    "url(https://cdn.discordapp.com/attachments/947785554706198568/991792395756773487/cat.png)",
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
                                {props.species}
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
                                    {props.type}
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
                    <ModalHeader>Pet Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl mt={4} isRequired>
                            <FormLabel>Species</FormLabel>
                            <FormHelperText mb={2}><HStack><FiAlertCircle /><Text>This value cannot be change </Text></HStack></FormHelperText>
                            <Input name="cost" value={props.species} isDisabled />
                        </FormControl>
                        <FormControl mt={4} isRequired>
                            <FormLabel>Type</FormLabel>
                            <FormHelperText mb={2}><HStack><FiAlertCircle /><Text>This value cannot be change </Text></HStack></FormHelperText>
                            <Input name="cost" value={props.type} isDisabled />
                        </FormControl>
                        <FormControl mt={4} isRequired>
                            <FormLabel>Unique</FormLabel>
                            <FormHelperText mb={2}><HStack><FiAlertCircle /><Text>This value cannot be change </Text></HStack></FormHelperText>
                            <Input name="cost" value={props.id} isDisabled />
                        </FormControl>
                        <FormControl mt={4} isRequired>
                            <FormLabel>Owner</FormLabel>
                            <FormHelperText mb={2}><HStack><FiAlertCircle /><Text>This value cannot be change </Text></HStack></FormHelperText>
                            <Input name="cost" value={props.owner == "No Owner" ? "No Owner" : props.owner.name} isDisabled />
                        </FormControl>
                    </ModalBody>

                    <ModalBody>
                        <FormControl isRequired>
                            <FormLabel>Change Owner</FormLabel>
                            <FormHelperText mb={2}><HStack><FiAlertCircle /><Text>Change Pet Owner</Text></HStack></FormHelperText>
                        </FormControl>
                        <Select onChange={(e) => {
                            const selectedOwner = e.target.value;
                            setPetOwner(selectedOwner)
                        }} placeholder="Select Owner">
                            <option value="000000000000000000000000">No Owner</option>
                            {props.people.map((people) => (
                                <option key={people} value={people._id}>{people.name}</option>
                            ))}
                        </Select>

                        <Button mt={4} variant='outline' onClick={updateOwner} colorScheme={'green'}>Change Owner</Button>

                    </ModalBody>
                    <ModalFooter>
                        <Button variant='outline' mr={5} onClick={fetchAPI} colorScheme={'yellow'}>Fetch API</Button>
                        <Button variant='outline' onClick={deletePet} colorScheme={'red'}>Delete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


        </>
    );
}