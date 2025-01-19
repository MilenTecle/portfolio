import emailjs from "emailjs-com";

const sendMail = (e) => {
  console.log("Event object:", e);
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
        alert("Email sent successfully!"); // Display a success message
      },
      (error) => {
        console.error("FAILED", error);
        alert("Failed to send email. Please try again later."); // Display an error message
      }
    );
};

export default sendMail;