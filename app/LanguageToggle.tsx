"use client";

import { useEffect, useRef, useState } from "react";

const translations: Record<string, string> = {
  "Jogos": "Games", "Sobre mim": "About", "Contato": "Contact", "Disponível para projetos": "Available for projects",
  "Fechar": "Close", "Navegação principal": "Main navigation", "Selecionar idioma": "Choose language", "Retrato profissional de Danilo Petraglia": "Professional portrait of Danilo Petraglia",
  "Desenvolvedor de jogos": "Game and", "e web": "full-stack web", "full stack.": "developer.", "Conhecer meus projetos": "Explore my work",
  "Game Developer": "Game Developer", "Full Stack Web Developer": "Full Stack Web Developer", "Osasco · SP": "Osasco · Brazil",
  "Crio jogos, sites, aplicações web e experiências digitais completas, unindo programação, identidade visual e atenção à experiência de uso.": "I create games, websites and complete digital experiences, combining programming, visual identity and careful attention to usability.",
  "01 / Sobre mim": "01 / About", "Curiosidade que virou": "Curiosity turned", "ofício.": "into a career.",
  "Sempre tive interesse por tecnologia e curiosidade para entender como as coisas funcionam. Grande parte do que aprendi começou de forma autodidata, por meio de vídeos, pesquisas e, principalmente, da prática. Ao longo dos anos, explorei diferentes áreas de hardware e software, testando ferramentas, resolvendo problemas e transformando curiosidade em conhecimento técnico.": "I have always been interested in technology and curious about how things work. Much of what I know began through self-directed learning: videos, research and, above all, hands-on practice. Over the years, I explored hardware and software, tested tools, solved problems and turned curiosity into technical knowledge.",
  "Minha relação com os jogos também começou cedo. Além de jogar, sempre tive interesse em observar como cada experiência era construída: suas mecânicas, ambientação, narrativa, sons e formas de interação. Essa paixão me levou ao desenvolvimento de jogos, área em que atuo há aproximadamente três anos, trabalhando principalmente com programação, sistemas e mecânicas de gameplay.": "My relationship with games also began early. Beyond playing them, I was interested in how each experience was built: its mechanics, atmosphere, narrative, sound and interactions. That passion led me to game development, a field I have worked in for approximately three years, primarily focused on programming, systems and gameplay mechanics.",
  "Paralelamente, atuo há cerca de quatro anos com desenvolvimento web. Trabalho na criação de sites institucionais, landing pages, e-commerce e aplicações responsivas, utilizando HTML, CSS e JavaScript, além de WordPress, integrações com APIs e recursos de back-end conforme as necessidades de cada projeto.": "Alongside game development, I have spent around four years building for the web. I create institutional websites, landing pages, e-commerce experiences and responsive applications using HTML, CSS, JavaScript, WordPress, API integrations and back-end resources selected for each project.",
  "Hoje, busco evoluir como desenvolvedor de jogos e desenvolvedor web full stack, contribuindo tanto na construção técnica quanto na definição de soluções claras e funcionais. Meu objetivo é transformar ideias em produtos digitais bem estruturados, com identidade e uma experiência consistente para quem utiliza.": "Today, I am focused on growing as both a game developer and a full-stack web developer. I contribute to technical implementation and clear, functional solutions, turning ideas into well-structured digital products with a distinct identity and a consistent user experience.",
  "Experiência profissional": "Professional experience", "nov/2024 — ago/2025": "Nov 2024 — Aug 2025",
  "Atuação com moderação de conteúdo e atendimento em alto volume, com média de 700 tickets por dia e desempenho acima de 90% nos indicadores de qualidade.": "High-volume content moderation and support, averaging 700 tickets per day while maintaining quality performance above 90%.",
  "02 / Habilidades": "02 / Skills", "Tecnologias que uso para construir.": "Technologies I use to build.", "Uma base multidisciplinar para criar jogos, interfaces e aplicações completas — da lógica à publicação.": "A multidisciplinary toolkit for creating games, interfaces and complete applications — from logic to launch.",
  "Linguagens": "Languages", "Back-end e dados": "Back-end & data", "Jogos e experiências": "Games & interactive", "Ferramentas": "Tools",
  "03 / Projetos acadêmicos": "03 / Academic games", "semestre": "semester", "Tecnologias usadas": "Technology", "Minha atuação": "My role", "Desenvolvimento": "Development", "Alcance": "Reach", "Ver no": "View on",
  "04 / Projeto em destaque": "04 / Featured project", "Aplicação web · JavaScript": "Web application · JavaScript", "Interface atual da aplicação web": "Current web application interface", "Início": "Started", "Agosto de 2026": "August 2026", "Em desenvolvimento constante": "Ongoing development", "Acessar aplicação web": "Open web application",
  "05 / Desenvolvimento web": "05 / Web development", "Produtos digitais pensados": "Digital products designed", "para funcionar e crescer.": "to work and grow.", "Sites institucionais": "Institutional websites", "Aplicações web": "Web applications", "Integração com APIs": "API integrations", "Front-end e back-end": "Front-end & back-end", "Sites responsivos": "Responsive websites", "Aplicações e integrações": "Applications & integrations",
  "Protótipo autoral · em evolução": "Independent prototype · evolving", "Simulado de Fisioterapia": "Physiotherapy Practice Tests", "Protótipo com potencial comercial": "Prototype with commercial potential",
  "Aplicação de estudos com simulados, acompanhamento de desempenho e funcionamento offline. O protótipo valida uma ideia própria que pretendo amadurecer futuramente como produto comercial.": "A study application featuring practice tests, performance tracking and offline support. The prototype validates an original idea that I plan to develop into a commercial product in the future.",
  "Projeto individual: estratégia, experiência, interface, programação e arquitetura completa da aplicação.": "Independent project: strategy, user experience, interface, programming and complete application architecture.",
  "Projeto acadêmico": "Academic project", "E-commerce de moda": "Fashion e-commerce", "Ver apresentação": "View presentation", "Download para Windows": "Download for Windows",
  "Plataforma 2D · Ação e aventura · Pixel art": "2D platformer · Action adventure · Pixel art", "Visual novel · Drama · Narrativa": "Visual novel · Drama · Narrative", "Terror psicológico · Exploração · Storytelling": "Psychological horror · Exploration · Storytelling", "Terror psicológico · Espaços liminares · Exploração": "Psychological horror · Liminal spaces · Exploration", "Mistério · Terror · Exploração": "Mystery · Horror · Exploration",
  "Cerca de 5 meses": "Around 5 months", "Média de 20 downloads": "Approx. 20 downloads", "Conclua seu trabalho, faça minigames e permaneça vivo.": "Finish your shift, play minigames and stay alive.",
  "Programação, implementação de sistemas e mecânicas, montagem do projeto na engine e aplicação de level design, interfaces, identidade visual e efeitos sonoros.": "Programming, systems and mechanics, engine implementation, level design, interfaces, visual identity and sound effects.",
  "Pokégotchi é uma aplicação web inspirada em mascotes virtuais, criada a partir do conceito desenvolvido inicialmente no Pokémon Tamagotchi em C#. O projeto transforma a experiência de terminal em uma interface acessível pelo navegador.": "Pokégotchi is a virtual-pet web application based on the concept first developed for Pokémon Tamagotchi in C#. It turns the original terminal experience into an interface available directly in the browser.",
  "Iniciado em agosto de 2026 e em desenvolvimento constante, reúne lógica de estado, interações com o mascote, consumo de APIs e recursos de geolocalização. Novas mecânicas e melhorias são incorporadas continuamente.": "Started in August 2026 and under continuous development, it combines state management, pet interactions, API consumption and geolocation features. New mechanics and improvements are added regularly.",
  "Projeto individual desenvolvido do conceito à publicação: programação, interface, integrações, geolocalização, consumo de API e manutenção contínua.": "Independent project developed from concept to release, including programming, interface design, integrations, geolocation, API consumption and ongoing maintenance.",
  "Aplicação de console · C# · cerca de 5 meses": "Console application · C# · around 5 months", "Projeto individual: programação, lógica, estrutura da aplicação e desenvolvimento completo em C#.": "Independent project: programming, logic, application structure and complete development in C#.",
  "Projeto acadêmico desenvolvido em equipe.": "Academic project developed as a team.",
  "Um jogo de ação e aventura em plataforma 2D ambientado em um mundo pós-apocalíptico. Explore cenários em pixel art, enfrente perigos e avance por um ambiente marcado pelas consequências de um mundo em ruínas.": "A 2D action-adventure platformer set in a post-apocalyptic world. Explore pixel-art environments, face hazards and move through a landscape shaped by the consequences of a fallen world.",
  "Uma visual novel focada na relação entre pai e filha, acompanhando os desafios de um pai de primeira viagem. A história aborda, de forma leve e emocional, as dificuldades, responsabilidades e aprendizados envolvidos na criação de uma criança.": "A visual novel about the relationship between a father and daughter and the challenges of first-time parenthood. The story explores its responsibilities and lessons through a light, emotional perspective.",
  "Um jogo de terror psicológico baseado em exploração e narrativa ambiental. Conclua seu trabalho, participe de minigames e tente permanecer vivo enquanto investiga um condomínio aparentemente vazio. Explore seus corredores, descubra seus segredos e entenda por que restam tão poucos moradores.": "A psychological horror game driven by exploration and environmental storytelling. Finish your shift, take part in minigames and try to stay alive while investigating a seemingly empty condominium and the reasons so few residents remain.",
  "Um jogo de terror psicológico com estética psicodélica e ambientes inspirados em espaços liminares e no conceito de Backrooms. Explore cenários surreais e inquietantes enquanto tenta compreender a estranha realidade ao seu redor.": "A psychological horror game with psychedelic visuals and environments inspired by liminal spaces and the Backrooms. Explore surreal settings while trying to understand the strange reality around you.",
  "Um jogo de mistério e exploração que combina elementos de terror com referências à cultura pop. Investigue uma cidade enigmática, conheça seus habitantes e reúna pistas para desvendar os acontecimentos e segredos escondidos por trás de Nefrakstein.": "A mystery and exploration game combining horror with pop-culture references. Investigate an enigmatic town, meet its residents and gather clues to uncover the events and secrets behind Nefrakstein.",
  "Sistema FATEC para criação semestral de jogos. Cada projeto representa uma etapa da minha formação em Jogos Digitais.": "FATEC's semester-based game development program. Each project represents a stage of my Game Development degree.",
  "Interfaces adaptadas a diferentes telas, com navegação clara, boa hierarquia visual e apresentação objetiva.": "Interfaces designed for different screen sizes, with clear navigation, strong visual hierarchy and focused communication.",
  "Estruturação de vitrines, páginas de produto e jornadas de compra com atenção à organização e conversão.": "Storefronts, product pages and customer journeys structured around organization and conversion.",
  "Recursos interativos, consumo de APIs e organização de front-end e back-end conforme as necessidades do projeto.": "Interactive features, API consumption and front-end and back-end architecture shaped around each project.",
  "Versão original desenvolvida em C# e .NET. Permite adotar um mascote, acompanhar seus atributos e interagir com ações como alimentar, brincar e dormir. O projeto serviu como base conceitual e técnica para o Pokégotchi na web.": "The original version was built with C# and .NET. Players can adopt a pet, monitor its attributes and interact through actions such as feeding, playing and sleeping. It became the conceptual and technical foundation for Pokégotchi on the web.",
  "Projeto de site para uma loja virtual de roupas. Embora não esteja mais publicado, a apresentação registra a proposta visual e a experiência desenvolvida.": "A website concept for an online fashion store. Although it is no longer live, the presentation documents its visual direction and the experience developed.",
  "06 / Contato": "06 / Contact", "Vamos construir": "Let’s build", "algo juntos.": "something together.", "Voltar ao topo": "Back to top"
};

