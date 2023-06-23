import uuid from 'react-uuid'

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            className={`job-btn ${index === currentItem ? 'active-btn' : ''}`}
            onClick={() => setCurrentItem(index)}
            key={uuid()}
          >
            {job.company}
          </button>
        )
      })}
    </div>
  )
}
export default BtnContainer
