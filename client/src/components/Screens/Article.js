import {
  Grid,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  media: {
    height: "180px",
  },
  card: {
    minHeight: "400px",
    backgroundColor: "#99e699",
    color: "white",
  },
}));

const Article = ({ article }, clr) => {
  const classes = useStyles();
  const user = useSelector((state) => state.user)
  article  = {...article, user: user._id}
  return (
    <Grid item xs={4}>
      <Card className={classes.card}>
        <Link
          style={{ textDecoration: "None", color: "white" }}
          to={{ pathname: "/dashboard/headline", state: article }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              src={article.urlToImage}
              title={article.title}
              className={classes.media}
            />
            <CardContent>
              <Typography variant="body1">{article.title}</Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <a
            href={article.url}
            style={{ textDecoration: "None", color: "white" }}
            target="_blank"
            rel="noreferrer"
          >
            <Button size="small" color="inherit">
              go to website
            </Button>
          </a>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Article;
