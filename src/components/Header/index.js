import { useState } from "react"
import styles from '@/styles/Home.module.css'
import Router from "next/router"
const Header = () => {
  const styles = {
    backgroundColor: '#ffffff',
    textAlign: 'center',
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '20px',
    marginTop: '20px'

  }

  const [contentList, setContentList] = useState([
    {
      title: "Home",
      url: "/"
    },
    {
      title: "About",
      url: "/AboutPage"
    },
    {
      title: "Blog",
      url: "/BlogPage"
    },
    {
      title: "Subscribe",
      url: "/Subscribe"
    },
    {
      title: "Contact",
      url: "/ContactPage"
    },
    {
      title: "Video",
      url: "",
      type: "link"
    }
  ])

  const handleClick = (item) => {
    if (item.type && item.type === "link") {
      window.open(item.url, "_blank")
    } else {
      Router.push(item.url)
    }
  }

  return (
    <>
      <div style={styles} className="flex flex-col justify-center rounded">
        <div>
          <span className="mt-2 inline-flex items-center font-bold text-3xl text-[#5F411F]">Welcome to Coffee Outlets</span>
        </div>
        <div>
          <div className="h-10 space-x-10 w-11/12 mt-2 mb-2 inline-flex items-center font-bold text-l  justify-center bg-[#5F411F]">
            {
              contentList.map((item, index) => {
                return (
                  <span key={item.title} className="text-[#ffffff] hover:text-xl hover:cursor-pointer" onClick={() => handleClick(item)}>
                    {item.title}
                  </span>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Header