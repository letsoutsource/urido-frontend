export const contactDetails = [
  {
    icon: "/call.png",
    details: ["01733 201000"],
  },
  {
    icon: "/location.png",
    details:
      "Unit 2 Northey House, Oxney Road,Peterborough,England, PE1 5YW",
  },
  {
    icon: "/clock.png",
    details:
      "Customer Support Centre, Open 24/7, Call or Email for Assistance Anytime",
  }
  
];

export const inputs = [
  {
    name: "Name",
    placeholder: "Name",
    icon: "/user.png",
    validation: {
      required: "Name is required",
      minLength: {
        value: 2,
        message: "Name must be at least 2 characters",
      },
    }
  },
  {
    name: "email",
    placeholder: "Email",
    icon: "/mail.png",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please enter a valid email address",
      },
    },
  },
];
export const subjects = [
  { value: "Complaint About Driver", label: "Complaint About Driver" },
  { value: "Lost Item", label: "Lost Item" },
  { value: "Technical Support", label: "Technical Support" },
  { value: "Payment Issue", label: "Payment Issue" },
  { value: "Booking Problem", label: "Booking Problem" },
  { value: "Other", label: "Other" },
];
