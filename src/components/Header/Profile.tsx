import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData &&
        <Box mr="4" textAlign="right">
          <Text>Fernando Miguel</Text>
          <Text color="gray.300" fontSize="small">
            buguel2000@gmail.com
          </Text>
        </Box>
      }
      <Avatar size="md" name="Fernando Miguel" src="https://avatars.githubusercontent.com/u/53983988?s=400&u=74f3c2c08f875bf0aa54d1461c6b697a1d3f4dff&v=4" />
    </Flex>
  )
}