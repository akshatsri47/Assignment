export default function PhoneInput() {
    return (
      <div>
        <label htmlFor="phone" className="block  font-primary font-medium text-[#414651] mb-1">
          Phone number
        </label>
        <div className="flex">
          <select
            name="countryCode"
            id="countryCode"
            className="border border-gray-300 bg-gray-50 rounded-l-md px-3 py-2
                       focus:outline-none focus:ring-1 focus:ring-purple-500 
                       focus:border-purple-500 w-20 mb-6"
          >
            <option value="US">US +1</option>
            <option value="CA">CA +1</option>
            <option value="GB">GB +44</option>
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(555) 000-0000"
            className="flex-1 border border-gray-300 rounded-r-md px-3 py-2 
                       placeholder:text-[#717680] focus:outline-none focus:ring-1 
                       focus:ring-purple-500 focus:border-purple-500 font-normal mb-6"
          />
        </div>
      </div>
    );
  }
  