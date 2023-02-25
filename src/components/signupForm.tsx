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

export default function SignUp() {
  return (
    <>
      <Typography component="h2" variant="h6" className="mb-8">
        Create a new account
      </Typography>
      <Container maxWidth="sm" className="xs:my-none md:my-12">
        <form className="px-4">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
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
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I have read and agree to the terms & conditions."
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
          <Grid container className="mt-2">
            <Grid item>
              <RouteLink href="/login">
                <Link>Already have an account? Sign in</Link>
              </RouteLink>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
