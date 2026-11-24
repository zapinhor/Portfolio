export default function FisioPrototype() {
  return (
    <article className="nabulab-project" id="nabulab" data-reveal>
      <div className="nabulab-identity">
        <img className="nabulab-logo" src="/Portfolio/nabulab-logo.png" alt="NabuLab" />
        <p>Meu principal projeto atualmente</p>
        <h3>Estudo orientado por tentativa, correção e evolução</h3>
        <p className="nabulab-summary">Plataforma de simulados para vestibulares, concursos, OAB e CNH, com correção comentada, revisão de erros, acompanhamento de desempenho e área do professor.</p>
        <a className="nabulab-link" href="https://nabulab.org" target="_blank" rel="noreferrer">Conhecer o NabuLab <span>↗</span></a>
      </div>
      <div className="nabulab-product" aria-label="Visão geral do NabuLab">
        <div className="nabulab-product-head"><span>Produto em produção</span><img src="/Portfolio/nabulab-icon.png" alt="" /></div>
        <div className="nabulab-metrics"><strong>59<small>matérias</small></strong><strong>2.904<small>questões</small></strong><strong>Cloud<small>progresso sincronizado</small></strong></div>
        <div className="nabulab-features"><span>Simulados personalizados</span><span>Correção comentada</span><span>Revisão de erros</span><span>Histórico e evolução</span><span>Metas e domínio</span><span>Turmas e atividades</span></div>
        <div className="nabulab-role"><small>Minha atuação</small><p>Produto individual, desenvolvido com assistência de IA (Claude Code): estratégia, arquitetura, experiência, interface, autenticação, banco de dados, regras de acesso, assinaturas, testes e publicação.</p></div>
        <div className="prototype-stack"><span>Next.js</span><span>React</span><span>TypeScript</span><span>Supabase</span><span>PostgreSQL</span><span>Tailwind CSS</span></div>
      </div>
    </article>
  );
}
