import React from 'react'
import { useLoaderData } from 'react-router'
import JoinedEventsCard from '../../components/JoinedEventsCard'

export default function JoinedEvents() {
  const joinedEventsData = useLoaderData()

  return (
    <div className='max-w-7xl mx-auto grid md:grid-cols-4 grid-cols-1 gap-6'>
      {joinedEventsData.map((event) => (
        <JoinedEventsCard event={event} key={event._id} />
      ))}
    </div>
  )
}
