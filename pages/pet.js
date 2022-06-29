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
import { PetItem } from "../components/pet-item";

export default function PetPage() {

  const toast = useToast();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [petOwner, setPetOwner] = useState("000000000000000000000000");
  const [search, setSearch] = useState("");
  const [peoples, setPeoples] = useState([]);


  const formik = useFormik({
    initialValues: {
      type: "",
      description: "",
      species: "",
    },
    onSubmit: (values) => {
      addPet(values.type, values.description, values.species);
    },
  });

  useEffect(() => {
    const requestPet = async () => {
      try {
        const resp = await axios.get(`https://peoplepet-api.herokuapp.com/pet`);
        setItems(resp.data);
      } catch (error) {
        console.log(error);
      }
    };

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

    requestPet();
    requestPeople();
    setLoading(false);
  }, []);

  async function addPet(type, description, species) {
    axios
      .post("https://peoplepet-api.herokuapp.com/pet", {
        type: type,
        description: description,
        species: species,
        owner: petOwner,
      })
      .then((response) => {
        console.log(response);

        return toast({
          title: "Added!",
          description: "Pet's record Added!",
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
      <Flex flexDir={"column"}>


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
                    placeholder="Search Pet"

                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex mt={5} mb={5} flexDir="column">
                  <form onSubmit={formik.handleSubmit}>
                    <Input


                      placeholder="Pet Type"
                      mb={5}
                      isRequired
                      name="type"
                      onChange={formik.handleChange}
                      value={formik.values.type}
                    />
                    <Input
                      placeholder="Pet Description"
                      mb={5}
                      isRequired
                      name="description"
                      onChange={formik.handleChange}
                      value={formik.values.description}
                    />
                    <Input
                      placeholder="Pet Species"
                      mb={5}
                      isRequired
                      name="species"
                      onChange={formik.handleChange}
                      value={formik.values.species}
                    />

                    <Select mb={5}
                      onChange={(e) => {
                        const selectedOwner = e.target.value;
                        setPetOwner(selectedOwner);
                      }}
                      placeholder="Select Owner"
                    >
                      <option value="000000000000000000000000">No Owner</option>
                      {peoples.map((people) => (
                        <option key={people} value={people._id}>
                          {people.name}
                        </option>
                      ))}
                    </Select>

                    <Button type="submit" w={"100%"} colorScheme={"green"} variant="outline">
                      Add Pet
                    </Button>
                  </form>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>


          <Tabs variant='enclosed'>
            <TabList>
              <Tab style={{ color: "black" }}>Pet</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} mt={10} gap={12}>
                  {loading ? (
                    <h1>Loading</h1>
                  ) : (
                    items
                      .filter((value) => {
                        if (search === "") {
                          return value;
                        } else if (value.species.includes(search)) {
                          return value;
                        } else if (value.type.includes(search)) {
                          return value;
                        } else if (value._id.includes(search)) {
                          return value;
                        }
                      })
                      .map((item) => (
                        <PetItem
                          key={item}
                          type={item.type}
                          species={item.species}
                          id={item._id}
                          description={item.description}
                          owner={item.owner === null ? "No Owner" : item.owner}
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