import { useStaticQuery } from 'gatsby';
import { graphql } from 'graphql';

const useGallery = () => {
    const data = useStaticQuery(query);
    return data.allFile.nodes.map(node => ({
        ...node.childImageSharp, // Note that we're spreading the childImageSharp object here
        id: node.id,
    }));
};

export const query = graphql`
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
`;

export default useGallery;
