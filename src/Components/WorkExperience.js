import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import WorkIcon from '@mui/icons-material/Work';

const WorkExperience = () => {
  return (
    <div className='mx-64 min-h-screen  '>

      <h1 className='text-white text-2xl w-full '>Work experience</h1>

      <VerticalTimeline>
       
       
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2004 - 2014"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<WorkIcon />}
        >
          <h4 className='text-xl font-bold'>
            UST - Trainee Engineer
          </h4>
         
          <p>
          Underwent extensive training program in Java, Javascript, Springboot, React.JS, gaining a firm understanding in the framework & enhancing my skill set in web development.
          </p>
        </VerticalTimelineElement>

        




{/*         
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2014 - 2018"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            DIPLOMA IN ENGINEERING
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Dhaka Polytechnic Institute, Dhaka
          </h4>
          <p>
            Studied Diploma in Computer Technology from Dhaka Polytechnic
            institute and gain CGPA 2.98.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2019 - 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">GRADUATION</h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Sonargaon University, Dhaka
          </h4>
          <p>
            Studied Bachelor of Science degree in Computer Science and
            Engineering field from Sonargaon University and gain CGPA 3.44.
          </p>
        </VerticalTimelineElement> */}

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<WorkIcon />}
        />
      </VerticalTimeline>
    </div>
  )
}

export default WorkExperience;
