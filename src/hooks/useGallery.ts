import { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useGallery = ({ randomSort }) => {
  const [images, setImages] = useState([]);
  const data = useStaticQuery(query);
  
  useEffect(() => {
    const parseImages = (node) => ({ ...node.childImageSharp, id: node.id });
    const randomSorting = () => 0.5 - Math.random();

    const arr = data.allFile.nodes.map(parseImages);
    const imgs = !randomSort ? arr : arr.sort(randomSorting);
    setImages(imgs)
  }, [data]);

  return images;
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
