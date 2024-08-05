import React, { useEffect } from 'react';
import ChurchHistory from '../components/ChurchHistory';
import CardMinisterio from '../components/CardMinisterio';

const Ministerios = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    //window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='bg-custom-white'>
        <div className="flex flex-col items-center">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 max-w-screen-xl mx-auto">
          <CardMinisterio
            title="Ministério de Ação Social"
            lider="Maria das Graças Sandoval Bibas"
            email="mariabibasster@gmail.com"
            tel="(61) 3244-8806"
            description="Planeja e executa assistência social para congregações e comunidade vulnerável. Atendimento social, orientação a gestantes e bazar. Quintas-feiras, 14h-17h30."
            image={'/assets/PR_Neander_Marques.jpg'}
          />
          <CardMinisterio
            title="Ministério de Apoio Emocional"
            lider=""
            email=""
            tel=""
            description=""
            image={'/assets/PR_Neander_Marques.jpg'}
          />
          <CardMinisterio
            title="Ministério de Comunicação"
            lider="Alcinélia Sepúlveda Brito Barreto"
            email="crvasconce@gmail.com"
            tel="(61) 99982-6053"
            description="Responsável pela divulgação das atividades da igreja, nas mídias sociais, manutenção das informações no site, produção de vídeo de avisos e demais mídias veiculadas no culto para atender aos Ministérios da IMB, também é responsável pela Recepção e Introdução que ocorre durante os cultos, acolhendo o visitante e saudando-o no momento oportuno. Tem no seu quadro de voluntário: fotógrafos, editores de vídeo, editores de texto, introdutores, locutores, dentre outros."
            image={'/assets/PR_Neander_Marques.jpg'}
          />

          <CardMinisterio
            title="Ministério Crescer"
            lider="Djorrane Diniz "
            email="ministeriocrescer.imbb@gmail.com"
            tel="(61) 3244-8806"
            description="O ministério crescer discipula e orienta crianças no caminho do Senhor, apoiando famílias na formação espiritual. Atividades lúdicas e educativas aos domingos."
            image={'/assets/PR_Neander_Marques.jpg'}
          />
          <CardMinisterio
            title="Conselho Diaconal"
            lider="Dermeval Farias Gomes Filho"
            email="cdermevalfarias@yahoo.com.br"
            tel="(61) 99298-4505"
            description="Diáconos e diaconisas da Igreja Memorial Batista, eleitos entre os membros, apoiam atividades eclesiásticas, promovem comunhão e organizam a Ceia do Senhor."
            image={'/assets/PR_Neander_Marques.jpg'}
          />
          <CardMinisterio
            title="Educação e Capacitação Cristã"
            lider=""
            email=""
            tel=""
            description=""
            image={'/assets/PR_Neander_Marques.jpg'}
          />

          <CardMinisterio
            title="Ministério com Famílias"
            lider=""
            email=""
            tel=""
            description=""
            image={'/assets/PR_Neander_Marques.jpg'}
          />
          <CardMinisterio
            title="Ministério Com Terceira Idade"
            lider=""
            email=""
            tel=""
            description=""
            image={'/assets/PR_Neander_Marques.jpg'}
          />
          <CardMinisterio
            title="Ministério de Informação"
            lider=""
            email=""
            tel=""
            description=""
            image={'/assets/PR_Neander_Marques.jpg'}
          />

          <CardMinisterio
            title="Ministério de Integração e Comunhão"
            lider=""
            email=""
            tel=""
            description=""
            image={'/assets/PR_Neander_Marques.jpg'}
          />
          <CardMinisterio
            title="Ministério com Juventude"
            lider=""
            email=""
            tel=""
            description=""
            image={'/assets/PR_Neander_Marques.jpg'}
          />
          <CardMinisterio
            title="Ministério de Missões"
            lider=""
            email=""
            tel=""
            description=""
            image={'/assets/PR_Neander_Marques.jpg'}
          />

          <CardMinisterio
            title="Ministério Mulher Cristã em Missão"
            lider=""
            email=""
            tel=""
            description=""
            image={'/assets/PR_Neander_Marques.jpg'}
          />
          <CardMinisterio
            title="Ministério de Música"
            lider=""
            email=""
            tel=""
            description=""
            image={'/assets/PR_Neander_Marques.jpg'}
          />
          <CardMinisterio
            title="Ministério de Oração"
            lider=""
            email=""
            tel=""
            description=""
            image={'/assets/PR_Neander_Marques.jpg'}
          />

          <CardMinisterio
            title="Ministério com Surdos"
            lider="Mônica Teixeira Gonçalves Accioli"
            email=""
            tel=""
            description="O Ministério com Surdos tem intérpretes voluntários de Libras para evangelizar e apoiar surdos. Atendimento de segunda a sexta, auxiliando em consultas e demandas.
"
            image={'/assets/PR_Neander_Marques.jpg'}
          />
          
          {/* Adicione os outros CardMinisterio da mesma forma, com suas respectivas imagens */}
        </div>

        
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
