import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "uz", name: "Özbek", flag: "fi-uz" },
  { code: "ru", name: "Русский", flag: "fi-ru" },
  { code: "en", name: "English", flag: "fi-gb" },
];

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const dropdownRef = useRef(null);

  const [isLangOpen, setIsLangOpen] = useState(false);

  const currentLangCode = i18n.language?.split("-")[0] || "uz";
  const currentLang =
    languages.find((item) => item.code === currentLangCode) || languages[0];

  const handleSelectLanguage = (newLangCode) => {
    if (newLangCode !== currentLangCode) {
      i18n.changeLanguage(newLangCode);
    }
    setIsLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setIsLangOpen((prev) => !prev)}
        className="cursor-pointer px-2 py-1"
      >
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            <span
              className={`fi ${currentLang.flag} fis rounded-full text-xl`}
            ></span>
            <span className="font-medium text-light-title">{currentLang.name}</span>
          </div>
          <div
            className={`transition-transform duration-200 text-light-title ${isLangOpen ? "rotate-180" : "rotate-0"}`}
          >
            <ChevronDown />
          </div>
        </div>
      </button>
      {isLangOpen && (
        <div className="absolute top-full z-50 left-0 pt-2 w-32 shadow-lg overflow-hidden rounded-lg">
          <div className="bg-light-cart overflow-hidden rounded-lg">
            {languages.map((item) => (
              <button
                key={item.code}
                onClick={() => handleSelectLanguage(item.code)}
                className={`cursor-pointer w-full px-3 py-2 flex items-center gap-2 overflow-hidden transition-colors duration-300 ${currentLangCode === item.code ? "bg-light-mainBtn text-dark-title" : "hover:bg-light-mainBtn text-light-title hover:text-dark-title"}`}
              >
                <span
                  className={`fi ${item.flag} fis rounded-full text-lg`}
                ></span>
                <span className="text-lg">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
