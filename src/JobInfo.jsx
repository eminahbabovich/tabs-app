import Duties from './Duties'

const JobInfo = ({ jobs, currentItem }) => {
  const { id, company, dates, title, duties } = jobs[currentItem]
  return (
    <article className="jobs-info">
      <h3>{title}</h3>
      <p className="job-company">{company}</p>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} key={id} />
    </article>
  )
}
export default JobInfo
