import { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// TODO: Move to constants file(?)
const nsfwTag = 'NSFW';

// TODO: Move to helpers(?)
const parseImages = (node: any) => ({ ...node.childImageSharp, id: node.id });
const randomSorting = () => 0.5 - Math.random();
const includesNSFW = ({ fluid: { src } }: { fluid: { src: string }}) => src.includes(nsfwTag);
const excludesNSFW = ({ fluid: { src } }: { fluid: { src: string }}) => !src.includes(nsfwTag);

const useGallery = ({ randomSort }) => {
  const [images, setImages] = useState([]);
  const data = useStaticQuery(query);

  useEffect(() => {
    const allImgs = data.allFile.nodes.map(parseImages);
    const isNsfw = document.location.hash?.split('#')[1]?.toLowerCase() === nsfwTag.toLowerCase(); 
    let imgs = allImgs.filter(isNsfw ? includesNSFW : excludesNSFW);
  
    if (randomSort) {
      imgs = imgs.sort(randomSorting);
    }
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