export default function LanguageToggle() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const originals = useRef(new WeakMap<Text, string>());
  const originalAttributes = useRef(new WeakMap<Element, Record<string, string>>());
  const activeLanguage = useRef<"pt" | "en">("pt");
  const applyLanguage = (next: "pt" | "en") => {
    const root = document.querySelector("main"); if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode() as Text | null;
    while (node) { const original = originals.current.get(node) ?? node.data; originals.current.set(node, original); const value = original.trim(); const translated = value ? original.replace(value, next === "en" ? translations[value] ?? value : value) : original; if (node.data !== translated) node.data = translated; node = walker.nextNode() as Text | null; }
    root.querySelectorAll("[aria-label], [alt], [title]").forEach(element => {
      const saved = originalAttributes.current.get(element) ?? {};
      (["aria-label", "alt", "title"] as const).forEach(attribute => {
        const current = element.getAttribute(attribute); if (!current) return;
        const original = saved[attribute] ?? current; saved[attribute] = original;
        const translated = next === "en" ? translations[original] ?? original : original; if (current !== translated) element.setAttribute(attribute, translated);
      });
      originalAttributes.current.set(element, saved);
    });
    activeLanguage.current = next;
    document.documentElement.lang = next === "en" ? "en" : "pt-BR";
    window.localStorage.setItem("portfolio-language", next); setLanguage(next);
  };
  useEffect(() => {
    if (window.localStorage.getItem("portfolio-language") === "en") queueMicrotask(() => applyLanguage("en"));
    const observer = new MutationObserver(() => { if (activeLanguage.current === "en") queueMicrotask(() => applyLanguage("en")); });
    const root = document.querySelector("main"); if (root) observer.observe(root, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return <div className="language-switch" role="group" aria-label="Selecionar idioma"><button type="button" aria-pressed={language === "pt"} onClick={() => applyLanguage("pt")}>PT</button><button type="button" aria-pressed={language === "en"} onClick={() => applyLanguage("en")}>EN</button></div>;
}
