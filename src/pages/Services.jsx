import React from 'react'
import PageServicesList from '../components/ServicesPageList'
import Filter from '../components/Filter/Filter'

const Services = () => {
  return (
      <div>
          <Filter />
          <PageServicesList />
    </div>
  )
}

export default Services