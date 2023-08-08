
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "5b55dff0ba70f1803f3ae6d99d6b03fb-us21",
  server: "us21" // e.g. us19
});

export default async (req, res) => {
  const { email } = req.body;
  if (!email || email == "") {
    return res.status(400).json({ code: 400, error: 'Email is required' })
  }
  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed'
    });
    return res.status(201).json({ code: 400, error: '' });
  } catch (error) {
    // Error handling 會放在最後一個章節解釋
    if (error.response.body.title === "Member Exists") {
      return res.status(500).json({ code: 400, error: "MemberExists" });
    }
    return res.status(500).json({ code: 500, error: error.message || error.toString() });
  }
};

