export interface Tool {
    name: string,
    key: string,
    experienceLevel: any
}

export const tools = new Map<string, Tool>()
tools.set("rails", {
    name: "Ruby on Rails",
    key: "rails",
    experienceLevel: "5+ years of experience"
})
tools.set("ruby", {
    name: "Ruby",
    key: "ruby",
    experienceLevel: "5+ years of experience"
})
tools.set("sass", {
    name: "SASS",
    key: "sass",
    experienceLevel: "6+ years of experience"
})
tools.set("google_api_maps", {
    name: "Google API (maps)",
    key: "google_api_maps",
    experienceLevel: "1 year of experience"
})
tools.set("solr", {
    name: "Solr",
    key: "sorl",
    experienceLevel: "1.5 years of experience"
})
tools.set("php", {
    name: "PHP",
    key: "php",
    experienceLevel: "6+ years of experience"
})
tools.set("postgres", {
    name: "PostgreSQL",
    key: "postgres",
    experienceLevel: "5+ years of experience"
})


const keyToTool = tools.get.bind(tools)

//
export interface Project {
    name: string, 
    key: string, 
    url: string, 
    description: string, 
    personal: string, 
    tools: Array<Tool | undefined>
}
export const projects = new Map<string, Project>()
projects.set("tribuna_autos", {
    name: "Tribuna Autos",
    key: "tribuna_autos",
    url: "http://tribunaautos.com.br/",
    description: "A user to user cars sales website",
    personal: "Helped to develop the architecture of the back end, and to translate the designs into a responsive layout",
    tools: ["rails", "ruby", "sass", "google_api_maps", "solr", "postgres"].map(keyToTool)
})
projects.set("sitac", {
    name: "Sitac",
    key: "sitac",
    description: "A oversight software for Architects and Engineers, used by some CREA's.",
    url: "https://crea-pa.sitac.com.br/publico/",
    personal: "On my internship I was responsible to add new layout features and complex queries/graphs for internal analysis. Also added async features to a mostly static website.",
    tools: ['php', 'postgres'].map(keyToTool)
})