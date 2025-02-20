export const templates = [
  { 
    id: "blank", 
    label: "Blank Document", 
    imageUrl: "./blank-document.svg",
    initialContent: "" 
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "./software-proposal.svg",
    initialContent: `
    <h1>Software Development Proposal</h1>
    <h2>Project Overview</h2>
    <p>Brief description of the proposed software development project.</p>

    <h2>Scope of Work</h2>
    <p>Detailed breakdown of project deliverables and requirements.</p>

    <h2>Timeline</h2>
    <p>Project milestones and delivery schedule.</p>

    <h2>Budget</h2>
    <p>Cost breakdown and payment terms.</p>
    `
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "./project-proposal.svg",
    initialContent: `
    <h1>Project Proposal</h1>
    <h2>Introduction</h2>
    <p>Overview of the project, including purpose and objectives.</p>

    <h2>Project Scope</h2>
    <p>Outline of the key deliverables and project expectations.</p>

    <h2>Methodology</h2>
    <p>Approach and techniques that will be used to complete the project.</p>

    <h2>Expected Outcomes</h2>
    <p>Summary of the anticipated benefits and results.</p>
    `
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "./business-letter.svg",
    initialContent: `
    <p>[Your Name]</p>
    <p>[Your Address]</p>
    <p>[City, State, ZIP Code]</p>
    <p>[Email Address]</p>
    <p>[Date]</p>

    <p>[Recipient's Name]</p>
    <p>[Recipient's Position]</p>
    <p>[Company Name]</p>
    <p>[Company Address]</p>

    <p>Dear [Recipient's Name],</p>

    <p>I am writing to [state the purpose of the letter].</p>

    <p>[Body of the letter explaining the purpose in detail.]</p>

    <p>Thank you for your time and consideration.</p>

    <p>Sincerely,</p>
    <p>[Your Name]</p>
    `
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "./resume.svg",
    initialContent: `
    <h1>[Your Name]</h1>
    <p>[Your Email] | [Your Phone Number] | [Your LinkedIn]</p>

    <h2>Summary</h2>
    <p>Brief summary highlighting key skills and experience.</p>

    <h2>Experience</h2>
    <p><strong>[Job Title]</strong> - [Company Name] (Start Date - End Date)</p>
    <ul>
      <li>Responsibility or achievement</li>
      <li>Responsibility or achievement</li>
    </ul>

    <h2>Education</h2>
    <p>[Degree] - [University Name], [Year]</p>

    <h2>Skills</h2>
    <ul>
      <li>Skill 1</li>
      <li>Skill 2</li>
    </ul>
    `
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "./cover-letter.svg",
    initialContent: `
    <p>[Your Name]</p>
    <p>[Your Address]</p>
    <p>[City, State, ZIP Code]</p>
    <p>[Email Address]</p>
    <p>[Date]</p>

    <p>[Hiring Manager’s Name]</p>
    <p>[Company Name]</p>
    <p>[Company Address]</p>

    <p>Dear [Hiring Manager’s Name],</p>

    <p>I am excited to apply for the [Job Title] position at [Company Name].</p>

    <p>[Body of the letter, discussing qualifications, experience, and enthusiasm for the role.]</p>

    <p>Thank you for your time and consideration. I look forward to the opportunity to discuss further.</p>

    <p>Sincerely,</p>
    <p>[Your Name]</p>
    `
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "./letter.svg",
    initialContent: `
    <p>[Your Name]</p>
    <p>[Your Address]</p>
    <p>[City, State, ZIP Code]</p>
    <p>[Email Address]</p>
    <p>[Date]</p>

    <p>[Recipient’s Name]</p>
    <p>[Recipient’s Address]</p>

    <p>Dear [Recipient's Name],</p>

    <p>[Opening paragraph introducing the reason for writing.]</p>

    <p>[Main body of the letter providing details and context.]</p>

    <p>[Closing paragraph with a call to action or conclusion.]</p>

    <p>Sincerely,</p>
    <p>[Your Name]</p>
    `
  }
];
