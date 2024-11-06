import { FC, ReactNode, useEffect, useState } from 'react';

import { ReactComponent as MenuIcon } from "src/assets/svgs/MenuIcon.svg";
import { ReactComponent as CloseIcon } from "src/assets/svgs/CloseIcon.svg";
import { ReactComponent as GitHubFilled } from "src/assets/svgs/GitHubFilled.svg";
import { ReactComponent as LinkedInFilled } from "src/assets/svgs/LinkedInFilled.svg";
import { ReactComponent as EnvelopeFilled } from "src/assets/svgs/EnvelopeFilled.svg";

const themes = {
  blue: "#4A72FF",
  green: "#34D399",
  orange: "#FB923C",
  red: "#EF4444",
  purple: "#A855F7",
}

type ThemeColor = keyof typeof themes

const Sheet: FC<{
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}> = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'visible'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0"
      >
        {children}
      </div>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
    </>
  )
}

const Switch: FC<{
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  id: string
}> = ({ checked, onCheckedChange, id }) => {
  return (
    <button
      role="switch"
      aria-checked={checked}
      id={id}
      onClick={() => onCheckedChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        checked ? 'bg-blue-600' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [theme, setTheme] = useState<ThemeColor>("blue")

  const toggleDark = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        // variant="outline"
        // size="icon"
        // className="fixed bottom-4 right-4 h-14 w-14 rounded-full z-50"
        // style={{ backgroundColor: themes[theme], color: "white" }}
        onClick={toggleMenu}
      >
        <MenuIcon className="h-6 w-6" />
      </button>
      <Sheet isOpen={isOpen} onClose={closeMenu}>
        <div className="flex h-full flex-col justify-between p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 hover:text-[${themes[theme]}] transition-colors`}
                >
                  <GitHubFilled className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="mailto:example@example.com"
                  className={`text-gray-600 hover:text-[${themes[theme]}] transition-colors`}
                >
                  <EnvelopeFilled className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 hover:text-[${themes[theme]}] transition-colors`}
                >
                  <LinkedInFilled className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
              <button
                // variant="ghost" 
                // size="icon" 
                // className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" 
                onClick={closeMenu}>
                <CloseIcon className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            <nav className="space-y-6">
              {[
                "Home",
                "About",
                "Fun",
                "Projects",
                "Experience",
                "Testimonials",
              ].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block text-2xl font-medium transition-colors hover:text-[${
                    themes[theme]
                  }] ${index === 0 ? `text-[${themes[theme]}]` : ""}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="space-y-6 border-t pt-6">
              <div className="flex items-center justify-between">
                <label htmlFor="dark-mode" className="text-base">Dark Mode</label>
                <Switch
                  id="dark-mode"
                  checked={isDark}
                  onCheckedChange={toggleDark}
                />
              </div>
              <div>
                <label htmlFor="theme-color" className="mb-4 block text-base">Theme Color</label>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(themes).map(([colorName, colorValue]) => (
                    <button
                      key={colorName}
                    //   variant="outline"
                    //   size="sm"
                    //   className={`h-8 w-8 rounded-full p-0 ${theme === colorName ? 'ring-2 ring-offset-2' : ''}`}
                    //   style={{ backgroundColor: colorValue }}
                      onClick={() => setTheme(colorName as ThemeColor)}
                    >
                      <span className="sr-only">{colorName}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sheet>
    </>
  )
}
