import { useEffect, useState } from 'react'
import JobInfo from './JobInfo'
import BtnContainer from './BtnContainer'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [jobs, setJobs] = useState()
  const [currentItem, setCurrentItem] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url)
        if (!resp.ok) {
          setIsError(true)
          setIsLoading(false)
          return
        }
        const data = await resp.json()
        setJobs(data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])
  if (isLoading === true) {
    return (
      <section className="jobs-center">
        <div className="loading">.</div>
      </section>
    )
  }
  if (isError === true) {
    return <h2>There was an Error...</h2>
  }
  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  )
}
export default App
