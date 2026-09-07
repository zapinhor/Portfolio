import GameCarousel from "./GameCarousel";
import MobileNav from "./MobileNav";
import ScrollReveal from "./ScrollReveal";
import LanguageToggle from "./LanguageToggle";
import SkillsSection from "./SkillsSection";
import FisioPrototype from "./FisioPrototype";

const asset = (path: string) => `/Portfolio${path.startsWith("/games/") ? path.replace(/\.png$/, ".webp") : path}`;

const smaugProjects = [
  {
    semester: "01",
    title: "Emovere",
    kind: "Plataforma 2D · Ação e aventura · Pixel art",
    stack: "Construct 3",
    description: "Um jogo de ação e aventura em plataforma 2D ambientado em um mundo pós-apocalíptico. Explore cenários em pixel art, enfrente perigos e avance por um ambiente marcado pelas consequências de um mundo em ruínas.",
    href: "https://zapinhor.itch.io/emovere",
    platform: "itch.io",
    duration: "Cerca de 5 meses",
    metrics: "Média de 20 downloads",
    images: [asset("/games/emovere/image.png"), asset("/games/emovere/2image.png"), asset("/games/emovere/3image.png"), asset("/games/emovere/4image.png")],
  },
  {
    semester: "02",
    title: "Mimada Sofia",
    kind: "Visual novel · Drama · Narrativa",
    stack: "Ren'Py · Python",
    description: "Uma visual novel focada na relação entre pai e filha, acompanhando os desafios de um pai de primeira viagem. A história aborda, de forma leve e emocional, as dificuldades, responsabilidades e aprendizados envolvidos na criação de uma criança.",
    href: "https://zapinhor.itch.io/mimada-sofia",
    platform: "itch.io",
    duration: "Cerca de 5 meses",
    metrics: "Média de 20 downloads",
    images: [asset("/games/mimada-sofia/image.png"), asset("/games/mimada-sofia/2image.png"), asset("/games/mimada-sofia/3image.png"), asset("/games/mimada-sofia/4image.png"), asset("/games/mimada-sofia/5image.png"), asset("/games/mimada-sofia/6image.png")],
  },
  {
    semester: "03",
    title: "Don't Be Scared",
    kind: "Terror psicológico · Exploração · Storytelling",
    stack: "Unity · C#",
    description: "Um jogo de terror psicológico baseado em exploração e narrativa ambiental. Conclua seu trabalho, participe de minigames e tente permanecer vivo enquanto investiga um condomínio aparentemente vazio. Explore seus corredores, descubra seus segredos e entenda por que restam tão poucos moradores.",
    href: "https://store.steampowered.com/app/3226550/Dont_Be_Scared__Episode_1_The_Lost_Soul/",
    platform: "Steam",
    duration: "Cerca de 5 meses",
    metrics: "1.743 downloads da demo · 76 downloads da versão paga · 260 wishlists",
    callout: "Conclua seu trabalho, faça minigames e permaneça vivo.",
    images: [asset("/games/dont-be-scared/1.png"), asset("/games/dont-be-scared/2.png"), asset("/games/dont-be-scared/3.png"), asset("/games/dont-be-scared/4.png"), asset("/games/dont-be-scared/5.png")],
  },
  {
    semester: "04",
    title: "Dream",
    kind: "Terror psicológico · Espaços liminares · Exploração",
    stack: "Unreal Engine 5 · Blueprints",
    description: "Um jogo de terror psicológico com estética psicodélica e ambientes inspirados em espaços liminares e no conceito de Backrooms. Explore cenários surreais e inquietantes enquanto tenta compreender a estranha realidade ao seu redor.",
    href: "https://zapinhor.itch.io/dream",
    platform: "itch.io",
    duration: "Cerca de 5 meses",
    metrics: "Média de 20 downloads",
    images: [asset("/games/dream/1.png"), asset("/games/dream/2.png"), asset("/games/dream/3.png"), asset("/games/dream/4.png")],
  },
  {
    semester: "05—06",
    title: "Nefrakstein",
    kind: "Mistério · Terror · Exploração",
    stack: "Unity · C#",
    description: "Um jogo de mistério e exploração que combina elementos de terror com referências à cultura pop. Investigue uma cidade enigmática, conheça seus habitantes e reúna pistas para desvendar os acontecimentos e segredos escondidos por trás de Nefrakstein.",
    href: "https://zapinhor.itch.io/nefrakstein",
    platform: "itch.io",
    duration: "Cerca de 5 meses",
    metrics: "30 downloads",
    images: [asset("/games/nefrakstein/1.png"), asset("/games/nefrakstein/2.png"), asset("/games/nefrakstein/3.png"), asset("/games/nefrakstein/4.png")],
  },
];

