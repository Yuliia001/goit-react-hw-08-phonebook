import { MdContactPhone } from 'react-icons/md';
import { Title, Wrapper } from './Home.styled';

export default function Home() {
  return (
    <Wrapper>
      <Title>
        Contacts manager welcome page
        <MdContactPhone size={46} />
      </Title>
    </Wrapper>
  );
}
