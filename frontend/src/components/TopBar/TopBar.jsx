import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Paper,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function TopBar() {
    return(
        <Paper elevation={0}
        sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 0,
            py: 1.5,
            borderRadius: 0,
            backgroundColor: "#fff",
        }}>
            <Stack direction="row" alignItems="center" spacing={1}>
                <Box sx={{
                backgroundColor: "#f4f4f6",
                borderRadius: "50%",
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
          }}>
                    <ArrowForwardIcon fontSize="small" />
                </Box>
                
                <Typography fontWeight={700} fontSize="18px">
                    Lead details
                </Typography>
            </Stack>
             

            <Stack direction="row" spacing={1} alignItems="center"> 
                <Button variant="contained" startIcon={<CheckCircleOutlineIcon />}
                    sx={{
                backgroundColor: "#e9f9f1",
                color: "#27ae60",
                textTransform: "none",
                fontWeight: 600,
                justifyContent: "center",
                boxShadow: "none",
                "&:hover": { backgroundColor: "#d4f4e4" },
                }}>
                    Close as Won
                </Button>

                <Button
                variant="outlined"
                startIcon={<RadioButtonUncheckedIcon />}
                    sx={{
                borderColor: "#ddd",
                color: "#6e6e6e",
                backgroundColor: "#f8f8f8",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#eee" },
                    }}
                >
                    Close as Lost
                </Button>
                
                <IconButton>
                    <MoreVertIcon />
                </IconButton>

            </Stack>
        </Paper>
    );
}

export default TopBar;