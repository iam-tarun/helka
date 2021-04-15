import {
  Grid,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory} from "react-router-dom";
import Article from "./Article";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});


const Search = () => {
  const Results = useSelector((state) => state.results);
  const { loading, error, results } = Results;
  const [pageNumber, setPageNumber] = React.useState(1);
  const resultsPerPage = 3;
  const pagesVisited = pageNumber * resultsPerPage;
  const history = useHistory();
  const q = history.location.state.q;
  const displayResults = loading ? (
    <h3>Loading...</h3>
  ) : error ? (
    <h3>{error}</h3>
  ) : (
    results
      .slice(pagesVisited, pagesVisited + resultsPerPage)
      .map((result, index) => <Article article={result} />)
  );

  const pageCount = Math.ceil(
    loading ? 0 : results.length / resultsPerPage - 1
  );

  const changePage = (event, value) => {
    console.log(value);
    setPageNumber(value);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Grid
        container
        alignItems="center"
        justify="center"
        spacing={2}
        style={{
          marginTop: 20,
          marginLeft: 10,
          marginRight: 20,
          marginBottom: 60,
        }}
      >
        <Grid item xs={12}>
          Search Results on {q}
        </Grid>
        {displayResults}
        <Grid item xs={12}>
          <Pagination count={pageCount} onChange={changePage} color="primary" />
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};

export default Search;
