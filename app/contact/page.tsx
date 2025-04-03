import Header from "../../components/groupplan/Header";
import FormField from "../../components/contact/Form";
import PhoneInput from "../../components/contact/PhoneInput";
import TextArea from "../../components/contact/Textarea";
import PrivacyCheckbox from "../../components/contact/PrivacyBox";
import SubmitButton from "../../components/contact/SubmitButton";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen font-primary">
      <Header title="Contact Us" />

      <div className="mx-auto max-w-md px-4 py-4 mt-4">
        <p className="mb-6  text-md font-normal text-[#535862]">Please fill out this form.</p>

        <form className="space-y-4">
          <FormField
            id="firstName"
            label="First name"
            placeholder="First name"
            required
          />
          <FormField
            id="lastName"
            label="Last name"
            placeholder="Last name"
            required
          />
          <FormField
            id="email"
            type="email"
            label="Email"
            placeholder="you@company.com"
            required
          />
          <PhoneInput />
          <TextArea
            id="message"
            label="Message"
            placeholder="Leave us a message..."
            required
          />
          <PrivacyCheckbox />
          <SubmitButton label="Send message" />
        </form>
      </div>
    </div>
  );
}
