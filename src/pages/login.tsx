import RouteLink from "next/link";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import SignupForm from "@components/signupForm";
import LoginForm from "@components/LoginForm";

export default function Login() {
  const router = useRouter();

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
        {router?.query?.signup === "true" ? <SignupForm /> : <LoginForm />}
      </Grid>
    </main>
  );
}
