export const contactDetails = [
  {
    icon: "/call.png",
    details: "01733 595092",
  },
  {
    icon: "/location.png",
    details:
      "Unit 2 Northey House, Oxney Road,Peterborough,England, PE1 5YW",
  },
  {
    icon: "/location.png",
    details:
      "Unit 57 C70, The Winning Box, 27-37 Station Rd, Hayes UB3 4DX, United Kingdom",
  },
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
