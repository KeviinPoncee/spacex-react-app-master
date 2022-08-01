import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Text, Spacer, Tag, Button,Image } from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'

export function LaunchItem(launch) {
    return (
        <Box
            bg='gray.200'
            p={4}
            m={4}
            borderRadius='lg'>

            <Box display='flex'>
                <Image src={launch.links.mission_patch} boxSize='50px'/>
                <Box align='center' width='100%'>
                    <Text fontSize='2xl'>
                        Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                    </Text>
                    <Tag m={2} p={2} colorScheme={launch.launch_success ? 'green' : 'red'}>
                        {launch.launch_success ? 'Success' : 'Failure'}
                    </Tag>
                </Box>
            </Box>

            <Flex align='center' display='flex'>
                <Box>
                    <Text color='gray.500'>Launch date</Text>
                    <Box display='flex' alignItems='center'>
                        <CalendarIcon color='gray.500' />
                        <Text fontSize='sm' ml={1} color='gray.500'>
                            {launch.launch_date_local.split('T')[0]}
                        </Text>
                    </Box>
                </Box>
                <Spacer />
                <Link to={`/launch/${launch.flight_number}`}>
                    <Button mt={2} colorScheme='blue'>
                        More Details
                    </Button>
                </Link>
            </Flex>

        </Box>
    )
}
