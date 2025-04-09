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
      required: "Name?",
    }
  },
  {
    name: "email",
    placeholder: "Email",
    icon: "/mail.png",
    validation: {
      required: "Email?",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please enter a valid email address",
      },
    },
  },
];
export const subjects = [
  { value: "complaintaboutdriver", label: "Complaint About Driver" },
  { value: "lostitem", label: "Lost Item" },
  { value: "technicalsupport", label: "Technical Support" },
  { value: "paymentissue", label: "Payment Issue" },
  { value: "bookingproblem", label: "Booking Problem" },
  { value: "other", label: "Other" },
];
