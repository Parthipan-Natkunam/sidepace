"use client";

import { useRouter } from "next/router";
import { Button, Grid, Stack } from "@mui/material";

export default function Home() {
  const router = useRouter();

  return (
    <main className="bg-[url('/img/hero-bg.png')] bg-cover bg-no-repeat">
      <Grid
        container
        height="100vh"
        alignItems="center"
        justifyContent="center"
        direction="column"
        className="bg-sky-500/[.15]"
      >
        <h1 className="text-6xl sm:text-8xl md:text-9xl mb-4">
          &lt;&nbsp;<span className="text-[#f7ee1c]">S</span>ide
          <span className="text-[#f7ee1c]">p</span>ace&nbsp;/&gt;
        </h1>
        <h2 className="text-xs sm:text-sm md:text-lg mb-4">
          A Simplified Tool for Side Projects
        </h2>
        <Stack direction="row" columnGap={1}>
          <Button
            variant="contained"
            onClick={() => router.push("/login?signup=true")}
          >
            SignUp
          </Button>
          <Button variant="outlined" onClick={() => router.push("/login")}>
            LogIn
          </Button>
        </Stack>
      </Grid>
    </main>
  );
}
