import { Tooltip } from "antd";
import { Eye, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageDropdown from "./Language";

export default function Header() {
  const { t } = useTranslation();
  return (
    <div className="bg-light-cart sticky top-0 left-0 z-50 shadow-sm">
      <div className="container1 flex items-center justify-between py-3">
        <div className="flex items-center gap-15">
          <div>
            <Link className="flex items-center gap-2">
              <img
                src="/Images/logo-icon.svg"
                alt="Qovun sayli logo"
                className="h-12"
              />
              <div className="flex flex-col justify-center">
                <h2 className="font-bold text-2xl font-libre">Qovun sayli</h2>
                <p className="font-medium text-[15px] font-source pl-6.5 -mt-2.25">Melon Festival</p>
              </div>
            </Link>
          </div>
          <nav className="flex items-center gap-5 text-light-title font-source font-medium text-lg">
            <Link to={"/"}>{t("header.home")}</Link>
            <Link to={"/about"}>{t("header.about")}</Link>
            <Link to={"/gallery"}>{t("header.gallery")}</Link>
            <Link to={"/news"}>{t("header.news")}</Link>
            <Link to={"/contents"}>{t("header.mundarija")}</Link>
            <Link to={"/nomination"}>{t("header.namination")}</Link>
            <Link to={"/contact"}>{t("header.contact")}</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Tooltip
            title={t("header.accessibility")}
            color="#7d9a24"
            overlayInnerStyle={{
              borderRadius: "8px",
              padding: "5px 12px",
              color: "#fff3cc",
              fontSize: "14px",
            }}
          >
            <button className="border-2 rounded-full py-1 px-2 border-light-mainBtn">
              <Eye className="w-5 h-5 text-light-mainBtn" />
            </button>
          </Tooltip>
          <div>
            <LanguageDropdown />
          </div>
          <div>
            <Tooltip
              title={t("header.login")}
              color="#7d9a24"
              overlayInnerStyle={{
                borderRadius: "8px",
                padding: "5px 12px",
                color: "#fff3cc",
                fontSize: "14px",
              }}
            >
              <button className="bg-light-mainBtn text-light-title flex items-center gap-1 py-1 px-4 rounded-xl">
                <User className="w-4.5 h-4.5" />
                <span className="font-medium text-base">
                  {t("header.login")}
                </span>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
