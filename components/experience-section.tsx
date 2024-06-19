// // experience-section.tsx
// "use client";
// import React, { useRef } from 'react';
// import SectionHeading from './section-heading';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import { experiencesData } from '@/lib/data';
// import { useSectionInView } from '@/lib/hooks';
// import { motion } from "framer-motion";


// export default function Experience() {
//     const ref = useRef(null);
//     useSectionInView(ref, "Experience", 0.5); // custom hook

//     return (
//         <motion.section 
//             className='scroll-mt-28 mb-28 sm:mb-40'
//             id="experience"
//             ref={ref}
//             style={{ height: '100vh' }}
//         >
//             <SectionHeading>My Experience</SectionHeading>
//             <div style={{ height: '100%' }}>
//                 <VerticalTimeline lineColor="">
//                     {experiencesData.map((experience, index) => (
//                         <VerticalTimelineElement
//                             visible={true}
//                             key={index}
//                             contentStyle={{ 
//                                 background: "#f3f4f6", 
//                                 boxShadow: "none",
//                                 border: "2px solid rgba(0, 0, 0, 0.05)",
//                                 textAlign: "left",
//                                 padding: "1.3rem 2rem",
//                             }}
//                             contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
//                             date={experience.date}
//                             icon={experience.icon}
//                             iconStyle={{
//                                 background: "rgba(255, 255, 255, 0.15)",
//                                 fontSize: "1.5rem",
//                             }}
//                         >
//                             <h3 className="font-semibold capitalize">{experience.title}</h3>
//                             <p className="font-normal !mt-0">{experience.location}</p>
//                             <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
//                                 {experience.description}
//                             </p>
//                         </VerticalTimelineElement>
//                     ))}
//                 </VerticalTimeline>
//             </div>
//         </motion.section>
//     );
// }
