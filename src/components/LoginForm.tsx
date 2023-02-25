import {
  TextField,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Container,
  Link,
} from "@mui/material";
import RouteLink from "next/link";

export default function LogIn() {
  return (
    <>
      <Typography component="h2" variant="h6" className="mb-8">
        Log in to your account
      </Typography>
      <Container maxWidth="sm" className="xs:my-none md:my-12">
        <form className="px-4">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} className="mt-2 mb-4">
            <RouteLink href="/">
              <Link>Forgot Password</Link>
            </RouteLink>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Log In
          </Button>
          <Grid container className="mt-2">
            <Grid item>
              <RouteLink href="/login?signup=true">
                <Link>Don&#39;t have an account? Sign Up</Link>
              </RouteLink>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
