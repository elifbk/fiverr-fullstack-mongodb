import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaPenFancy,
  FaVideo,
  FaRobot,
  FaMusic,
  FaBriefcase,
  FaUserTie,
} from "react-icons/fa";

export const categories = [
  {
    name: "Programming & Tech",
    icon: <FaCode />,
  },
  {
    name: "Graphics & Design",
    icon: <FaPaintBrush />,
  },
  {
    name: "Digital Marketing",
    icon: <FaBullhorn />,
  },
  {
    name: "Writing & Translation",
    icon: <FaPenFancy />,
  },
  {
    name: "Video & Animation",
    icon: <FaVideo />,
  },
  {
    name: "AI Services",
    icon: <FaRobot />,
  },
  {
    name: "Music & Audio",
    icon: <FaMusic />,
  },
  {
    name: "Business",
    icon: <FaBriefcase />,
  },
  {
    name: "Consulting",
    icon: <FaUserTie />,
  },
];

export const infoItems = [
  {
    title: "Save valuable time",
    text: "We handle sourcing, vetting, and screening, so you can focus on driving more business growth.",
  },
  {
    title: "Leverage specialized expertise",
    text: "Our domain experts ensure you’re connected with freelancers who have the right skills and experience your project demands.",
  },
  {
    title: "Receive high-quality results",
    text: "All freelancers are rigorously interviewed and selected to meet your exact standards and expectations.",
  },
];

export const gigInputs = [
  {
    label: "Title",
    name: "title",
  },
  {
    label: "Description",
    name: "description",
    type: "textarea",
  },
  {
    label: "Cover Image",
    name: "coverImage",
    type: "file",
  },
  {
    label: "Images",
    name: "images",
    type: "file",
    multiple: true,
  },
  {
    label: "Package Title",
    name: "packageTitle",
  },
  {
    label: "Package Description",
    name: "packageDescription",
    type: "textarea",
  },
  {
    label: "Features (separate with a ,)",
    name: "packageFeatures",
    type: "textarea",
  },
  {
    label: "Package Price ($)",
    name: "packagePrice",
    type: "number",
    min: 1,
  },
  {
    label: "Number of Revisions",
    name: "packageRevision",
    type: "number",
    min: 1,
    max: 99,
  },
  {
    label: "delivery time (day)",
    name: "packageDuration",
    type: "number",
    min: 1,
    max: 99,
  },
  {
    label: "Category",
    name: "category",
    type: "select",
    options: categories.map((i) => i.name),
  },
];
