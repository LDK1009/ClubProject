import React from 'react';
import logo from '../assets/생성로고누끼.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Layout from '../components/Layout';
import Button from '../components/Button';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow:5px 5px 10px 0px rgba(0,0,0,0.1);
  border-radius: 24px;
  margin-bottom: 10px;
  text-align: center;
  position: relative;
  font-size: 24px;
  font-weight: bold;
`;

const AppLogo = styled.img.attrs({
  src: logo,
  alt: 'logo'
})`
  width: 200px;
  border: 1px;
`;

const AppIntro = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const HomeStyle = createGlobalStyle`
  .btn {
    font-family: 'MangoDdobak-B';
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const onClickSignIn = () => {
    navigate('/signin');
  };

    return (
      <>
        <HomeStyle />
        <Layout>
            <LogoContainer>
              <AppLogo />
            </LogoContainer>
            <AppIntro>
              <p>동아리 관리의 모든 것</p>
              <p>크루 유니버셜 클럽</p>
            </AppIntro>
            <ButtonContainer>
            <Button className="btn sign-in" onClick={onClickSignIn}>로그인</Button>
              <Link to="/signup"><Button className="btn sign-up">회원가입</Button></Link>
            </ButtonContainer>
        </Layout>
      </>
    );
};
  
export default Home;