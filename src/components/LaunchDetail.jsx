import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Flex, Spinner, Text, Tag, UnorderedList, ListItem, Divider, Image, Link, AspectRatio } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import * as API from '../services/launches'

export function LaunchDetail() {

    const [launch, setLaunch] = useState({})
    const [loading, setLoading] = useState(true)

    const { launchId } = useParams()

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId)
            .then(setLaunch)
            .catch(console.error())
            .finally(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 1500)
            })
    }, [launchId])


    return (
        <>
            <Box
                bg='gray.200'
                p={4}
                m={4}
                borderRadius='lg'>

                {loading ? (
                    <Flex align='center' justify='center'>
                        <Spinner size='xl' />
                    </Flex>
                ) : (

                    <>
                        <Text fontSize='2xl' align='center'>
                            Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                        </Text>
                        <Flex display='flex' align='center' justify='center'>
                            <Text as='u'>
                                <strong>Launch Success:</strong>
                            </Text>
                            <Tag p={2} colorScheme={launch.launch_success ? 'green' : 'red'}>
                                {launch.launch_success ? 'Success' : 'Failure'}
                            </Tag>
                        </Flex>
                        <Box m={3}>
                            <Text align='center'>
                                <strong>Details: </strong>{launch.details}
                            </Text>
                        </Box>
                        <Box align='center'>
                            <UnorderedList styleType='none' m={4}>
                                <ListItem>
                                    Rocket Name: <strong>{launch.rocket.rocket_name}</strong>
                                </ListItem>
                                <ListItem>
                                    Rocket Type: <strong>{launch.rocket.rocket_type}</strong>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Divider m={4} />
                        <Box>
                            <Text fontSize='2xl'>
                                <strong>Extra Information:</strong>
                            </Text>
                            <Flex justify='center'>
                                <Text display='flex' alignItems='center' m={4}>
                                    <strong>
                                        Mission patch:
                                    </strong>
                                    <Image boxSize='100px' m={4} src={launch.links.mission_patch} />
                                </Text>
                            </Flex>
                        </Box>
                        <Box align='center'>
                            <Text>
                                <strong>Articles: </strong>
                            </Text>
                            <UnorderedList styleType='none'>
                                <ListItem m={3}>
                                    <Link href={launch.links.article_link}>
                                        Article n°1 <ExternalLinkIcon mx='2px' />
                                    </Link>
                                </ListItem>
                                <ListItem m={3}>
                                    <Link href={launch.links.wikipedia}>
                                        Wikipedia <ExternalLinkIcon mx='2px' />
                                    </Link>
                                </ListItem>
                                <ListItem m={3} maxW='500px'>
                                    <AspectRatio>
                                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${launch.links.youtube_id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </AspectRatio>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </>

                )}

            </Box>
        </>
    )
}
