import styled from 'styled-components';
import UserAvatar from './UserAvatar';

const ProfileCard = () => {
  return (
    <CardContainer>
      <BackgroundImg src='https://www.teahub.io/photos/full/303-3034192_default-banner-banner-jpg.jpg'  alt='Profile Linkedin image'/>
      <UserAvatar />
      <TextContainer>
        <FullName>
          FirstName LastName LastName
        </FullName>
        <Role>Manager of the company that the user work</Role>
      </TextContainer>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: 33%;
  z-index: -1;
`;

const TextContainer = styled.div``;

const FullName = styled.h2``;

const Role = styled.p``;

export default ProfileCard
