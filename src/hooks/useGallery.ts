import { useStaticQuery } from 'gatsby';
import { graphql } from 'graphql';

const useGallery = () => {
    const data = useStaticQuery(graphql`
      query {
        allFile(
          filter: { sourceInstanceName: { eq: "gallery" } }
        ) {
          nodes {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `);
  
    return data.allFile.nodes.map(node => ({
        ...node.childImageSharp, // Note that we're spreading the childImageSharp object here
        id: node.id,
    }));
};

export default useGallery;
