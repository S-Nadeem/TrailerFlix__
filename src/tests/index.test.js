import { act, render, screen } from "@testing-library/react";
import Home from "../components/Home";
import Nav from "../components/elements/Nav";
import SearchBar from "../components/elements/SearchBar";
import Navigation from "../components/elements/Navigation";
import Actor from "../components/elements/Actor";
import * as api from "../components/hooks/useHomeFetch";
import * as api1 from "../components/hooks/useMovieFetch";
import MovieInfoBar from "../components/elements/MovieInfoBar";
import MovieInfo from "../components/elements/MovieInfo";

const dummyData = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/2RSirqZG949GuRwN38MYCIGG4Od.jpg",
      genre_ids: [53],
      id: 985939,
      original_language: "en",
      original_title: "Fall",
      overview:
        "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
      popularity: 6824.053,
      poster_path: "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
      release_date: "2022-08-11",
      title: "Fall",
      video: false,
      vote_average: 7.4,
      vote_count: 753,
    },
  ],
  total_pages: 35165,
  total_results: 703288,
};

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve(dummyData),
  });
});

beforeEach(() => {
  fetch.mockClear();
});

test("Check if Internet is Down or Not", async () => {
  const { findByText } = render(<Home />);
  const elements = await findByText(
    /Error in connect to Internet. Check your Internet connection/i
  );
  expect(elements.nodeType).toBe(1);
});

test("Home Page Should contain Search Input", () => {
  const component = render(<SearchBar />);
  const SearchInput = component.getAllByPlaceholderText(/Search/);
  expect(SearchInput).toBeTruthy();
});

test("NavBar should have only one header component", () => {
  const { container } = render(<Nav />);
  const header = container.getElementsByClassName("header-content");
  expect(header.length).toBe(1);
});

test("There should be a link to redirect to HomePage", async () => {
  await act(async () => render(<Navigation />));

  expect(screen.getByText("Home")).toBeTruthy();
});

it("Length of the Data that gets should be atleast 20", async () => {
  await api.fetchMoviesForTest();
  expect(fetch).toHaveBeenCalledTimes(1);
});

it("Handle Excection with null", async () => {
  fetch.mockImplementationOnce(() => Promise.reject("API Failed"));
  const movies = await api.fetchMoviesForTest();
  expect(movies).toEqual(null);
});

it("One Fetch call should go when opened movies INFO", async () => {
  await api1.fetchData1(781099);
  expect(fetch).toHaveBeenCalledTimes(1);
});

it("There should be a Ratings and Director name is movies INFO", async () => {
  const { container } = render(<MovieInfoBar />);
  expect(container.getElementsByClassName("movieinfobar-info").length).toBe(1);
});

it("There should be a Run Time in movies INFO", async () => {
  const { container } = render(<MovieInfoBar />);
  expect(
    container.getElementsByClassName("movieinfobar-content-col")
  ).toBeTruthy();
});

it("There should be a Actor name is movies INFO", async () => {
  const { container } = render(<Actor />);
  expect(container.getElementsByClassName("actor-name")).toBeTruthy();
});

it("There should be a Play Trailer/Stop Trailer button in movies INFO", async () => {
  const component = render(<MovieInfo />);
  const ele = await component.findAllByRole("button");
  expect(ele).toBeTruthy();
});

// it("Should change the text in button to Play/Stop Trailer", async () => {
//   const { getByTestId } = render(<MovieInfo />);
//   const ele = getByTestId("button-up");
//   fireEvent.click(ele);
//   const stop = getByTestId("button-up");
//   expect(stop).toBeTruthy();
// });
