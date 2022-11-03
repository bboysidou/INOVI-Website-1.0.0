// Email.send({
//   SecureToken: "1601e8c1-8c91-409e-946f-7a3f8806c124",
//   To: "them@website.com",
//   From: "you@isp.com",
//   Subject: "This is the subject",
//   Body: "And this is the body",
// }).then((message) => alert(message));

const sendMail = (e) => {
  e.preventDefault();
  let phone = document.querySelector(".inputs-one-phone").value;
  let email = document.querySelector(".inputs-one-email").value;
  let msg = document.querySelector(".inputs-one-direct-msg").value;
  Email.send({
    SecureToken: "d51d4859-ce1b-433f-9ddc-cc86145680ec",
    To: "contact.inovigroup@gmail.com",
    From: "bedrani.sidali.94@gmail.com",
    Subject: "This is a test subject",
    Body: "And this is a test body",
  }).then((message) => {
    console.log(message);

    alert(message);
  });
  // Email.send({
  //   Host: "smtp.gmail.com",
  //   Username: "contact.inovigroup@gmail.com",
  //   Password: "htjs43kh6t9cjyq",
  //   To: "contact.inovigroup@gmail.com",
  //   From: "bedrani.sidali.94@gmail.com",
  //   Subject: "This is a test subject",
  //   Body: "And this is a test body",
  // }).then((message) => alert(message));
};

document.querySelector(".contact-form").addEventListener("submit", sendMail);
