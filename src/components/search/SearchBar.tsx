import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="p-4">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search movies..."
          className="
          w-full
          rounded-full
          border 
          border-gray-700
          bg-white/10 
          dark:bg-white/5
          py-3
          pl-11
          pr-12
          text-black
          dark:text-white
          placeholder:text-gray-400
          "
        />

        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-700 dark:hover:text-white"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  )
}