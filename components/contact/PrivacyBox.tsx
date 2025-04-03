import Link from "next/link";

export default function PrivacyCheckbox() {
  return (
    <div className="flex items-start mt-3 mb-6">
      <input
        type="checkbox"
        id="privacyPolicy"
        name="privacyPolicy"
        required
        className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 mt-1"
      />
      <label htmlFor="privacyPolicy" className="ml-2 text-[#414651] text-sm">
        You agree to our{" "}
        <Link href="/privacy-policy" className="text-purple-600 underline">
          privacy policy
        </Link>
        .
      </label>
    </div>
  );
}
