import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Badge,
    Flex,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react'

export default function DocsPage() {

    const peopleID = "{ PEOPLE ID }";
    const petID = "{ PET ID }";

    return (


        <>
            <Accordion allowToggle>

                {/* CREATE RECORD*/}
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Create Record
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Tabs variant='enclosed'>
                            <TabList>
                                <Tab>People</Tab>
                                <Tab>Pet</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <Flex flexDir={"column"}>
                                        <Flex mt={5} flexDir={"column"}>

                                            <Flex><Badge colorScheme={"green"}>POST</Badge></Flex>
                                            <Flex as='u' mt={5}>https://peoplepet-api.herokuapp.com/people</Flex>



                                        </Flex>

                                        <Flex mt={5} flexDir={"column"}>

                                            <Flex><Badge colorScheme={"green"}>Body Parameter</Badge></Flex>

                                            <Flex mt={5} mb={5}>

                                                <TableContainer>
                                                    <Table variant='simple'>
                                                        <Thead>
                                                            <Tr>
                                                                <Th fontFamily={"sans-serif"}>Key</Th>
                                                                <Th fontFamily={"sans-serif"}>Value</Th>
                                                            </Tr>
                                                        </Thead>
                                                        <Tbody>
                                                            <Tr>
                                                                <Td>name</Td>
                                                                <Td>string</Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td>friend</Td>
                                                                <Td>string <Text as='u'>array</Text></Td>
                                                            </Tr>
                                                        </Tbody>
                                                    </Table>
                                                </TableContainer>

                                            </Flex>

                                        </Flex>
                                    </Flex>
                                </TabPanel>
                                <TabPanel>
                                    <Flex flexDir={"column"}>
                                        <Flex mt={5} flexDir={"column"}>

                                            <Flex><Badge colorScheme={"green"}>POST</Badge></Flex>
                                            <Flex as='u' mt={5}>https://peoplepet-api.herokuapp.com/pet</Flex>



                                        </Flex>

                                        <Flex mt={5} flexDir={"column"}>

                                            <Flex><Badge colorScheme={"green"}>Body Parameter</Badge></Flex>

                                            <Flex mt={5} mb={5}>

                                                <TableContainer>
                                                    <Table variant='simple'>
                                                        <Thead>
                                                            <Tr>
                                                                <Th fontFamily={"sans-serif"}>Key</Th>
                                                                <Th fontFamily={"sans-serif"}>Value</Th>
                                                            </Tr>
                                                        </Thead>
                                                        <Tbody>
                                                            <Tr>
                                                                <Td>type</Td>
                                                                <Td>string</Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td>description</Td>
                                                                <Td>string</Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td>species</Td>
                                                                <Td>string</Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td>owner</Td>
                                                                <Td>string</Td>
                                                            </Tr>
                                                        </Tbody>
                                                    </Table>
                                                </TableContainer>

                                            </Flex>

                                        </Flex>
                                    </Flex>
                                </TabPanel>
                                <TabPanel>
                                    <p>three!</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>





                    </AccordionPanel>
                </AccordionItem>


                {/* READ RECORD*/}

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Read Record
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Tabs variant='enclosed'>
                            <TabList>
                                <Tab>People</Tab>
                                <Tab>Pet</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Flex flexDir={"column"}>
                                        <Flex mt={5} flexDir={"column"}>
                                            <Flex><Badge colorScheme={"green"}>GET</Badge></Flex>
                                            <Flex as='u' mt={5}>https://peoplepet-api.herokuapp.com/people</Flex>
                                        </Flex>
                                    </Flex>
                                </TabPanel>
                                <TabPanel>
                                    <Flex flexDir={"column"}>
                                        <Flex mt={5} flexDir={"column"}>
                                            <Flex><Badge colorScheme={"green"}>GET</Badge></Flex>
                                            <Flex as='u' mt={5}>https://peoplepet-api.herokuapp.com/pet</Flex>
                                        </Flex>
                                    </Flex>
                                </TabPanel>
                                <TabPanel>
                                    <p>three!</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </AccordionPanel>
                </AccordionItem>

                {/* UPDATE RECORD*/}

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Update Record
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Tabs variant='enclosed'>
                            <TabList>
                                <Tab>People</Tab>
                                <Tab>Pet</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <Flex flexDir={"column"}>
                                        <Flex mt={5} flexDir={"column"}>

                                            <Flex><Badge colorScheme={"green"}>PATCH</Badge></Flex>
                                            <Flex as='u' mt={5}><Text>https://peoplepet-api.herokuapp.com/people/update={peopleID}</Text></Flex>

                                        </Flex>

                                        <Flex mt={5} flexDir={"column"}>

                                            <Flex><Badge colorScheme={"green"}>Body Parameter</Badge></Flex>

                                            <Flex mt={5} mb={5}>

                                                <TableContainer>
                                                    <Table variant='simple'>
                                                        <Thead>
                                                            <Tr>
                                                                <Th fontFamily={"sans-serif"}>Key</Th>
                                                                <Th fontFamily={"sans-serif"}>Value</Th>
                                                            </Tr>
                                                        </Thead>
                                                        <Tbody>
                                                            <Tr>
                                                                <Td>friend</Td>
                                                                <Td>string <Text as={'u'}>array</Text></Td>
                                                            </Tr>
                                                        </Tbody>
                                                    </Table>
                                                </TableContainer>

                                            </Flex>

                                        </Flex>
                                    </Flex>
                                </TabPanel>
                                <TabPanel>
                                    <Flex flexDir={"column"}>
                                        <Flex mt={5} flexDir={"column"}>

                                            <Flex><Badge colorScheme={"green"}>PATCH</Badge></Flex>
                                            <Flex as='u' mt={5}>https://peoplepet-api.herokuapp.com/pet/update={petID}</Flex>



                                        </Flex>

                                        <Flex mt={5} flexDir={"column"}>

                                            <Flex><Badge colorScheme={"green"}>Body Parameter</Badge></Flex>

                                            <Flex mt={5} mb={5}>

                                                <TableContainer>
                                                    <Table variant='simple'>
                                                        <Thead>
                                                            <Tr>
                                                                <Th fontFamily={"sans-serif"}>Key</Th>
                                                                <Th fontFamily={"sans-serif"}>Value</Th>
                                                            </Tr>
                                                        </Thead>
                                                        <Tbody>
                                                            <Tr>
                                                                <Td>owner</Td>
                                                                <Td>string</Td>
                                                            </Tr>
                                                        </Tbody>
                                                    </Table>
                                                </TableContainer>

                                            </Flex>

                                        </Flex>
                                    </Flex>
                                </TabPanel>
                                <TabPanel>
                                    <p>three!</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </AccordionPanel>
                </AccordionItem>

                {/* DELETE RECORD */}

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Delete Record
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Tabs variant='enclosed'>
                            <TabList>
                                <Tab>People</Tab>
                                <Tab>Pet</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <Flex flexDir={"column"}>
                                        <Flex mt={5} flexDir={"column"}>

                                            <Flex><Badge colorScheme={"green"}>DELETE</Badge></Flex>
                                            <Flex as='u' mt={5}>https://peoplepet-api.herokuapp.com/people/delete={peopleID}</Flex>

                                        </Flex>

                                    </Flex>
                                </TabPanel>
                                <TabPanel>
                                    <Flex flexDir={"column"}>
                                        <Flex mt={5} flexDir={"column"}>

                                            <Flex><Badge colorScheme={"green"}>DELETE</Badge></Flex>
                                            <Flex as='u' mt={5}>https://peoplepet-api.herokuapp.com/pet/delete={petID}</Flex>

                                        </Flex>

                                    </Flex>
                                </TabPanel>
                                <TabPanel>
                                    <p>three!</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </AccordionPanel>
                </AccordionItem>

                {/* SEARCH RECORD */}

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Search Record
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Tabs variant='enclosed'>
                            <TabList>
                                <Tab>People</Tab>
                                <Tab>Pet</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <Flex flexDir={"column"}>
                                        <Flex mt={5} flexDir={"column"}>

                                            <Flex><Badge colorScheme={"green"}>GET</Badge></Flex>
                                            <Flex as='u' mt={5}>https://peoplepet-api.herokuapp.com/people/search={peopleID}</Flex>

                                        </Flex>

                                    </Flex>
                                </TabPanel>
                                <TabPanel>
                                    <Flex flexDir={"column"}>
                                        <Flex mt={5} flexDir={"column"}>

                                            <Flex><Badge colorScheme={"green"}>GET</Badge></Flex>
                                            <Flex as='u' mt={5}>https://peoplepet-api.herokuapp.com/pet/search={petID}</Flex>

                                        </Flex>

                                    </Flex>
                                </TabPanel>
                                <TabPanel>
                                    <p>three!</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>



    )
}