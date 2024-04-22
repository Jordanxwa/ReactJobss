import { useEffect, useState } from 'react';
import JobListing from './JobListing'
 import Spinner from './Spinner';

function JobListings({isHome = false}) {
const [jobs, setJobs] = useState([])
const [loading, setLoading] = useState(true)

// Fetching jobs from API instead of json file when page loads
useEffect(() => {
  // Show 3 jobs on home page, all jobs on jobs page
  const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs' 
  const fetchJobs = async() => {
    try {
      const res = await fetch(apiUrl)
      const data = await res.json()
      setJobs(data)
    } catch (error) {
      console.log("error fetching data", error)
    } finally{
      setLoading(false)
    }
  }
  fetchJobs()
}, [])

  // // If on home page, show 3 jobs, else show all in jobs page
  // const jobListings = isHome ? jobs.slice(0,3) : jobs;

  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {isHome ? 'Recent Jobs' : 'Browse Jobs'} 
      </h2>
      
        {/* Loop through job listing API data and replace html with json data */}
        {loading ? (
        <Spinner loading={loading} />
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job}/>
          ))}
          </div>
        )}
     
    </div>
  </section>

  )
}

export default JobListings