import Link from "next/link"
import { Download } from "../icons"

const ResumeButton = () => {
  const resumeLink = "https://drive.google.com/file/d/1fSZyeugB-i0imr5G55lmBHr4fpe4xHSb/view?usp=sharing"
  return (
    <button
      className={`flex items-center justify-center rounded-md px-5 w-fit h-11 bg-buttonBg  hover:bg-cyan_dark duration-300 group cursor-pointer`}
    >
      <Link href={resumeLink} target="_blank" rel="noreferrer">
        <div className="flex w-full h-full items-center">
          <span className="text-white text-sm mr-3 group:hover:mr-1 font-normal capitalize tracking-wide">
            view resume
          </span>
          <div className="h-4 w-4">
            <Download height="4" width="4" />
          </div>
        </div>
      </Link>
    </button>
  )
}

export default ResumeButton
