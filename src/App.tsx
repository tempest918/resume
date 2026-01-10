import React, { useState } from 'react';
import { resumeData } from './data';
import Terminal from './components/Terminal';
import { Linkedin, Github, ChevronDown, ChevronUp, Terminal as TerminalIcon, Printer } from 'lucide-react';

const App: React.FC = () => {
  const [showArchive, setShowArchive] = useState<boolean>(false);
  const [showTerminal, setShowTerminal] = useState<boolean>(false);

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-blue-500 selection:text-white pb-20">
      {/* Setting the stage: neat background layers for depth */}
      <div className="fixed inset-0 -z-20 bg-slate-950" />
      <div className="fixed inset-0 -z-10 bg-[url('/assets/background.jpg')] bg-cover bg-center opacity-20" />

      {/* The secret terminal overlay - shh! */}
      <Terminal isOpen={showTerminal} onClose={() => setShowTerminal(false)} />

      {/* Quick access button for the terminal easter egg */}
      <button
        onClick={() => setShowTerminal(true)}
        className="fixed bottom-6 right-6 z-40 bg-slate-900 border border-slate-700 text-blue-400 p-4 rounded-full shadow-2xl hover:scale-110 hover:border-blue-500 transition-all duration-300 group print:hidden"
        title="Open Terminal"
      >
        <TerminalIcon size={24} className="group-hover:animate-pulse" />
      </button>

      {/* Floating Download Resume Button */}
      <a
        href="/resume.pdf"
        download="Anthony_Barnes_Resume.pdf"
        className="fixed top-6 right-6 z-40 bg-slate-900/80 backdrop-blur-sm border border-slate-700 text-slate-300 p-3 rounded-full shadow-xl hover:scale-110 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 group print:hidden"
        title="Download PDF"
      >
        <Printer size={20} />
      </a>

      <header className="pt-24 pb-12 text-center px-4 animate-fade-in-up">
        <img
          src={`https://0.gravatar.com/avatar/${resumeData.contact.gravatarHash}?s=150`}
          className="w-32 h-32 rounded-full mx-auto border-4 border-slate-700/50 shadow-2xl mb-4 hover:scale-105 transition-transform duration-500"
          alt={resumeData.name}
        />
        <h1 className="text-5xl font-bold uppercase tracking-tighter font-oswald text-gradient mb-2">{resumeData.name}</h1>
        <p className="text-white font-medium tracking-widest mt-2 uppercase text-sm">{resumeData.title}</p>

        <div className="mt-6 flex justify-center gap-6 text-lg text-slate-300">
          <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><Linkedin size={20} /> LinkedIn</a>
          <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><Github size={20} /> GitHub</a>
        </div>
      </header>

      <main className="w-[95%] max-w-[1600px] mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12 bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl my-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>

        {/* 1. Profile: Front and center to make a strong first impression */}
        <section className="lg:col-span-3 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold border-b-2 border-slate-700 pb-2 mb-6 uppercase font-oswald inline-block text-gradient">Profile</h2>
          <p className="text-slate-300 leading-relaxed text-lg">{resumeData.profile}</p>
        </section>

        {/* 2. Experience: Stacked strictly for mobile, side-by-side on desktop */}
        <section className="lg:col-span-2 lg:col-start-2 lg:row-start-2">
          <h2 className="text-3xl font-bold border-b-2 border-slate-700 pb-2 mb-8 uppercase font-oswald text-center lg:text-left text-gradient">Experience</h2>
          <div className="space-y-8">
            {resumeData.experience.filter(e => !e.isArchive || showArchive).map((exp, i) => (
              <div key={i} className={`pl-6 border-l-2 border-blue-500/30 relative group ${exp.isArchive ? 'opacity-50' : ''}`}>
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)] group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                <p className="text-white text-sm font-bold">{exp.company} • <span className="text-slate-500 font-normal">{exp.period}</span></p>
                <ul className="mt-3 space-y-2 text-sm text-slate-400 list-disc ml-4">
                  {exp.details.map((d, idx) => <li key={idx}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowArchive(!showArchive)}
            className="mt-8 w-full py-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/50 rounded-lg flex items-center justify-center gap-2 transition-all hover:border-blue-500/50 uppercase font-bold text-xs"
          >
            {showArchive ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {showArchive ? "Hide Earlier Experience" : "Show Earlier Experience"}
          </button>
        </section>

        {/* 3. Skills: Grouped by category for easier scanning */}
        <section className="lg:col-span-1 lg:col-start-1 lg:row-start-2">
          <h2 className="text-3xl font-bold border-b-2 border-slate-700 pb-2 mb-6 uppercase font-oswald text-center lg:text-left text-gradient">Skills</h2>
          {Object.entries(resumeData.skills).map(([cat, list]) => (
            <div key={cat} className="mb-6">
              <h3 className="text-white font-bold mb-3 text-sm uppercase font-oswald text-center lg:text-left tracking-wider">{cat}</h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {list.map(s => (
                  <span key={s} className="bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-700/50 text-xs text-slate-300 shadow-lg hover:border-blue-500/50 hover:text-blue-400 hover:shadow-blue-500/20 transition-all duration-300 cursor-default">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* 4. Projects: Grid layout giving each project enough breathing room */}
        <section className="lg:col-span-3 lg:row-start-3">
          <h2 className="text-3xl font-bold border-b-2 border-slate-700 pb-2 mb-8 uppercase font-oswald text-center text-gradient">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.projects.map((proj, i) => {
              const Container = proj.linkUrl ? 'a' : 'div';
              const props = proj.linkUrl ? {
                href: proj.linkUrl,
                target: "_blank",
                rel: "noopener noreferrer"
              } : {};

              return (
                <Container
                  key={i}
                  {...props}
                  className={`group p-6 bg-slate-900/40 backdrop-blur-md rounded-xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/10 flex flex-col h-full ${proj.linkUrl ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase font-oswald">{proj.title}</h3>
                    {proj.linkUrl && <Github size={20} className="text-slate-500 group-hover:text-white transition-colors" />}
                  </div>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {proj.technologies.map(tech => (
                      <span key={tech} className="text-xs font-bold text-white bg-blue-900/20 px-2 py-1 rounded">{tech}</span>
                    ))}
                  </div>
                </Container>
              );
            })}
          </div>
        </section>

        {/* 5. Education: Keeping this compact but visible */}
        <section className="lg:col-span-2 lg:col-start-2 lg:row-start-4">
          <h2 className="text-3xl font-bold border-b-2 border-slate-700 pb-2 mb-8 uppercase font-oswald text-center lg:text-left text-gradient">Education</h2>
          <div className="space-y-6">
            {resumeData.education.map((edu, i) => (
              <div key={i} className="flex flex-col sm:flex-row justify-between items-center sm:items-baseline border-b border-slate-800 pb-4 last:border-0 hover:bg-slate-900/40 p-3 rounded-lg transition-colors text-center sm:text-left group cursor-default">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{edu.title}</h3>
                  <p className="text-white text-sm font-bold">{edu.institution}</p>
                </div>
                <span className="text-slate-500 text-sm">{edu.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Badges: Showing off the certifications */}
        <section className="lg:col-span-1 lg:col-start-1 lg:row-start-4">
          <h2 className="text-3xl font-bold border-b-2 border-slate-700 pb-2 mb-8 uppercase font-oswald text-center lg:text-left text-gradient">Badges</h2>
          <div className="grid grid-cols-2 gap-4">
            {resumeData.certifications.map((cert, i) => (
              <a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 w-full hover:scale-105 transition-all duration-300 text-center"
              >
                <img src={`/assets/${cert.img}`} alt={cert.title} className="w-16 h-16 object-contain filter drop-shadow-lg" />
                <div>
                  <span className="text-slate-200 font-bold block text-sm leading-tight group-hover:text-blue-400 transition-colors">{cert.title}</span>
                  <span className="text-slate-500 text-xs block mt-1">{cert.issuer}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

      </main>

      {/* Dedicated contact area to drive engagement */}
      <section className="w-[95%] max-w-2xl mx-auto px-8 py-12 bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-3xl font-bold border-b-2 border-slate-700 pb-2 mb-8 uppercase font-oswald text-center text-gradient">Contact Me</h2>
        <form
          action="https://formsubmit.co/fff1c10ad16aee54e0bb252fbd0ea8b0"
          method="POST"
          className="space-y-4"
        >
          {/* Magic fields for FormSubmit configuration */}
          <input type="hidden" name="_subject" value="New submission from Resume Site" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={window.location.href} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-bold text-slate-400 uppercase">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-slate-900/50 border border-slate-700 rounded p-2 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-bold text-slate-400 uppercase">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-slate-900/50 border border-slate-700 rounded p-2 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-sm font-bold text-slate-400 uppercase">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full bg-slate-900/50 border border-slate-700 rounded p-2 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
            ></textarea>
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-2 px-8 rounded transition-all transform hover:scale-105 uppercase tracking-wider shadow-lg hover:shadow-blue-500/20"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      <footer className="text-center py-4 text-slate-400 text-sm mt-12 mb-8">
        <p>&copy; 2025 Anthony Lane Barnes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;