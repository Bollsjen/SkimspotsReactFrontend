import Container from "@/components/Container"
import SpotPage from "@/components/page/SpotPage"

export default async function Spot({params,}: { params: { slug: string } }) 
  {
    const { slug } = params

    if(slug && slug.length > 0){
      return (
        <Container className="mt-24">
          <SpotPage slug={slug} id={null} />
        </Container>
      )
    }
    else {
      return (
        <Container>
          <h1>No slug</h1>
        </Container>
      )
    }
  }