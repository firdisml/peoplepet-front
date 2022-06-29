import {
    Flex,
    Button,
    Select,
    Input,
    Grid,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useToast
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { PeopleItem } from "../components/people-item";

export default function PeoplePage() {

    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [peopleFriend, setpeopleFriend] = useState("");
    const [search, setSearch] = useState("");
    const [peoples, setPeoples] = useState([]);


    const formik = useFormik({
        initialValues: {
            name: "",
        },
        onSubmit: (values) => {
            addPeople(values.name);
        },
    });

    useEffect(() => {
        const requestPeople = async () => {
            try {
                const resp = await axios.get(
                    `https://peoplepet-api.herokuapp.com/people`
                );
                setPeoples(resp.data);
            } catch (error) {
                console.log(error);
            }
        };
        requestPeople();
        setLoading(false);
    }, []);

    async function addPeople(name) {
        axios
            .post("https://peoplepet-api.herokuapp.com/people", {
                name: name,
                friend: [peopleFriend]
            })
            .then((response) => {

                console.log(response);

                return toast({
                    title: "Added!",
                    description: "People's record Added!",
                    status: "success",
                    duration: 9000,
                    variant: "left-accent",
                    isClosable: true,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <Flex flexDir={"column"} >

                <Flex flexDir={"column"}>
                    <Tabs variant='enclosed'>
                        <TabList>
                            <Tab style={{ color: "black" }}>Search</Tab>
                            <Tab style={{ color: "black" }}>Add</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <Flex mt={5} mb={5}>
                                    <Input
                                        placeholder="Search People"
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </Flex>
                            </TabPanel>
                            <TabPanel>
                                <Flex mt={5} mb={5} flexDir="column">
                                    <form onSubmit={formik.handleSubmit}>
                                        <Input

                                            placeholder="People Name"
                                            mb={5}
                                            isRequired
                                            name="name"
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                        />

                                        <Select mb={5}
                                            onChange={(e) => {
                                                const selectedFriend = e.target.value;
                                                setpeopleFriend(selectedFriend);
                                            }}
                                            placeholder="Add Friend"
                                        >
                                            <option value="000000000000000000000000">No Friend</option>
                                            {peoples.map((people) => (
                                                <option key={people} value={people._id}>
                                                    {people.name}
                                                </option>
                                            ))}
                                        </Select>

                                        <Button type="submit" w={"100%"} colorScheme={"green"} variant="outline">
                                            Add People
                                        </Button>
                                    </form>
                                </Flex>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>


                    <Tabs variant='enclosed'>
                        <TabList>
                            <Tab style={{ color: "black" }}>People</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} mt={10} gap={12}>
                                    {loading ? (
                                        <h1>Loading</h1>
                                    ) : (
                                        peoples
                                            .filter((value) => {
                                                if (search === "") {
                                                    return value;
                                                } else if (value.name.includes(search)) {
                                                    return value;
                                                } else if (value._id.includes(search)) {
                                                    return value;
                                                }
                                            })
                                            .map((item, index) => (
                                                <PeopleItem
                                                    key={index}
                                                    id={item._id}
                                                    name={item.name}
                                                    friend={item.friend}
                                                    people={peoples}
                                                />
                                            ))
                                    )}
                                </Grid>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                </Flex>
            </Flex>
        </>
    )
}