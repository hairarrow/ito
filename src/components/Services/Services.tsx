import ServicesStyles from "./Services.styles";
import { useRef } from "react";
import useAnimation from "./Services.animation";
import { useTranslation } from "react-i18next";

// Services animation located in Conversation

const Service = ({ id, title, description, tags }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();
  useAnimation(containerRef, id);
  return (
    <article ref={containerRef} key={id} className={`service service--${id}`}>
      <h2 className="service-title">{t(title)}</h2>
      <p className="service-description">{t(description)}</p>
      <ul className="service-tags">
        {tags.map((tag) => (
          <li key={tag} className="service-tag">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
};

const Services = () => {
  return (
    <ServicesStyles>
      <span className="services-container">{SERVICES.map(Service)}</span>
    </ServicesStyles>
  );
};

const SERVICES = [
  {
    id: "tech",
    title: "services.technology.title",
    description: "services.technology.description",
    tags: [
      "SOLID Code",
      "Domain-Driven Design",
      "TDD",
      "Agile",
      "Scalable Microservices",
      "Event-driven Architectures",
      "Databases",
      "Identity Management",
      "Cloud Native",
      "Devops",
      "QA",
      "CMS",
      "CRM",
      "E-commerce",
      "Marketing Technology",
      "Server-Side Rendering",
      "Mobile and Web",
      "Search",
    ],
  },
  {
    id: "design",
    title: "services.design.title",
    description: "services.design.description",
    tags: [
      "Field Studies",
      "User Interviews",
      "Stakeholder Interviews",
      "Persona Building",
      "Prototype Feedback and Testing",
      "User Stories",
      "Qualitative Usability Testing",
      "Feedback Review",
      "High Fidelity Prototypes",
      "Sketch",
      "Adobe CS",
      "Origami",
    ],
  },
  {
    id: "access",
    title: "services.accessibility.title",
    description: "services.accessibility.description",
    tags: [
      "AATT (Automated Accessibility Testing Tool)",
      "A11Y",
      "Storybook Accessibility Report",
      "Checklist",
      "Code Linting for Accessibility Problems",
      "Aria-*",
      "HTML 5",
    ],
  },
  {
    id: "analytics",
    title: "services.analytics.title",
    description: "services.analytics.description",
    tags: [
      "Mixpanel",
      "Measurement Strategy",
      "Tagging Plans",
      "Platform Integrations",
      "Report Development and Execution",
      "Attribution Modeling",
      "Customer Segmentation",
      "A/B Test Design",
      "Mutivariate Test Design",
      "Data Visualization",
    ],
  },
];

export default Services;
