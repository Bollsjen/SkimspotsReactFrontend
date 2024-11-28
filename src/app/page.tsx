"use client"

import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Container, Button } from "@mui/material";

export default function Home() {
  const method = () => {
    console.log('click')
  }

  return (
    <>
      <main>  
        <Container>
          <Button variant="contained" onClick={method}>Hello World!</Button>  
        </Container>  
      </main>
      <footer>
      </footer>
    </>
  );
}
