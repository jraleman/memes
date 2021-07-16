import { useStaticQuery, graphql } from 'gatsby';

const useGallery = () => {
  const data = useStaticQuery(query);
  return data.allFile.nodes.map(node => ({
    ...node.childImageSharp,
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
