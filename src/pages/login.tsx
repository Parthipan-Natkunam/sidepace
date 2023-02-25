import RouteLink from "next/link";
import { Grid, Container } from "@mui/material";
import SingnUpForm from "@components/signupForm";

export default function Login() {
  return (
    <main>
      <Grid
        container
        height="100vh"
        alignItems="center"
        direction="column"
        className="bg-sky-500/[.15]"
      >
        <RouteLink href="/" className="text-xl md:text-2xl mb-4 mt-8">
          <h1>
            &lt;&nbsp;<span className="text-[#f7ee1c]">S</span>ide
            <span className="text-[#f7ee1c]">p</span>ace&nbsp;/&gt;
          </h1>
        </RouteLink>
        <SingnUpForm />
      </Grid>
    </main>
  );
}
