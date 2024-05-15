import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard/index'
import ProjectTimelineCard from '../ProjectTimelineCard/index'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="chrono-container">
      <h1 className="heading">
        MY JOURNEY OF <span className="span-element">PROJECTS</span>
      </h1>
      <p className="name"> Gaddi Rakesh karthik</p>
      <div className="chrono-main-container">
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(each => {
            if (each.categoryId === 'COURSE') {
              return <CourseTimelineCard data={each} />
            }
            return <ProjectTimelineCard data={each} />
          })}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
