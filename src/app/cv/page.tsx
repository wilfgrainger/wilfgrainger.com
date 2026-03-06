type Experience = {
  company: string;
  role: string;
  dates: string;
  location?: string;
  description: string[];
};

const EXPERIENCES: Experience[] = [
  {
    company: "Amazon Web Services (AWS)",
    role: "Senior Cloud Architect Consultant - Global Financial Services",
    dates: "Dec 2021 - Present",
    location: "Virtual · Remote",
    description: [
      "Collaborate with global financial services clients to develop tailored cloud strategies aligning with business goals.",
      "Provide architectural guidance for optimal cloud adoption, integration, and migration while ensuring compliance.",
      "Designed secure, scalable cloud solutions enabling innovation and competitive advantage."
    ]
  },
  {
    company: "Much Wenlock Town Council",
    role: "Town Councillor",
    dates: "May 2021 - May 2025",
    location: "On-site",
    description: [
      "Dedicated to serving the community and actively working towards enhancing the quality of life for its residents.",
      "Collaborating closely with fellow councillors and community stakeholders to create and implement policies and initiatives.",
      "Addressing local issues such as infrastructure, education, public safety, and environmental sustainability while preserving the town's unique character."
    ]
  },
  {
    company: "Phoenix Group",
    role: "Enterprise Cloud Architect",
    dates: "Dec 2020 - Dec 2021",
    location: "Virtual · Remote",
    description: [
      "Chair for the Technical Design Authority in the Investment Separation program.",
      "Lead Enterprise Architect for the Phoenix Investment & Asset Management Program, managing the separation from Swiss Re Group.",
      "Implemented a state-of-the-art architecture utilizing serverless Amazon Web Services (AWS) cloud technology.",
      "Developed a centralized single view of all ReAssure Group's Investment Management Data.",
      "Contributed to Group Data Science Pilots by providing architectural guidance, oversight and AWS support."
    ]
  },
  {
    company: "Swiss Re",
    role: "Enterprise Cloud Architect",
    dates: "Jan 2017 - Dec 2020",
    location: "Telford, United Kingdom",
    description: [
      "Lead architect responsible for designing and implementing the AWS hyper-scale cloud infrastructure and security architecture for the policy administration consumer portal.",
      "Utilized container-based workloads on AWS ECS and Fargate, a first for the industry.",
      "Led the design of the AWS Landing Zone, serving as a foundational platform for future application migrations.",
      "Lead enterprise cloud architect on the finance platform cloud transformation program, managing the migration from Oracle Hyperion to AWS."
    ]
  },
  {
    company: "Swiss Re",
    role: "Infrastructure Architect",
    dates: "Feb 2014 - Jan 2017",
    location: "Telford, Shropshire, United Kingdom",
    description: [
      "Led a large-scale multi-data center consolidation program to fulfill critical business objectives, successfully migrating two data centers.",
      "Pioneered the AWS cloud infrastructure and security architecture for the company's Policy Administration Consumer Portal.",
      "Collaborated with business stakeholders to design and implement robust disaster recovery and business continuity solutions for business-critical applications."
    ]
  },
  {
    company: "Capita IT Professional Services",
    role: "Technical Design Lead",
    dates: "Jan 2013 - Feb 2014",
    location: "United Kingdom",
    description: [
      "Guided customer engagements from pre-sales through to successful delivery, specializing in crafting solutions for large-scale IT projects.",
      "Provided technical architecture consultancy services to local government entities.",
      "Technical Design Lead for IT delivery at the prestigious Building Schools for the Future (BSF) Pathfinder Campus in Wolverhampton.",
      "Facilitated monthly governance meetings, fostering strong relationships with customers and stakeholders."
    ]
  },
  {
    company: "Trinity Expert Systems",
    role: "Service Design Architect",
    dates: "Mar 2011 - Jan 2013",
    location: "Telford, England, United Kingdom",
    description: [
      "Lead Architect for the Configuration Management and Application Deployment Infrastructure Solution for a heavily regulated financial services organization.",
      "Implemented a centralized audit and security monitoring solution utilizing Splunk.",
      "Architected and executed an application-based remote desktop service, securely enabling third-party access to a hosted Claims Management service."
    ]
  },
  {
    company: "Telford & Wrekin Council",
    role: "Senior Infrastructure Support & Design Engineer",
    dates: "Jul 2003 - Mar 2011",
    description: [
      "Offered customer-oriented, dependable, and adaptable operational and technical infrastructure support to staff, schools, and councillors.",
      "Technical Lead for the Building Schools for the Future initiative.",
      "Managed the design and upgrade of an Active Directory for a domain comprising 25,000 users and 10,000 workstations.",
      "Covered VMware virtualization migration, Sun Systems-based VDI implementation, Office Communicator deployment, and Microsoft Office 365 integration."
    ]
  }
];

const SKILLS: string[] = [
  "Amazon Web Services (AWS)",
  "Cloud-Native Architecture",
  "Solution Architecture",
  "Enterprise Architecture",
  "Cloud Strategy",
  "IT Strategy",
  "Reference Architecture",
  "Serverless",
  "Data Models",
  "Operating Models",
  "Modeling Tools",
  "TOGAF",
  "Technical Reviews",
  "Request for Proposal (RFP)",
  "Presentations",
  "Interpersonal Skills",
  "Motivational Speaking",
  "Charity Work"
];

export default function CVPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-extrabold tracking-tight mb-8">Curriculum Vitae</h1>

      <div className="space-y-12">
        <section className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-2">Experience</h2>

          <div className="space-y-10">
            {EXPERIENCES.map((exp, index) => (
              <div key={index}>
                <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 font-medium">{exp.role}</p>
                    {exp.location && (
                      <p className="text-sm text-neutral-500 mt-0.5">{exp.location}</p>
                    )}
                  </div>
                  <span className="text-sm text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full mt-2 sm:mt-0 whitespace-nowrap">
                    {exp.dates}
                  </span>
                </div>
                <ul className="list-disc list-outside ml-5 text-neutral-700 dark:text-neutral-300 space-y-2 mt-4">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
