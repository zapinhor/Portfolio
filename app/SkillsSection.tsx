const groups = [
  { title: "Linguagens", items: [["C#", "C#"], ["JavaScript", "JS"], ["TypeScript", "TS"], ["Python", "PY"], ["HTML", "HTML"], ["CSS", "CSS"]] },
  { title: "Front-end", items: [["React", "RE"], ["Next.js", "N"], ["Tailwind CSS", "TW"]] },
  { title: "Back-end e dados", items: [["Supabase", "SB"], ["PostgreSQL", "PG"], ["APIs", "API"], ["IndexedDB", "IDB"], ["Dexie", "DX"]] },
  { title: "Jogos e experiências", items: [["Unity", "U"], ["Unreal Engine 5", "UE"], ["PixiJS", "PX"], ["Construct 3", "C3"], ["Ren'Py", "RP"]] },
  { title: "Ferramentas", items: [["Git", "GIT"], ["GitHub", "GH"], ["WordPress", "WP"], ["Recharts", "RC"]] }
];
export default function SkillsSection() { return <section className="skills-section" id="habilidades" data-reveal><div className="skills-heading"><p className="label">02 / Habilidades</p><div><h2>Tecnologias que uso para construir.</h2><p>Uma base multidisciplinar para criar jogos, interfaces e aplicações completas — da lógica à publicação.</p></div></div><div className="skill-groups">{groups.map(group => <div className="skill-group" key={group.title}><h3>{group.title}</h3><div>{group.items.map(([name, mark]) => <span className="skill-item" key={name}><b aria-hidden="true">{mark}</b>{name}</span>)}</div></div>)}</div></section>; }
