import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import { resources } from '../public/mock-data/resources';
import { Card } from '../components/login-page/Card';

export default function ResourceCard() {
  return (
    <SimpleGrid minChildWidth="320px" columns={4} spacing={4}>
      {resources?.map((r, index) => {
        return (
          <Card key={index} maxW="sm" overflow="hidden" px={0} py={0}>
            <a target="_blank" href={r.articleUrl} rel="noopener noreferrer">
              <Image
                width="100%"
                src={r.imageUrl}
                fallbackSrc="https://via.placeholder.com/150"
              />
            </a>
            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {r.title}
              </Box>

              <Box>{r.description}</Box>
            </Box>
          </Card>
        );
      })}
    </SimpleGrid>
  );
}
