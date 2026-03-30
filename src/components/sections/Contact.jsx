import { RevealOnScroll } from "../RevealOnScroll"

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="rounded-xl text-2xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 
          to-cyan-400 bg-clip-text text-transparent text-center"
          >
            Get In Touch
          </h2>
          <form className="space-y-6">

            <div className="relative">
              <h3>Email: <br/>james.mctighe97@gmail.com</h3>
            </div>

            <div className="relative">
              <h3>Phone: <br/>810-623-8291</h3>
            </div>

            <div className="relative">
              <h3>Linkedin:<br/>
                <a
                  href="https://linkedin.com/in/james-mctighe"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  linkedin.com/in/james-mctighe
                </a>
              </h3>
            </div>

          </form>
        </div>
      </RevealOnScroll>
    </section>
  )
}
