import { ql, myLogo, codeworks, imag, linear } from '../assets/img/company/_index';

const experienceData = {
  id: "experience",
  title: "Work Experience",
  subtitle: "What I have done so far...",
  companies: [
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
    },
    {
      title: "Crew Lead/Installer",
      company_name: "Mr. Mudd Concrete Corp.",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JQ6EGpZLZZW0Lb1VrqcIlREQL4upIZJiyA&s",
      date: "August 2021 - August 2023",
      cssSelector: "imag",
      points: [
        "CREW LEADERSHIP: Led a crew of two, assisting customers with their repair needs and ensuring high-quality work.",
        "CUSTOMER SERVICE: Provided excellent customer service, addressing repair needs promptly and professionally.",
        "EQUIPMENT MANAGEMENT: Maintained equipment to ensure increased productivity."
      ]
    },
    {
      title: "Owner",
      company_name: "Linear Lawncare LLC",
      icon: linear,
      date: "August 2021 - August 2023",
      cssSelector: "imag",
      points: [
        "CUSTOMER NETWORKING AND RELATIONS: Handled customer networking and maintained strong relationships to drive business growth.",
        "ACCOUNTING MANAGEMENT: Managed several accounting tasks, ensuring accurate financial records and efficient budgeting.",
        "QUALITY ASSURANCE: Ensured high-quality work by maintaining equipment daily, preventing downtime and enhancing service delivery."
      ]
    }
  ]
};

export default experienceData;