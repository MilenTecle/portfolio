import emailjs from "emailjs-com";

const sendMail = (e) => {
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
        alert("Thank you for reaching out! Your message has been sent successfully!. I'll get back to you as soon as possible."); // Display a success message
      },
      (error) => {
        console.error("FAILED", error);
        alert("Oops! Something went wrong while sending your message. Please check you internet connection and try again. If the issue persists, feel free to email me directly at milen.tecle@gmail.com"); // Display an error message
      }
    );
};

export default sendMail;