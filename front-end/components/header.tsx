import { useTranslation } from "next-i18next"
import Link from "next/link"
import Language from "./language"

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <header className="p-3 mb-3 border-bottom bg-gradient-to-br from-gray-900 to-gray-600 flex flex-col items-center">
      <a className="flex  mb-2 md:mb-5 text-white-50 text-3xl text-gray-300">
        {t("app.title")}
      </a>
      <nav className="items-center flex md:flex-row flex-col">
        <Link
          href="/"
          className=" px-4 text-xl text-white  hover:bg-gray-600 rounded-lg"
        >
          {t("header.nav.home")}
        </Link>
        <Language/>
      </nav>
    </header>
  )
}

export default Header
