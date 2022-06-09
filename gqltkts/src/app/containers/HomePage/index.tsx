import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks";
import animeService from "../../services/animeService";
import { GetAnimePage } from "../../services/animeService/generated/GetAnimePage";
import { setAnimePage } from "./homePageSlice";
import { HotAnime } from "./HotAnime";

interface IHomePageProps {}

const HomePage = (props: IHomePageProps) => {
  const { setAnimePage } = actionDispatch(useAppDispatch());
  const fetchAnimePage = async () => {
    const animePage = await animeService.getAnimePage(0, 20).catch((err) => {
      console.log("Error: ", err);
    });

    if (animePage) setAnimePage(animePage);
  };

  useEffect(() => {
    fetchAnimePage();
  }, []);
  return (
    <Container>
      <h1>Hot Main</h1>
      <HotAnime />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimePage: (page: GetAnimePage["Page"]) => dispatch(setAnimePage(page)),
});

export default HomePage;
