import { Container, Heading, Text } from "@chakra-ui/react";

const Private = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h1" size="2xl">Private Page</Heading>
      <Text fontSize="lg">This page is protected and only accessible to authenticated users.</Text>
    </Container>
  );
};

export default Private;