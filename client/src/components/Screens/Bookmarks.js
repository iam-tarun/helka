import {
    Grid,
    createMuiTheme,
    MuiThemeProvider,
    Button,
  } from "@material-ui/core";
  import { Pagination } from "@material-ui/lab";
  import React from "react";
  import { useSelector, useDispatch } from "react-redux";
import BookmarkArticle from "./BookmarkArticle";
import {removeAll} from '../../redux/actions/bookmarkActions'

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#000000",
      },
    },
  });
  
  
  const Bookmarks = () => {
    const Bookmarks = useSelector((state) => state.bookmarks);
    const { loading, error, bookmarks } = Bookmarks;
    const [pageNumber, setPageNumber] = React.useState(0);
    const bookmarksPerPage = 3;
    const pagesVisited = pageNumber * bookmarksPerPage;
    const dispatch = useDispatch()
    const displayBookmarks = loading ? (
      <h3>Loading...</h3>
    ) : error ? (
      <h3>{error}</h3>
    ) : (
      bookmarks
        .slice(pagesVisited, pagesVisited + bookmarksPerPage)
        .map((bookmark, index) => <BookmarkArticle article={bookmark} key={index} />)
    );
  
    const pageCount = Math.ceil(
      loading ? 0 : error ? 0 : bookmarks.length / bookmarksPerPage -1
    );
  
    const changePage = (event, value) => {
      setPageNumber(value);
    };
    
    const handleRemoveAll = () => {
      dispatch(removeAll())
    }

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
              Bookmarks
              <Button onClick={handleRemoveAll} >Remove all</Button>
          </Grid>
          {displayBookmarks}
          <Grid item xs={12}>
            <Pagination count={pageCount} onChange={changePage} color="primary" />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  };
  
  export default Bookmarks;
  