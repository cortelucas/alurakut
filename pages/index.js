import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRealations';

const ProfileSidebar = (props) => {
  console.log(props)
  return(
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} alt="Imagem de Perfil" style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'cortelucas';
  const pessoasFavoritas = ['marcelookada87', 'omariosouto', 'FabioRG37', 'rafaballerini', 'filipedeschamps', 'jmarceno']

  return (
    <>
    <AlurakutMenu/>
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar githubUser={githubUser}/>
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">Bem Vindo(a), {githubUser}</h1>
          <OrkutNostalgicIconSet/>  
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da Comunidade ({pessoasFavoritas.length})
          </h2>
          
          <ul>
            {pessoasFavoritas.map((pessoa) => {
              return (
                <li>
                  <a href={`/users/${pessoa}`} key={pessoa}>
                    <img src={`https://github.com/${pessoa}.png`} alt="" />
                    <span>{pessoa}</span>
                  </a>
                </li>  
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  )
}