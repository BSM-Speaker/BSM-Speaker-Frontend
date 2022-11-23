import styled from "styled-components";

const Contain = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  font-size: 40px;
`;
function Main() {
  return (
    <Contain>
      저희 프로젝트의 목적은 그룹에 가입된 사람들에게 긴급한 정보를<br></br>
      주기위해 만들어 졌습니다.
    </Contain>
  );
}

export default Main;
