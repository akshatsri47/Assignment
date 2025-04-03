import {ActionButtonsProps} from "../../../types/index";
  export default function ActionButtons({ onRemoveUser, onUpdateAccess }: ActionButtonsProps) {
    return (
      <div className="flex justify-between gap-4 mt-8">
        <button
          className="w-1/2 py-3 border border-red-500 text-red-500 rounded-md font-medium font-primary"
          onClick={onRemoveUser}
        >
          Remove User
        </button>
        <button
          className="w-1/2 py-3 bg-gradient-to-r from-[#EEAAFD] via-[#8F65F8] to-[#483185] text-white rounded-md font-medium font-primary"
          onClick={onUpdateAccess}
        >
          Update Access
        </button>
      </div>
    );
  }
  