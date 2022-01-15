import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { display } from "@material-ui/system";

export default function Index({ rows }) {
  const items = rows.map((row) => (
    <Grid item md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={row.picture}
          alt={row.name}
        />
        <CardContent>
          <div
            style={{
              width: "100%",
              display: "inline-flex",
              justifyContent: "space-between",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {row.name}
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              {row.price}
            </Typography>
          </div>

          <Box
            sx={{
              pt: 3,
              pb: 3,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {row.description}
            </Typography>
          </Box>
          <div
            style={{
              width: "100%",
              display: "inline-flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body1" color="text.secondary">
              Category
            </Typography>

            <Typography variant="body1" color="text.secondary">
              {row.cat_name}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  ));
  return (
    <>
      <Box sx={{ width: "100%", pt: 3, pb: 3 }} sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="div" gutterBottom>
          Great Recipes
        </Typography>
      </Box>
      <Grid container rowSpacing={2} spacing={3}>
        {items}
        {/* <Grid item md={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://media.istockphoto.com/photos/prize-wheel-picture-id175482570?b=1&k=20&m=175482570&s=170667a&w=0&h=cHDwnCHXxRE5jMtwX-k1Xq4KSrOTJyGIvt91hrOkZqA="
        alt="green iguana"
      />
      <CardContent>
        <div style={{ width:'100%', display: 'inline-flex', justifyContent: 'space-between' }}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>

        <Typography gutterBottom variant="h5" component="div">2 ETB</Typography>
        </div>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    </Grid> */}
      </Grid>
    </>
  );
}
