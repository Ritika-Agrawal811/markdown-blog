import { useContext } from "react";
import { Box, Skeleton, styled } from "@mui/material";
import ThemeContext from "../context/ThemeContext";

const SkeletonContainer = styled(Box)`
  width: min(100%, 700px);
`;

const LoadingSkeleton = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <SkeletonContainer>
      <Box sx={{ margin: "2em 0" }}>
        <Skeleton
          variant="rectangular"
          width="20%"
          height={35}
          sx={{
            marginBottom: "1em",
            bgcolor: `${isDark ? "grey.800" : "gray.200"}`,
          }}
        />
        <Skeleton
          variant="rectangular"
          width="80%"
          height={20}
          sx={{
            marginBottom: "1em",
            bgcolor: `${isDark ? "grey.800" : "gray.200"}`,
          }}
        />
        <Skeleton
          variant="rectangular"
          width="60%"
          height={20}
          sx={{
            marginBottom: "1em",
            bgcolor: `${isDark ? "grey.800" : "gray.200"}`,
          }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={200}
          sx={{
            marginBottom: "1em",
            bgcolor: `${isDark ? "grey.800" : "gray.200"}`,
          }}
        />
      </Box>
      <Box sx={{ margin: "2em 0" }}>
        <Skeleton
          variant="rectangular"
          width="20%"
          height={35}
          sx={{
            marginBottom: "1em",
            bgcolor: `${isDark ? "grey.800" : "gray.200"}`,
          }}
        />
        <Skeleton
          variant="rectangular"
          width="80%"
          height={20}
          sx={{
            marginBottom: "1em",
            bgcolor: `${isDark ? "grey.800" : "gray.200"}`,
          }}
        />
        <Skeleton
          variant="rectangular"
          width="60%"
          height={20}
          sx={{
            marginBottom: "1em",
            bgcolor: `${isDark ? "grey.800" : "gray.200"}`,
          }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={200}
          sx={{
            marginBottom: "1em",
            bgcolor: `${isDark ? "grey.800" : "gray.200"}`,
          }}
        />
      </Box>
    </SkeletonContainer>
  );
};

export default LoadingSkeleton;
