import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import WorkIcon from '@mui/icons-material/Work';

const WorkExperience = () => {
  return (
    <div id='workexp' className='lg:mx-64 lg:min-h-screen h-full transition lg:mb-14 '>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="July/2022 - Jan/2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<WorkIcon />}
        >
          <h4 className='text-xl font-bold pb-3'>
            UST - Trainee Engineer
          </h4>
          <ul className='list-disc'>

            <li>
              Underwent extensive training program in Java, Javascript, Springboot, React.JS, gaining a firm understanding in the framework & enhancing my skill set in web development.
            </li>
          </ul>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Jan/2023 - Nov/2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<WorkIcon />}
        >
          <h4 className='text-xl font-bold pb-3'>
            UST - Associate Software Engineer
          </h4>

          <ul className='list-disc'>
            <li>
              Learned and applied programming languages, frameworks, and tools such as Java, JavaScript, React, and Jira relevant to
              project requirements.
            </li>
            <li>
              Collaborated with team to understand project
              requirements.
            </li>
            <li>
              Conducted bug fixes and resolved issues promptly to
              ensure smooth project delivery.
            </li>
            <li>
              Attended meetings, stand-ups, and knowledge-sharing
              sessions to stay informed about project progress and
              contribute effectively to team discussions.

            </li>

          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Nov/2023 - Ongoing"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<WorkIcon />}
        >
          <h4 className='text-xl font-bold pb-3'>
            UST - Software Engineer-A1
          </h4>
          <ul className='list-disc'>
            <li>Developed frontend solutions with React.js, improving user experience by identifying and resolving bugs.</li>
            <li>Optimized application performance by implementing tree shaking and creating custom hooks to eliminate redundant code and improve maintainability.</li>
            <li>Learned about lazy loading and code splitting to enhance application efficiency.</li>
            <li>Participated in KT (Knowledge Transfer) sessions to understand project architecture, technologies, and coding standards, ensuring alignment with project goals.</li>
            <li>Created documentation to streamline development processes and support team collaboration.</li>
            <li>Managed code efficiently using Git for version control, enabling seamless collaboration and workflow management.</li>
            <li>Engaged in daily stand-ups, sprint planning, and retrospectives to track progress, discuss enhancements, and optimize team productivity.</li>
          </ul>
        </VerticalTimelineElement>






        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<WorkIcon />}
        />
      </VerticalTimeline>
    </div>
  )
}

export default WorkExperience;
