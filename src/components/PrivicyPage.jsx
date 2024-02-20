import React from "react";

const PrivicyPage = () => {
  return (
    <div className="w-full h-full p-7  flex gap-6 flex-col text-xl">
      <h2 className="border-5 font-bold text-5xl sofa">Ags Privacy Policy:</h2>
      <h5>
        At Ags, we value your privacy and are committed to protecting
        your personal information. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your data when you access and use our
        ecommerce website and services. By using Ags, you consent to
        the practices described in this policy.
      </h5>
      <h3 className="font-bold font-2xl">1. Information Collection:</h3>
      <p>
        Personal Information: When you create an account or make a purchase on
        Ags, we may collect personal information such as your name,
        email address, shipping address, and payment details.
      </p>
      <h3 className="font-bold font-2xl">2. Use of Information:</h3>
      <p>
        Order Fulfillment: We use your personal information to process and
        fulfill your orders, deliver products, and provide customer support.
      </p>
      <h3 className="font-bold font-2xl">3. Children's Privacy:</h3>
      <p>
        Ags is not intended for use by children under the age of 18. We
        do not knowingly collect personal information from individuals under 18
        years old. If you are a parent or guardian and believe your child has
        provided us with their data, please contact us to have it removed.
      </p>
    </div>
  );
};

export default PrivicyPage;
