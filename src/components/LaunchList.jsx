import { React, useState, useEffect } from 'react'
import { Heading, Spinner,Flex } from '@chakra-ui/react'

import { LaunchItem } from './LaunchItem'
import * as API from '../services/launches'

export function LaunchList() {

    const [launches, setLaunches] = useState([])

    useEffect(() => {
        // API.getAllLaunches().then(data => setLaunches(data))
        // traemos la documentacion de la api de spacex
        API.getAllLaunches()
            .then(setLaunches)
            .catch(console.error())
    }, [])

    return (
        <>
            <Heading align='center' as='h1' size='lg' m={4}>
                SpaceX Launches
            </Heading>

            {launches.length === 0 ? (
                <Flex align='center' justify='center'>
                    <Spinner size='xl' />
                </Flex>
            ) : (
                <section>
                    {launches.map(launch => (
                        <LaunchItem key={launch.flight_number} {...launch} />
                    ))}
                </section>
            )}

        </>
    )
}
