import { images } from "../../config/images";

export const UsersPageProps = {
  user_page: {
    heading_block: {
      title: "Users",
      btn_link: "Add User",
      placeholder: "Search users…",
    },
    modal_delete: {
      title: "Please Confirm",
      para: (
        <>
          Are you sure you want to delete <span>“Tomas Lonsetteig”</span> User?
        </>
      ),
      btn_delete: "Yes, Delete",
      path_delete: "/",
      btn_cancel: "Cancel",
      path_cancel: "/",
    },
  },
  add_user_page: {
    assign_role: {
      title: (
        <>
          Assign Role’s<span>*</span>
        </>
      ),
      link_txt: "+ Add Role",
      Manager_Role: [
        { label: "Create Learning" },
        { label: "Customize Mails" },
        { label: "Onboard Team" },
        { label: "Team Efforts Distrib." },
        { label: "Round Analytics" },
        { label: "Edit Learning Path" },
        { label: "Assign Cours" },
        { label: "Assign Cours" },
        { label: "Create Training Plan" },
        { label: "Create Team" },
        { label: "View Report" },
        { label: "View Progress" },
      ],
      Team_Role: [
        { label: "Create Learning" },
        { label: "Onboard Team" },
        { label: "Customize Mails" },
        { label: "Team Efforts Distrib." },
        { label: "Round Analytics" },
        { label: "Edit Learning Path" },
        { label: "Add/Remove User" },
        { label: "Assign Cours" },
      ],
      Employee_Role: [
        { label: "Create Learning" },
        { label: "Onboard Team" },
        { label: "Customize Mails" },
        { label: "Team Efforts Distrib." },
        { label: "Round Analytics" },
        { label: "Edit Learning Path" },
        { label: "Add/Remove User" },
      ],
    },
  },
  quick_user_page: {
    img: images.tomasuser,
    user_name: "John Smith",
    user_id: "john@internia.com",
    user_date: [
      {
        date: "3 May, 2021",
        status: "Last Login",
      },
      {
        date: "10 Feb, 2020",
        status: "Enrolled Date",
      },
    ],
    assign_role: {
      title: (
        <>
          Assign Role’s<span>*</span>
        </>
      ),
      link_txt: "+ Add Role",
      Manager_Role: [
        { label: "Create Learning" },
        { label: "Customize Mails" },
        { label: "Onboard Team" },
        { label: "Team Efforts Distrib." },
        { label: "Round Analytics" },
        { label: "Edit Learning Path" },
        { label: "Assign Cours" },
        { label: "Assign Cours" },
        { label: "Create Training Plan" },
        { label: "Create Team" },
        { label: "View Report" },
        { label: "View Progress" },
      ],
      Team_Role: [
        { label: "Create Learning" },
        { label: "Onboard Team" },
        { label: "Customize Mails" },
        { label: "Team Efforts Distrib." },
        { label: "Round Analytics" },
        { label: "Edit Learning Path" },
        { label: "Add/Remove User" },
        { label: "Assign Cours" },
      ],
      Employee_Role: [
        { label: "Create Learning" },
        { label: "Onboard Team" },
        { label: "Customize Mails" },
        { label: "Team Efforts Distrib." },
        { label: "Round Analytics" },
        { label: "Edit Learning Path" },
        { label: "Add/Remove User" },
      ],
    },
    courses_block: {
      title: " Assign Courses",
      label: "10 Courses",
      list_item: [
        {
          src: images.awl,
          title_txt: "AWS Certified Cloud Practitioner",
        },
        {
          src: images.java,
          title_txt: "Java Spring Framework basics course",
        },
        {
          src: images.ansible,
          title_txt: "Ansible Basics",
        },
        {
          src: images.lambda,
          title_txt: "AWS Lambda and API Gateway",
        },
        {
          src: images.google,
          title_txt: "Google Cloud Certified Associate Cloud Engineer",
        },
        {
          src: images.awl,
          title_txt: "AWS Certified Cloud Practitioner",
        },
        {
          src: images.java,
          title_txt: "Java Spring Framework basics course",
        },
        {
          src: images.ansible,
          title_txt: "Ansible Basics",
        },
        {
          src: images.lambda,
          title_txt: "AWS Lambda and API Gateway",
        },
        {
          src: images.google,
          title_txt: "Google Cloud Certified Associate Cloud Engineer",
        },
      ],
    },
    learning_block: {
      title: "Assign Learning Paths",
      label: "3 Learning Paths",
      list_item: [
        {
          title_txt: "AWS Certified Cloud Practitioner",
          img: images.learning_img,
        },
        {
          title_txt: "Java Spring Framework basics course",
          img: images.learning_img,
        },
        {
          title_txt: "Ansible Basics",
          img: images.learning_img,
        },
      ],
    },
    training_block: {
      title: "Assign Training Plans",
      label: "3 Learning Paths",
      list_item: [
        {
          title_txt: "AWS Certified Cloud Practitioner",
          img: images.learning_img,
        },
        {
          title_txt: "Java Spring Framework basics course",
          img: images.learning_img,
        },
        {
          title_txt: "Ansible Basics",
          img: images.learning_img,
        },
      ],
    },
    subscrip_bundle: {
      title: "Assigned Subscription Bundle",
      label: "3 Subscrip. Bundle",
      list_item: [
        {
          title_txt: "AWS Certified Cloud Practitioner",
          img: images.bundle_img,
        },
        {
          title_txt: "Java Spring Framework basics course",
          img: images.bundle_img,
        },
        {
          title_txt: "Ansible Basics",
          img: images.bundle_img,
        },
      ],
    },
    part_teams: {
      title: "Part of teams",
      label: "3 Teams",
      list_item: [
        {
          title_txt: "AWS Certified Cloud Practitioner (30 Users)",
          img: images.team_img,
        },
        {
          title_txt: "Azure Network Engineer (14 Users)",
          img: images.team_img,
        },
        {
          title_txt: "Salesforce Certifications Learner (18 Users)",
          img: images.team_img,
        },
      ],
    },
  },
};
export default UsersPageProps;
