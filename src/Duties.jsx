import { BiChevronsRight } from 'react-icons/bi'
import uuid from 'react-uuid'

const Duties = ({ duties }) => {
  return (
    <>
      {duties.map((duty) => {
        const id = uuid()
        return (
          <div className="job-desc" key={id}>
            <div className="job-icon">
              <BiChevronsRight />
            </div>
            <p>{duty}</p>
          </div>
        )
      })}
    </>
  )
}
export default Duties
