// src/pages/Ministerios.js
import React, { useEffect } from 'react';
import ChurchHistory from '../components/ChurchHistory';
import CardMinisterio from '../components/CardMinisterio';

const Ministerios = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center bg-white">
        <div className="text-center mt-20 py-8">
          <ChurchHistory
            title="Conheça nossos ministérios"
            description="São muitas as formas de servir ao Senhor em nossa igreja!"
            titleSize="text-4xl"
            titleWeight="font-bold"
            titleAlign="text-center"
            titleFont="font-inter"
            titleColor="text-custom-blue"
            descriptionAlign="text-center"
            descriptionSize="text-lg"
            descriptionWeight="font-bold"
            descriptionFont="font-montserrat"
            descriptionColor="text-custom-blue"
          />
        </div>
      </div>

      <div className="bg-custom-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 max-w-screen-xl mx-auto">
          <CardMinisterio title="MINISTÉRIO DE AÇÃO SOCIAL" lider='Maria das Graças Sandoval Bibas' contact='mariabibasster@gmail.com - (61) 99105-2219' description="Planeja, executa e avalia serviços de Assistência Social às Congregações, membros da igreja e pessoas da comunidade em situação de vulnerabilidade social. Abrange, segundo critérios pré estabelecidos: atendimento social; orientação a gestantes e confecção de enxovais para bebes; confecção de roupas para crianças; bazar para apoio a Missionários e Pastores; empréstimos de equipamentos de locomoção e concessão de cestas básicas. O atendimento ocorre, semanalmente, às quintas-feiras de 14 às 17:30hs. As solicitações devem ser feitas pelo fone 61 99105-2219 ou pessoalmente." />
          <CardMinisterio title="MINISTÉRIO DE APOIO EMOCIONAL" lider='Cláudia Regina Santos de Vasconcelos' contact='crvasconce@gmail.com - (61) 99982-6053' description="O ministério de Apoio Emocional tem como objetivo: Contribuir na melhoria da qualidade de vida, envolvendo atividades psicológicas, assistenciais e educativas nas áreas de saúde emocional. Desenvolver ações voltadas para conscientização e prevenção das doenças emocionais. Os atendimoentos são apenas para dar apoio emocional e não com fins terapêuticos com, no máximo, três encontros." />
          <CardMinisterio title="MINISTÉRIO DE COMUNICAÇÃO" lider='Alcinélia Sepúlveda Brito Barreto' contact='comunicacao@imbb.org.br - (61) 99872-9564' description="Responsável pela divulgação das atividades da igreja, nas mídias sociais, manutenção das informações no site, produção de vídeo de avisos e demais mídias veiculadas no culto para atender aos Ministérios da IMB, também é responsável pela Recepção e Introdução que ocorre durante os cultos, acolhendo o visitante e saudando-o no momento oportuno. Tem no seu quadro de voluntário: fotógrafos, editores de vídeo, editores de texto, introdutores, locutores, dentre outros." />
          <CardMinisterio title="MINISTÉRIO CRESCER" lider='Djorrane Diniz ' contact='ministeriocrescer.imbb@gmail.com - (61) 3244-8806' description="O ministério crescer tem o compromisso de discipular e orientar as crianças no caminho do Senhor. Somos parceiros das famílias na formação da base espiritual das crianças, para que elas possam desenvolver um relacionamento pessoal com Jesus. A palavra de Deus é ministrada de maneira lúdica e divertida na linguagem de cada faixa etária. Todos os domingos temos o nosso grande grupo no auditorio com louvor e devocional. Logo apos esse momento as  criancas são divididas em turmas nas salas por faixa etária. Também servimos através do berçário crianças de 0 a 2 anos e de 3 a 11 anos. Temos a turma de transição que são os pré adolescentes que completaram 12 anos que acontece todos os domingos das 9h as 11h30. Temos várias áreas de atuação além do ensino e ministração da palavra como: equipe da recepção, equipe do lanche, equipe dos pequenos grupos e equipe de louvor." />
          <CardMinisterio title="CONSELHO DIACONAL" lider='Dermeval Farias Gomes Filho' contact='dermevalfarias@yahoo.com.br - (61) 99298-4505' description="Na Igreja Memorial Batista, os diáconos e as diaconisas são eleitos entre os seus membros e integram o Conselho Diaconal. Possuem as seguintes competências: Apoiar a lgreja e seus ministérios nas atividades eclesiásticas; promover a paz, a comunhão e o bem-estar dos membros da lgreja;organizar os elementos da Ceia do Senhor e auxiliar a sua distribuição; assistir os membros, ajudando-os a se integrarem nas atividades da lgreja;zelar pela manutenção da ordem nas dependências do templo nos horários dos cultos. dedicam a tratar da remuneração dos pastores e ministros da Igreja, da avaliação do Pastor Titular e dos Ministros-Auxiliares e assumem outras funções que a Assembleia da Igreja lhes atribuir." />
          <CardMinisterio title="EDUCAÇÃO E CAPACITAÇÃO CRISTÃ (EBD)" lider='' contact='' description="" />
          <CardMinisterio title="MINISTÉRIO COM FAMÍLIAS" lider='' contact='' description="" />
          <CardMinisterio title="MINISTÉRIO COM TERCEIRA IDADE" lider='' contact='' description="" />
          <CardMinisterio title="MINISTÉRIO DE INFORMAÇÃO" lider='' contact='' description="" />
          <CardMinisterio title="MINISTÉRIO DE INTEGRAÇÃO E COMUNHÃO" lider='' contact='' description="" />
          <CardMinisterio title="MINISTÉRIO COM JUVENTUDE" lider='' contact='' description="" />
          <CardMinisterio title="MINISTÉRIO DE MISSÕES" lider='' contact='' description="" />
          <CardMinisterio title="MINISTÉRIO MULHER CRISTÃ EM MISSÃO" lider='' contact='' description="" />
          <CardMinisterio title="MINISTÉRIO DE MÚSICA" lider='' contact='' description="" />
          <CardMinisterio title="MINISTÉRIO DE ORAÇÃO" lider='' contact='' description="" />
          <CardMinisterio title="MINISTÉRIO COM SURDOS" lider='Mônica Teixeira Gonçalves Accioli' contact='ministeriocomsurdosimb@gmail.com - (61) 3244-8806' description="O Ministério com Surdos conta com intérpretes voluntários da Língua Brasileira de Sinais (Libras). A intenção é evangelizar e alcançar para Cristo os surdos da região do Plano Piloto, no Distrito Federal. E ainda auxiliá-los em várias demandas. Atendimento: A comunidade surda conta com apoio da Igreja para solucionar diversos tipos de demandas.  A irmã Cintia Campos Silva, secretária do Ministério, atende de segunda a sexta-feira, das 8h às 14 horas na Igreja, e auxilia os surdos com demandas relacionadas à igreja, necessidades de marcação de consultas médicas, realização de ligações telefônicas e, caso necessário, auxilia na convocação de outros voluntários intérpretes para acompanhar a pessoa surda quando for preciso. Também há atuação em aconselhamento e auxílio em estudos bíblicos e secundários." />
        </div>
      </div>

      <div className="flex flex-col items-center bg-white space-y-2 mb-8">
        <div className="text-center py-8">
          <ChurchHistory
            title="Deseja se tornar voluntário?"
            description=""
            titleSize="text-4xl"
            titleWeight="font-bold"
            titleAlign="text-center"
            titleFont="font-inter"
            titleColor="text-custom-blue"
          />
        </div>
        <a
          href="https://form.jotform.com/230955606462661"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-custom-blue text-white text-lg font-montserrat font-bold rounded-3xl hover:bg-blue-900 transition duration-300"
        >
          Preencha o formulário
        </a>
      </div>
    </>
  );
};

export default Ministerios;
