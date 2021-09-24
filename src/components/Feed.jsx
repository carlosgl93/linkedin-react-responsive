import styled from "styled-components";
import ProfileCard from "./ProfileCard";

const Feed = () => {
  return (<Homepage>
    <ProfileCard />
    <FeedColumn />
    <SocialColumn/>
  </Homepage>);
};

const Homepage = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 0.6fr 0.2fr;
  @media (max-width: 520px) {
    grid-template-areas: 1fr;
  }
`;

const FeedColumn = styled.div``;

const SocialColumn = styled.div``;

export default Feed;
