import styled from "styled-components";

const Contain = styled.div`
    height: 50px;
    margin: 20px;
    font-size: 40px;
    text-align: center;
    border-radius: 20px;
    background-color: beige;
    border: 2px solid grey;
`
function PostListItem(props) {
    return (
    <Contain>
        {props.data.title}
    </Contain>
    )
}

export default PostListItem;