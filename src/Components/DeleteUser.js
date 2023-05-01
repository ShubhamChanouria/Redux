import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";
import styled from "styled-components";

const DeleteUser = () => {
  const dispatch = useDispatch();
  const deleteAllUSers = () => {
    dispatch(deleteUsers());
  };
  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={deleteAllUSers}>
        clear users
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;

export default DeleteUser;
