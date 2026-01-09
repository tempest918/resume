import React, { useState } from 'react';
import { resumeData } from './data';
import { Mail, MapPin, Linkedin, Github, ChevronDown, ChevronUp } from 'lucide-react';

const App: React.FC = () => {
  const [showArchive, setShowArchive] = useState<boolean>(false);

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      {/* Fixed Background Layers */}
      <div className="fixed inset-0 -z-20 bg-slate-950" />
      <div className="fixed inset-0 -z-10 bg-[url('/assets/background.jpg')] bg-cover bg-center opacity-20" />

      <header className="pt-24 pb-12 text-center px-4">
        <img
          src={`https://0.gravatar.com/avatar/${resumeData.contact.gravatarHash}?s=150`}
          className="w-32 h-32 rounded-full mx-auto border-4 border-slate-700/50 shadow-2xl mb-4"
          alt={resumeData.name}
        />
        <h1 className="text-4xl font-bold text-white uppercase tracking-tighter font-oswald">{resumeData.name}</h1>
        <p className="text-blue-400 font-medium tracking-widest mt-2 uppercase text-sm">{resumeData.title}</p>

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-300">
          <span className="flex items-center gap-2"><MapPin size={16} /> {resumeData.contact.location}</span>
          <span className="flex items-center gap-2"><Mail size={16} /> {resumeData.contact.email}</span>
          <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><Linkedin size={16} /> LinkedIn</a>
          <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><Github size={16} /> GitHub</a>
        </div>
      </header>

      <main className="w-[95%] max-w-[1600px] mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12 bg-black/50 rounded-lg shadow-2xl backdrop-blur-sm my-12 border border-white/10">

        {/* 1. Profile - Full Width Top */}
        <section className="lg:col-span-3 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-4 uppercase font-oswald inline-block">Profile</h2>
          <p className="text-slate-300 leading-relaxed text-lg">{resumeData.profile}</p>
        </section>

        {/* 2. Experience - Mobile: 2nd, Desktop: Right Column (Row 2) */}
        <section className="lg:col-span-2 lg:col-start-2 lg:row-start-2">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-8 uppercase font-oswald text-center lg:text-left">Experience</h2>
          <div className="space-y-8">
            {resumeData.experience.filter(e => !e.isArchive || showArchive).map((exp, i) => (
              <div key={i} className={`pl-6 border-l-2 border-slate-800 relative ${exp.isArchive ? 'opacity-50' : ''}`}>
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-500" />
                <h3 className="text-lg font-bold text-white leading-tight">{exp.title}</h3>
                <p className="text-blue-400 text-sm font-bold">{exp.company} • <span className="text-slate-500 font-normal">{exp.period}</span></p>
                <ul className="mt-3 space-y-2 text-sm text-slate-400 list-disc ml-4">
                  {exp.details.map((d, idx) => <li key={idx}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowArchive(!showArchive)}
            className="mt-8 w-full py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center gap-2 transition-colors uppercase font-bold text-xs"
          >
            {showArchive ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {showArchive ? "Hide Earlier Experience" : "Show Earlier Experience"}
          </button>
        </section>

        {/* 3. Skills - Mobile: 3rd, Desktop: Left Column (Row 2) */}
        <section className="lg:col-span-1 lg:col-start-1 lg:row-start-2">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-6 uppercase font-oswald text-center lg:text-left">Skills</h2>
          {Object.entries(resumeData.skills).map(([cat, list]) => (
            <div key={cat} className="mb-4">
              <h3 className="text-blue-400 font-bold mb-2 text-sm uppercase font-oswald text-center lg:text-left">{cat}</h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {list.map(s => (
                  <span key={s} className="bg-slate-800 px-2 py-1 rounded border border-slate-700 text-xs">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* 4. Education - Mobile: 4th, Desktop: Right Column (Row 3) */}
        <section className="lg:col-span-2 lg:col-start-2 lg:row-start-3">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-8 uppercase font-oswald text-center lg:text-left">Education</h2>
          <div className="space-y-6">
            {resumeData.education.map((edu, i) => (
              <div key={i} className="flex flex-col sm:flex-row justify-between items-center sm:items-baseline border-b border-slate-800 pb-4 last:border-0 hover:bg-slate-900/50 p-2 rounded transition-colors text-center sm:text-left">
                <div>
                  <h3 className="text-lg font-bold text-white">{edu.title}</h3>
                  <p className="text-blue-400 text-sm font-bold">{edu.institution}</p>
                </div>
                <span className="text-slate-500 text-sm">{edu.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Badges - Mobile: 5th, Desktop: Left Column (Row 3) */}
        <section className="lg:col-span-1 lg:col-start-1 lg:row-start-3">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-8 uppercase font-oswald text-center lg:text-left">Badges</h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {resumeData.certifications.map((cert, i) => (
              <a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-3 flex flex-col items-center gap-2 w-full hover:scale-105 transition-transform duration-300 border-2 border-transparent hover:border-blue-500 shadow-xl text-center"
              >
                <img src={`/assets/${cert.img}`} alt={cert.title} className="w-16 h-16 object-contain" />
                <div>
                  <span className="text-slate-900 font-bold block text-sm leading-tight">{cert.title}</span>
                  <span className="text-slate-500 text-xs block">{cert.issuer}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 6. Contact Form - Mobile: 6th, Desktop: Full Width Bottom (Row 4) */}
        <section className="lg:col-span-3 lg:row-start-4">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-8 mt-4 uppercase font-oswald text-center">Contact Me</h2>
          <form
            action="https://formsubmit.co/fff1c10ad16aee54e0bb252fbd0ea8b0"
            method="POST"
            className="max-w-xl mx-auto space-y-4"
          >
            {/* Hidden Config Fields */}
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
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded transition-colors uppercase tracking-wider"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

      </main>

      <footer className="text-center py-4 text-slate-400 text-sm mt-12 mb-8">
        <p>&copy; 2025 Anthony Lane Barnes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;