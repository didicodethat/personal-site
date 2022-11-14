import { readFileSync } from 'fs'
import type { GetStaticPropsResult, NextPage } from 'next'
import Head from 'next/head'
import path from 'path'
import { cwd } from 'process'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import {tools, projects, Project, Tool} from '../data/career'
import "../styles/Home.module.css"

interface HomePageProps {
  aboutMe : string,
}

const Tool = ({tool} : {tool: Tool}) => {
  return (
    <div>
      <h3>{tool.name}</h3>
    </div>
  )
}

const Project = ({project} : {project : Project}) => {
  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>{project.personal}</p>
      <p>{Array.from(project.tools).map((tool) => (tool?.name)).join(", ")}</p>
    </div>
  )
}

const Home: NextPage<HomePageProps> = ({aboutMe}) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const toggleTheme = () => {
    setTheme((theme) => {
      if (theme === "dark") {
        return "light"
      }
      return "dark"
    })
  }
  return (
    <div className={theme}>
      <Head>
        <title>Mauricio Fidalgo</title>
        <meta name="description" content="A front end software developer" />
      </Head>

      <div className="flex justify-center flex-col dark:bg-slate-800 bg-white transition-all duration-500 dark:text-slate-200 text-slate-900">
        <section className="mx-5 mt-5">
          <div className="flex justify-end">
            <button onClick={toggleTheme} className="font-medium inline-flex bg-slate-200 dark:bg-slate-500 dark:text-slate-100 bold hover:bg-slate-100 dark:hover:bg-slate-400 transition-all self-end px-3 py-1 rounded absolute top-3">{(theme === "dark") ? "light" : "dark"}</button>
          </div>
          
          <ReactMarkdown className='about-me-markdown transition-all duration-500'>{aboutMe}</ReactMarkdown>
        </section>
        <footer className='flex justify-center pb-3 transition-all'>
          <div>Made with <a href="https://nextjs.org">NextJS</a></div>
        </footer>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const page = readFileSync(path.join(cwd(), "docs", "about_me.md")).toString()
  return {
    props : {
      aboutMe : page
    } as HomePageProps
  }
}



export default Home
