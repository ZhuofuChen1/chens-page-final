/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  universityCoursesSidebar: [
    {
      type: "category",
      label: "University Courses",
      items: [
        "University_courses/intro",
        "University_courses/Computer_Security/computer_security",
        "University_courses/Informatics_Large_Practical/Informatics_Large_Practical",
        "University_courses/Professional_Issues/Professional_Issues",
        "University_courses/Software_Testing/Software_Testing",
      ],
    },
  ],
  externalReadingSidebar: [
    {
      type: "category",
      label: "External Reading",
      items: ["External_reading/intro"],
    },
  ],
};

module.exports = sidebars;



