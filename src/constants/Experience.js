import { ql, myLogo, codeworks, imag } from '../assets/img/company/_index';

const experienceData = {
  id: "experience",
  title: "Work Experience",
  subtitle: "What I have done so far...",
  companies: [
    // {
    //   title: "Software Test Engineer",
    //   company_name: "QualityLogic",
    //   icon: ql,
    //   date: "Feb 2023 - Present",
    //   cssSelector: "ql",
    //   points: [
    //     "TESTING: I have experience in manual testing, automated testing, and performance testing.",
    //     "TEAM COLLABORATION: I have worked closely with developers, product managers, and other QA specialists to ensure that the product is of the highest quality.",
    //     "PROBLEM-SOLVING: I have a strong ability to identify and solve problems quickly and efficiently.",
    //     "ATTENTION TO DETAIL: I have a keen eye for detail and am able to spot even the smallest of bugs.",
    //     "COMMUNICATION: I have excellent communication skills and am able to clearly and effectively communicate with all members of the team."
    //   ]
    // },
    // {
    //   title: "Freelance Software Developer",
    //   company_name: "Self-Employed",
    //   icon: myLogo,
    //   date: "Aug 2023 - Present",
    //   cssSelector: "myLogo",
    //   points: [
    //     "DEVELOPMENT: Building and maintaining applications collaboratively; both Full Stack and Front End.",
    //     "COLLABORATIVE COMMUNICATION: Descriptive and articulate nature with a clear understanding of project scopes and requirements, making it easy to bridge the gap between technical and non-technical team members.",
    //     "CREATIVE MARKETING: Experience with social media and marketing techniques, executing novel methods through Graphic Design and user engagement strategies that are proven to produce results."
    //   ]
    // },
    {
      title: "Software Developer Intern",
      company_name: "CodeWorks",
      icon: codeworks,
      date: "March 2024 - June 2024",
      cssSelector: "cw",
      points: [
        "SPECIAL PROJECTS: Part of a hand-selected team of developers that has worked and continues to work on special projects for CodeWorks.",
        "CODE TALKS & LECTURES: Frequently collaborate with the CEO and other staff in helping set up networking events as well as being a speaker for code talks and lectures to help students understand some of the more in-depth concepts of web development.",
        "CAPSTONE PROJECT: Worked on a team with four other peers to create an application that would provide users who wanted to go adventuring, information about Idaho State Parks. We included current and upcoming weather, maps, group forums, campground costs, and direct links to reserve campground areas on the states website."
      ]
    },
    {
      title: "Assistant Manager",
      company_name: "Mr. Mudd Concrete Corp.",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JQ6EGpZLZZW0Lb1VrqcIlREQL4upIZJiyA&s",
      date: "August 2023 - March 2024",
      cssSelector: "imag",
      points: [
        "LEADERSHIP: I was responsible for managing eight employees out in the field. My goal was to make sure there was clear and effective communication between clients, workers, and management. I also ensured that quality and timely work was being done, leading to good customer relations.",
        "TEAM COLLABORATION: I worked closely with other managers to ensure the company goals were being met while maintaining the company values.",
        "INVENTORY MANAGEMENT: Oversaw inventory for the shop, ensuring timely access to equipment and materials.",
        "CUSTOMER RELATIONS: Visited with customers, addressing concerns and helping problem solve any potential issues. This created a healthy environment between customer and company."
      ]
    }
  ]
};

export default experienceData;