const gameRole = "Programação, implementação de sistemas e mecânicas, montagem do projeto na engine e aplicação de level design, interfaces, identidade visual e efeitos sonoros.";

function Arrow() {
  return <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M5 3h8v8" /></svg>;
}

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <header className="header">
        <a className="name" href="#inicio">Danilo Petraglia</a>
        <nav aria-label="Navegação principal">
          <a href="#smaug">Jogos</a>
          <a href="#web">Web</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#pokegotchi">Pokégotchi</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="header-actions"><LanguageToggle /><a className="availability" href="https://wa.me/5511997396671" target="_blank" rel="noreferrer"><span /> Disponível para projetos</a></div>
        <MobileNav />
      </header>

      <section className="hero" id="inicio">
        <div className="hero-meta"><span>Game Developer</span><span>Full Stack Web Developer</span><span>Osasco · SP</span></div>
        <h1>Desenvolvedor de jogos<br />e web <span>full stack.</span></h1>
        <div className="hero-bottom">
          <p>Crio jogos, sites, aplicações web e experiências digitais completas, unindo programação, identidade visual e atenção à experiência de uso.</p>
          <a className="circle-link" href="#smaug" aria-label="Conhecer meus projetos">↓</a>
        </div>
      </section>

      <section className="intro" id="sobre" data-reveal>
        <p className="label">01 / Sobre mim</p>
        <div className="intro-content">
          <figure className="about-portrait" data-reveal="left"><img src={asset("/danilo-petraglia.webp")} alt="Retrato profissional de Danilo Petraglia" /></figure>
          <h2 data-reveal="left">Curiosidade que virou<br />ofício.</h2>
          <div className="intro-copy" data-reveal="right">
            <p>Sempre tive interesse por tecnologia e curiosidade para entender como as coisas funcionam. Grande parte do que aprendi começou de forma autodidata, por meio de vídeos, pesquisas e, principalmente, da prática. Ao longo dos anos, explorei diferentes áreas de hardware e software, testando ferramentas, resolvendo problemas e transformando a curiosidade em conhecimento técnico.</p>
            <p>Minha relação com os jogos também começou cedo. Além de jogar, sempre tive interesse em observar como cada experiência era construída: suas mecânicas, ambientação, narrativa, sons e formas de interação. Essa paixão me levou ao desenvolvimento de jogos, área em que atuo há aproximadamente três anos, trabalhando principalmente com programação, sistemas e mecânicas de gameplay.</p>
            <p>Paralelamente, atuo há cerca de quatro anos com desenvolvimento web. Trabalho na criação de sites institucionais, landing pages, e-commerce e aplicações responsivas, utilizando HTML, CSS e JavaScript, além de WordPress, integrações com APIs e recursos de back-end conforme as necessidades de cada projeto.</p>
            <p>Hoje, busco evoluir como desenvolvedor de jogos e desenvolvedor web full stack, contribuindo tanto na construção técnica quanto na definição de soluções claras e funcionais. Meu objetivo é transformar ideias em produtos digitais bem estruturados, com identidade e uma experiência consistente para quem utiliza.</p>
          </div>
        </div>
        <aside className="experience-note" data-reveal>
          <span>Experiência profissional</span>
          <div><strong>Teleperformance</strong><small>nov/2024 — ago/2025</small></div>
          <p>Atuação bilíngue em uma operação de grande volume, com média de aproximadamente 700 tickets por dia e desempenho superior a 90% nos indicadores acompanhados. A experiência fortaleceu minha disciplina, atenção a detalhes e comunicação em português e inglês.</p>
        </aside>
      </section>

      <SkillsSection />

      <section className="smaug" id="smaug">
        <div className="section-title" data-reveal>
          <p className="label">03 / Projetos acadêmicos</p>
          <h2>SMAUG</h2>
          <p className="smaug-description">Sistema acadêmico da FATEC que propõe, a cada semestre, o desenvolvimento colaborativo de um protótipo jogável.</p>
        </div>

        <div className="project-list">
          {smaugProjects.map((project) => (
            <article className="project-entry compact" key={project.title} data-reveal>
              <div className="compact-project-heading">
                <div className="semester"><span>{project.semester}</span><small>semestre</small></div>
                <div className="project-name"><h3>{project.title}</h3><p>{project.kind}</p></div>
                <a href={project.href} target="_blank" rel="noreferrer">Ver no {project.platform} <Arrow /></a>
              </div>
              <div className="compact-project-body">
                <GameCarousel title={project.title} images={project.images} />
                <div className="compact-project-copy">
                  {project.callout && <p className="project-callout">“{project.callout}”</p>}
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="compact-project-stack"><span>Tecnologias usadas</span><strong>{project.stack}</strong></div>
              <div className="project-role"><small>Minha atuação</small><p>{gameRole}</p></div>
              <div className="project-facts" aria-label={`Informações de desenvolvimento de ${project.title}`}>
                <span><small>Desenvolvimento</small><strong>{project.duration}</strong></span>
                <span><small>Alcance</small><strong>{project.metrics}</strong></span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-project" id="pokegotchi" data-reveal>
        <div className="featured-heading">
          <p className="label">04 / Projeto em destaque</p>
          <div>
            <span className="featured-kicker">Aplicação web · JavaScript</span>
            <h2>Pokégotchi</h2>
          </div>
        </div>
        <div className="featured-grid">
          <figure className="featured-visual" data-reveal="left">
            <img src={asset("/pokegotchi.png")} alt="Tela inicial do Pokégotchi com Pikachu e opções para iniciar ou continuar uma jornada" loading="lazy" decoding="async" />
            <figcaption>Interface atual da aplicação web</figcaption>
          </figure>
          <div className="featured-copy" data-reveal="right">
            <p>Pokégotchi é uma aplicação web inspirada em mascotes virtuais, criada a partir do conceito desenvolvido inicialmente no Pokémon Tamagotchi em C#. O projeto transforma a experiência de terminal em uma interface acessível pelo navegador.</p>
            <p>Iniciado em agosto de 2026 e em desenvolvimento constante, reúne lógica de estado, interações com o mascote, consumo de APIs e recursos de geolocalização. Novas mecânicas e melhorias são incorporadas continuamente.</p>
            <div className="featured-tags" aria-label="Tecnologias e recursos"><span>JavaScript</span><span>HTML</span><span>CSS</span><span>APIs</span><span>Geolocalização</span></div>
            <div className="featured-facts"><span><small>Início</small><strong>Agosto de 2026</strong></span><span><small>Status</small><strong>Em desenvolvimento constante</strong></span></div>
            <div className="featured-role"><small>Minha atuação</small><p>Projeto individual desenvolvido integralmente por mim, da programação full stack e integrações à construção da interface, identidade visual e publicação.</p></div>
            <a className="download-button" href="https://pokegotchi.com.br" target="_blank" rel="noreferrer">Acessar Pokégotchi <span>Aplicação web</span></a>
            <small>Projeto disponível em pokegotchi.com.br.</small>
          </div>
        </div>
      </section>

      <section className="web-section" id="web" data-reveal>
        <p className="label">05 / Desenvolvimento web</p>
        <div className="web-content" data-reveal>
          <h2>Da ideia ao site<br />pronto para crescer.</h2>
          <div><p>Desenvolvimento full stack de sites e aplicações para a web, da construção das interfaces à integração de recursos e publicação. Cada projeto é pensado para funcionar bem em computadores e celulares, comunicar com clareza e facilitar a evolução do negócio.</p><div className="web-stack"><span>Sites institucionais</span><span>Landing pages</span><span>E-commerce</span><span>Aplicações web</span><span>Integração de APIs</span><span>Front-end e back-end</span></div></div>
        </div>
        <div className="web-services" aria-label="Experiência em desenvolvimento web" data-reveal>
          <span><small>01</small><strong>Sites responsivos</strong><p>Interfaces adaptadas a diferentes telas, com estrutura clara, desempenho e navegação objetiva.</p></span>
          <span><small>02</small><strong>E-commerce</strong><p>Estruturação de lojas virtuais, páginas de produtos e jornadas de compra voltadas à conversão.</p></span>
          <span><small>03</small><strong>Aplicações e integrações</strong><p>Recursos interativos, consumo de APIs e conexão entre interface, dados e regras do projeto.</p></span>
        </div>
        <FisioPrototype />
        <a className="web-project featured-web" href="https://drive.google.com/file/d/1pybqrFdF97QAyaLOGlf2yHx1GyXW3GKI/view?usp=sharing" target="_blank" rel="noreferrer" aria-label="Baixar o Pokémon Tamagotchi para Windows" data-reveal>
          <div><span>Aplicação de console · C# · cerca de 5 meses</span><h3>Pokémon Tamagotchi</h3></div>
          <div className="web-project-copy"><p>Versão original desenvolvida em C# e .NET. Permite adotar um mascote, acompanhar seus atributos e interagir com ações como alimentar, brincar e dormir. O projeto serviu como base conceitual e técnica para o Pokégotchi na web.</p><p className="role-summary"><small>Minha atuação</small> Projeto individual: programação, lógica, estrutura da aplicação e desenvolvimento completo em C#.</p></div>
          <strong>Download para Windows <Arrow /></strong>
        </a>
        <a className="web-project secondary-web" href="https://www.canva.com/design/DAFT1FEBIFU/opW7u-kxTWT3RjzeynqKUA/edit" target="_blank" rel="noreferrer" aria-label="Abrir apresentação do projeto acadêmico de e-commerce no Canva" data-reveal>
          <div><span>Projeto acadêmico</span><h3>E-commerce de moda</h3></div>
          <div className="web-project-copy"><p>Projeto de site para uma loja virtual de roupas. Embora não esteja mais publicado, a apresentação registra a proposta visual e a experiência desenvolvida.</p><p className="role-summary"><small>Minha atuação</small> Projeto acadêmico desenvolvido em equipe.</p></div>
          <strong>Ver apresentação <Arrow /></strong>
        </a>
      </section>

      <section className="contact" id="contato" data-reveal>
        <p className="label">06 / Contato</p>
        <h2>Vamos construir<br />algo juntos.</h2>
        <div className="contact-actions">
          <a className="email" href="mailto:contatodanilohp@gmail.com">contatodanilohp@gmail.com <Arrow /></a>
          <a className="whatsapp" href="https://wa.me/5511997396671" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>(11) 99739-6671</strong><Arrow /></a>
        </div>
        <div className="links">
          <a href="https://github.com/zapinhor" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a href="https://www.linkedin.com/in/danilopetraglia/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href="https://zapinhor.itch.io/" target="_blank" rel="noreferrer">itch.io <Arrow /></a>
        </div>
      </section>

      <footer><span>Danilo Petraglia</span><span>Game Developer & Full Stack Web Developer</span><a href="#inicio">Voltar ao topo ↑</a></footer>
    </main>
  );
}
