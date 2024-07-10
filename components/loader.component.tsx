import { Dialog, DialogContent } from "@mui/material";
import React from "react";
export default function Loader() {
  return (
    <Dialog
      open
      sx={{
        "& .MuiDialog-paper": {
          background: "none",
          boxShadow: "none",
        },
      }}
    >
      <DialogContent>
        <div className="snippet" data-title="dot-bricks">
          <div className="stage">
            <div className="dot-bricks"></div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
