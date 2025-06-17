import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const stages = ["New leads", "Proposal", "Negotiation", "Contract sent", "Close"];

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  top: 10,
  left: 'calc(-50% + 16px)',
  right: 'calc(50% + 16px)',
  '& .MuiStepConnector-line': {
    borderTopWidth: 2,
    borderColor: '#e0e0e0',
  },
}));

const RightAlignedStepLabel = styled(StepLabel)({
  '& .MuiStepLabel-labelContainer': {
    textAlign: 'right',
    marginRight: '8px' // Adjust as needed
  }
});

function StepIconComponent({ active, completed }) {
  return completed ? (
    <CheckCircleIcon style={{ color: "#27ae60" }} />
  ) : (
    <RadioButtonUncheckedIcon style={{ color: "#bdbdbd" }} />
  );
}

function LeadStageStepper({ activeStep = 1 }) {
  return (
    <div style={{ padding: "16px 24px", backgroundColor: "#fff", border: "1px solid #eee", borderRadius:"8px", boxShadow: "0 0 0 0.1", marginRight: "auto", width: "99%"}}>
      {/* <Typography style={{ fontWeight: 600, marginBottom: "16px" }}>Stage</Typography> */}

      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<CustomConnector />}
       sx={{
          '& .MuiStep-root': {
            padding: '0 8px',
          },
          '& .MuiStepLabel-root': {
            flexDirection: 'row-reverse', 
          }
        }}
      >
        {stages.map((label, index) => (
          <Step key={label} completed={index < activeStep}>
            <StepLabel StepIconComponent={StepIconComponent}>
              <Typography style={{ fontSize: "12px" }}>{label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default LeadStageStepper;