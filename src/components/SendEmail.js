import emailjs from "emailjs-com";

const sendMail = (e, setNotification) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Use the EmailJS service and template IDs to send an email
  emailjs
    .send(
      "service_5h7u1ni",
      "template_b3t9q1g",
      {
        from_name: e.target.name.value,
        from_email: e.target.email.value,
        project_request: e.target.projectsummary.value,
      },
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then(
      (response) => {
        console.log("SUCCESS", response);
        e.target.reset(); // Reset the form fields
        setNotification({
          message: "Thank you for reaching out! Your message has been sent successfully. I'll get back to you as soon as possible.",
          type: "success",
        });
        setTimeout(() => setNotification(null), 5000); // Auto-dismiss notification after 5 seconds
      },
      (error) => {
        console.error("FAILED", error);
        setNotification({
          message: "Oops! Something went wrong while sending your message. Please check your internet connection and try again. If the issue persists, feel free to email me directly at milen.tecle@gmail.com.",
          type: "error",
        });
        setTimeout(() => setNotification(null), 5000);
      }
    );
};

export default sendMail;