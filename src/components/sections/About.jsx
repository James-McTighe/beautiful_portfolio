import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  // list of skills to map
  const frontendSkills = ["React", "Typescript", "Tailwindcss", "Bootstrap"];
  const backendSkills = ["Node.js", "Flask", "AWS", "Prisma", "SQLAlchemy"];
  const mlSkills = ["Numpy", "Pandas", "SK-Learn", "TensorFlow"]
  const simulationSkills = ["Armadillo", "MOPAC", "PSI4", "RDKit"]
  const softwareSkills = ["Docker", "Git", "Github Actions", "Rust"]

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 
          to-cyan-400 bg-clip-text text-transparent text-center"
          >
            {" "}
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passitionate developer with expertise in build scalable
              web appplications and creating innovative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Front End Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Front End</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 py-1 px-3
                  rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition"
                      key={key}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Back End</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3
                  rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition"
                      key={key}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data Science Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Data Science</h3>
                <div className="flex flex-wrap gap-2">
                  {mlSkills.map((tech, key) => (
                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3
                  rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition"
                      key={key}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Computational Chemistry skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Computational Chemistry</h3>
                <div className="flex flex-wrap gap-2">
                  {simulationSkills.map((tech, key) => (
                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3
                  rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition"
                      key={key}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Software Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Software Development Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softwareSkills.map((tech, key) => (
                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3
                  rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition"
                      key={key}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>M.S. in Software Engineering</strong> - Univeristy of California, Berkeley (2024 - 2026)
                </li>
                <li>
                  <strong>B.S. in Chemistry</strong> - Michigan State University (2015 - 2019)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">

                <div className="p-3 rounded-xl border border-transparent hover:border-blue-500 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)] transition-all">
                  <h4 className="font-bold">Software Engineering Intern</h4>
                  <h4>OPENLANE November 2025 - Current</h4>
                  <p className="ml-4">Developed and Maintined React-Next.js applications for vehicle wholesale</p>
                </div>

                <div className="p-3 rounded-xl border border-transparent hover:border-blue-500 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)] transition-all">
                  <h4 className="font-bold">QC Analyst</h4>
                  <h4>Orano Med</h4>
                  <p className="ml-4">Implemented programs using HIT idenficiation to filter probable API candidates for Radio-Ligand Therapies</p>
                </div>

                <div className="p-3 rounded-xl border border-transparent hover:border-blue-500 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)] transition-all">
                  <h4 className="font-bold">Senior Chemist</h4>
                  <h4>Cardinal Health</h4>
                  <p className="ml-4">Created Flask website for tracking and catelogging equipment / inventory.</p>
                </div>

                <div className="p-3 rounded-xl border border-transparent hover:border-blue-500 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)] transition-all">
                  <h4 className="font-bold">Data Analyst</h4>
                  <h4>Emergent BioSolutions</h4>
                  <p className="ml-4">Developed scripts to extract document data using ETL methods to create company LIMS system</p>
                </div>

                <div className="p-3 rounded-xl border border-transparent hover:border-blue-500 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)] transition-all">
                  <h4 className="font-bold">Analytical Chemist</h4>
                  <h4>Midwest Compliance Laboratories</h4>
                  <p className="ml-4">Performed laboratory experiments to determine finished pharmaceutical content and purity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
