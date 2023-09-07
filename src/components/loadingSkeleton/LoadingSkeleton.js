import { useContext } from "react";
import { Box, Skeleton, styled } from "@mui/material";
import ThemeContext from "../../context/ThemeContext";

const SkeletonContainer = styled(Box)`
  width: min(100%, 700px);
`;

const LoadingSkeleton = () => {
  const { isDark } = useContext(ThemeContext);
  const dimensions = [
    {
      width: "20%",
      height: 35,
    },
    {
      width: "80%",
      height: 20,
    },
    {
      width: "60%",
      height: 20,
    },
    {
      width: "100%",
      height: 200,
    },
  ];

  return (
    <SkeletonContainer>
      {[1, 2].map((item) => (
        <Box sx={{ margin: "2em 0" }} key={item}>
          {dimensions.map((item, index) => {
            const { width, height } = item;

            return (
              <Skeleton
                variant="rectangular"
                key={index}
                width={width}
                height={height}
                sx={{
                  marginBottom: "1em",
                  bgcolor: `${isDark ? "grey.800" : "gray.200"}`,
                }}
              />
            );
          })}
        </Box>
      ))}
    </SkeletonContainer>
  );
};

export default LoadingSkeleton;
