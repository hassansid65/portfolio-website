"use client"

import { experience, education } from "@/lib/site-data"

export default function MobileExperience() {
  return (
    <section id="education" className="relative py-14 px-[22px]">
      <p data-reveal className="text-[11px] tracking-[.18em] uppercase text-[#F107A3] mb-2">
        Journey
      </p>
      <h2 data-reveal className="text-[28px] font-bold leading-[1.05] text-white mb-6">
        Experience
      </h2>

      <div className="border-l-2 border-white/10 pl-[22px] ml-1.5 flex flex-col gap-[26px] mb-11">
        {experience.map((exp) => (
          <div key={exp.title + exp.company} data-reveal className="relative">
            <span className="absolute -left-[30px] top-[5px] w-3.5 h-3.5 rounded-full bg-[#0a0a0c] border-2 border-[#00E5FF]" />
            <h3 className="text-[17px] font-bold text-white mb-1 leading-[1.25]">{exp.title}</h3>
            <p className="text-[13px] font-medium text-[#F107A3] mb-1">{exp.company}</p>
            <span className="block text-[10px] tracking-[.14em] uppercase text-[#737378] mb-2">
              {exp.date}
            </span>
            <p className="text-[13px] leading-[1.6] text-[#a3a3a8]">{exp.desc}</p>
          </div>
        ))}
      </div>

      <h2 data-reveal className="text-[28px] font-bold leading-[1.05] text-white mb-6">
        Education
      </h2>

      <div className="border-l-2 border-white/10 pl-[22px] ml-1.5 flex flex-col gap-[26px]">
        {education.map((edu) => (
          <div key={edu.degree} data-reveal className="relative">
            <span className="absolute -left-[30px] top-[5px] w-3.5 h-3.5 rounded-full bg-[#0a0a0c] border-2 border-[#F107A3]" />
            <h3 className="text-[15px] font-bold text-white mb-1 leading-[1.3]">{edu.degree}</h3>
            <p className="text-[13px] font-medium text-[#00E5FF] mb-1">{edu.school}</p>
            <span className="text-[10px] tracking-[.14em] uppercase text-[#737378]">{edu.date}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
